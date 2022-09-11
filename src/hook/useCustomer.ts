import { supabase } from "src/lib/supabase";
import { definitions } from "src/type/supabase";
import dayjs from "dayjs";

type Customers = definitions["customers"];

export const useCustomer = () => {
  const query = supabase.from<Customers>("customers");

  const createCustomer = async ({
    username,
    email,
    phone,
    lineid,
  }: Customers) => {
    const now = dayjs();
    const { data, error } = await query.insert([
      {
        username,
        email,
        phone,
        lineid,
        inserted_at: now.format(),
        updated_at: now.format(),
      },
    ]);

    if (error) return { error };
    return { data };
  };

  const updateCustomer = async ({
    username,
    email,
    phone,
    lineid,
  }: Customers) => {
    const now = dayjs();
    const { data, error } = await query
      .update({
        username,
        email,
        phone,
        updated_at: now.format(),
      })
      .eq("lineid", lineid);

    if (error) return { error };
    return { data };
  };

  const deleteCustomer = async ({ lineid }: Customers) => {
    const { data, error } = await query.delete().eq("lineid", lineid);

    if (error) return { error };
    return { data };
  };

  return { createCustomer, updateCustomer, deleteCustomer };
};
