import { definitions } from "src/types/supabase";

export type Tag = definitions["tags"] & {
  customersTags: definitions["customers_tags"][];
};
