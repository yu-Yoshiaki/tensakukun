import { supabase } from "src/libs/supabase";
import type { definitions } from "src/types/supabase";
import useSWR from "swr";

type TagsCustomers = definitions["tags"] & {
  customersTags: definitions["customers_tags"][];
};
export const useTags = () => {
  const fetchTags = async () => {
    const { data: tags } = await supabase
      .from<TagsCustomers>("tags")
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
