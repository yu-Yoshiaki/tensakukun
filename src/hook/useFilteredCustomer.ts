import { supabase } from "src/lib/supabase";
import { definitions } from "src/type/supabase";
import { useEffect, useState } from "react";
import useSWR from "swr";

type Customers = definitions["customers"] & {
  customersTags: { tags: definitions["tags"] }[];
};

const fetchCustomers = async () => {
  const { data } = await supabase
    .from<Customers>("customers")
    .select("*, customersTags:customers_tags(*, tags(*))");

  return data;
};

export const useFilteredCustomer = () => {
  const { data: customers } = useSWR<Customers[] | null>(
    "filterCustomers",
    fetchCustomers
  );

  const [count, setCount] = useState(0);
  const [filteredCustomers, setFilteredCustomers] = useState<
    Customers[] | null
  >(null);

  useEffect(() => {
    if (customers) {
      setCount(customers.length);
    }
  }, [customers]);

  const handleFilterCustomers = (filterTags: definitions["tags"][]) => {
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
    handleFilterCustomers,
    count,
    setCount,
  };
};
