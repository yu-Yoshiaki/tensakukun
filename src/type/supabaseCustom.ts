import { definitions } from "src/type/supabase";

export type Tag = definitions["tags"] & {
  customersTags: definitions["customers_tags"][];
};

export type Customer = definitions["customers"] & {
  customersTags: {
    tags: definitions["tags"];
  }[];
};
