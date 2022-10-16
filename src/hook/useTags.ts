import { supabase } from "src/lib/supabase";
import { definitions } from "src/type/supabase";
import useSWR from "swr";

type Tags_Customers = definitions["tags"] & {
  customersTags: definitions["customers_tags"][];
};
export const useTags = () => {
  const fetchTags = async () => {
    const { data: tags } = await supabase
      .from<Tags_Customers>("tags")
      .select("*,customersTags:customers_tags(*)")
      .order("insertedAt", { ascending: false });
    return tags;
  };

  const upsertTags = async (tagsData: definitions["tags"]) => {
    const { data: tags, error } = await supabase
      .from<definitions["tags"]>("tags")
      .upsert(tagsData);
    return { tags: tags, error };
  };

  const { data: tags, error, mutate } = useSWR("tags", fetchTags);

  return {
    tags,
    isError: error,
    mutate,
    fetchTags,
    upsertTags,
  };
};
