import { supabase } from "app/libs/supabase";
// import { supabaseServer } from "app/libs/supabaseServer";
import { definitions } from "app/types/supabase";
import dayjs from "dayjs";

const urlsQuery = supabase.from<
  definitions["urls"] & {
    tags: { tagId: string }[];
  }
>("urls");

export const countupClicks = async (urlId: string) => {
  const { data: url, error } = await urlsQuery
    .update({
      id: urlId,
      updatedAt: dayjs().format("YYYY/MM/DD"),
      owner: "c8a64e92-b779-4492-9bf4-483b8dd4c731",
    })
    .single();

  return { url, error };
};

// const body = {
//   id: urlId,
//   updatedAt: dayjs().format("YYYY/MM/DD"),
//   owner: "c8a64e92-b779-4492-9bf4-483b8dd4c731",
// };
