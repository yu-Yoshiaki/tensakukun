import { definitions } from "app/types/supabase";

export type Customer = definitions["customers"] & {
  customersTags: {
    tags: definitions["tags"];
  }[];
  inflows?: { id: string; name: string };
};
