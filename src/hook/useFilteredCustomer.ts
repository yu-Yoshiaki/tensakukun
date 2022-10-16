import { supabase } from "src/lib/supabase";
import { definitions } from "src/type/supabase";
import { Customer } from "src/type/supabaseCustom";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetchCustomers = async () => {
  const { data } = await supabase
    .from<Customer>("customers")
    .select("*, customersTags:customers_tags(*, tags(*))");

  return data;
};

export const useFilteredCustomer = () => {
  const { data: customers } = useSWR<Customer[] | null>(
    "filterCustomers",
    fetchCustomers
  );

  const [count, setCount] = useState(0);
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[] | null>(
    null
  );

  useEffect(() => {
    if (customers) {
      setCount(customers.length);
      setFilteredCustomers(customers);
    }
  }, [customers]);

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

  return {
    customers,
    filteredCustomers,
    onFilterCustomers,
    count,
    setCount,
  };
};
