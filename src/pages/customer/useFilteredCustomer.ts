import { useEffect, useState } from "react";
import { supabase } from "src/libs/supabase";
import type { definitions } from "src/types/supabase";
import useSWR from "swr";

import type { Customer } from "./types/Customer";

const fetchCustomers = async () => {
  const { data } = await supabase
    .from<Customer>("customers")
    .select(
      "*, customersTags:customers_tags(*, tags(*)) ,inflows: tags(id,name)"
    );

  return data;
};

export const useFilteredCustomer = () => {
  const { data: customers } = useSWR("filterCustomers", fetchCustomers);
  const [count, setCount] = useState(0);
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[] | null>(
    null
  );

  const onFilterCustomers = (filterTags: definitions["tags"][]) => {
    if (!customers) return;
    const newCustomers = customers.filter(({ customersTags }) => {
      const haveTag = customersTags.filter(({ tags }) => {
        return filterTags.some((key) => {
          return key.id === tags.id;
        });
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
