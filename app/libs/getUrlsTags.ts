import { supabase } from "app/libs/supabase";
// import { supabaseServer } from "app/libs/supabaseServer";
import { definitions } from "app/types/supabase";

const urlsQuery = supabase.from<
  definitions["urls"] & {
    tags: { tagId: string }[];
  }
>("urls");

export const getUrlsTags = async (urlId: string) => {
  const { data: url, error } = await urlsQuery
    .select("*, tags:urls_tags(tagId)")
    .eq("id", urlId)
    .single();

  return { url, error };
};
