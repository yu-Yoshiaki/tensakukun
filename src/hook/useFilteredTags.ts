import { supabase } from "src/lib/supabase";
import { definitions } from "src/type/supabase";
import { useState } from "react";
import useSWR from "swr";

type Tag = definitions["tags"] & {
  customersTags: definitions["customers_tags"][];
};

const fetchTags = async () => {
  const { data: tags } = await supabase
    .from<Tag>("tags")
    .select(`*,customersTags:customers_tags(*)`);
  return tags;
};

export const useFilteredTags = () => {
  const { data: tags, mutate } = useSWR("filterTags", fetchTags);
  const [selectTags, setSelectTags] = useState<Tag[]>([]);

  const handleSelectTags = (tag: Tag, deleteT: boolean = false) => {
    if (!tags) return;
    setSelectTags([...selectTags, tag]);

    if (deleteT) {
      const newTags = tags.filter((d) => d.id !== tag.id);
      mutate(newTags, { revalidate: false });
    }
  };

  const handleDeleteTags = (tag: Tag, addT: boolean = false) => {
    if (!tags) return;
    if (addT) {
      mutate([...tags, tag], { revalidate: false });
    }
    const newTagList = selectTags.filter(
      (tagInList) => tagInList.id !== tag.id
    );

    setSelectTags(newTagList);
  };

  return { tags, selectTags, handleSelectTags, handleDeleteTags };
};
