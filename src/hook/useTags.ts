import { supabase } from "src/lib/supabase";
import { definitions } from "src/type/supabase";
import useSWR from "swr";

type Tags = definitions["tags"];

type Tags_Customers = Tags & {
  customersTags: definitions["customers_tags"][];
};

export const useTags = () => {
  const tagsQuery = supabase.from<Tags>("tags");

  const fetchTags = async () => {
    const { data: tags } = await supabase
      .from<Tags>("tags")
      .select(`*,customersTags:customers_tags(*)`)
      .order("inserted_at", { ascending: false });
    return tags;
  };

  const upsertTags = async (tagsData: definitions["tags"]) => {
    const { data: tags, error } = await supabase
      .from<Tags>("tags")
      .upsert(tagsData);
    return { tags: tags, error };
  };

  const {
    data: tags,
    error,
    mutate,
  } = useSWR("tags", fetchTags, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    tags,
    isLoading: !tags,
    isError: error,
    mutate,
    fetchTags,
    upsertTags,
    tagsQuery,
  };
};
