import { definitions } from "src/types/supabase";

export type Customer = definitions["customers"] & {
  customersTags: {
    tags: definitions["tags"];
  }[];
  inflows?: { id: string; name: string };
};
