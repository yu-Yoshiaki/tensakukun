import { useState } from "react";
import { supabase } from "src/libs/supabase";
import type { Tag } from "src/types/supabaseCustom";
import useSWR from "swr";

const fetchTags = async () => {
  const { data: tags } = await supabase
    .from<Tag>("tags")
    .select(`*,customersTags:customers_tags(*)`);
  return tags;
};

export const useFilteredTags = () => {
  const { data: tags, mutate } = useSWR("filterTags", fetchTags);
  const [selectTags, setSelectTags] = useState<Tag[]>([]);

  const onSelectTags = (tag: Tag, deleteBaseTags = false) => {
    if (!tags) return;
    setSelectTags([...selectTags, tag]);

    if (deleteBaseTags) {
      const newTags = tags.filter((d) => {
        return d.id !== tag.id;
      });
      mutate(newTags, { revalidate: false });
    }
  };

  const onDeleteTags = (tag: Tag, addBaseTags = false) => {
    if (!tags) return;
    if (addBaseTags) {
      mutate([...tags, tag], { revalidate: false });
    }
    const newTagList = selectTags.filter((tagInList) => {
      return tagInList.id !== tag.id;
    });

    setSelectTags(newTagList);
    return newTagList;
  };

  return { tags, selectTags, onSelectTags, onDeleteTags };
};
