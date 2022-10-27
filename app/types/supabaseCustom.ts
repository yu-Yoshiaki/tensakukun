import { definitions } from "app/types/supabase";

export type Tag = definitions["tags"] & {
  customersTags: definitions["customers_tags"][];
};

export type Customer = definitions["customers"] & {
  customersTags: {
    tags: definitions["tags"];
  }[];
};
