import { definitions } from "app/types/supabase";

export type Tag = definitions["tags"] & {
  customersTags: definitions["customers_tags"][];
};
