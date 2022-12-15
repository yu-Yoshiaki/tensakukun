import { supabase } from "src/libs/supabase";
import { definitions } from "src/types/supabase";
import dayjs from "dayjs";

export const upsertUrlsCustomers = async (
  urlId: string,
  customerId: string
) => {
  const { data, error } = await supabase
    .from<definitions["urls_cutomers"]>("urls_customers")
    .upsert({
      urlId,
      customerId,
      updateAt: dayjs().format("YYYY/MM/DD"),
    })
    .single();

  return { urlsCustomersId: data?.id, error };
};
