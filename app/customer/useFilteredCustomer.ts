import { supabase } from "app/libs/supabase";
import { definitions } from "app/types/supabase";
import { Customer } from "app/types/supabaseCustom";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useUserSession } from "app/auth/useUserSession";

const fetchCustomers = async (id: string) => {
  const { data } = await supabase
    .from<Customer>("customers")
    .select("*, customersTags:customers_tags(*, tags(*))");

  return data;
};

export const useFilteredCustomer = () => {
  const { session } = useUserSession();
  const { data: customers } = useSWR("filterCustomers", fetchCustomers);

  const [count, setCount] = useState(0);
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[] | null>(
    null
  );

  const onFilterCustomers = (filterTags: definitions["tags"][]) => {
    if (!customers) return;
    const newCustomers = customers.filter(({ customersTags }) => {
      const haveTag = customersTags.filter(({ tags }) => {
        return filterTags.some((key) => key.id === tags.id);
      });
      return haveTag.length === filterTags.length;
    });
    setCount(newCustomers.length);
    setFilteredCustomers(newCustomers);
  };

  useEffect(() => {
    if (customers) {
      setCount(customers.length);
      setFilteredCustomers(customers);
    }
  }, [customers]);

  return {
    customers,
    filteredCustomers,
    onFilterCustomers,
    count,
    setCount,
  };
};
