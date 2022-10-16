import { useState } from "react";
import { Tag as TagComponent } from "src/component";
import { useFilteredTags } from "src/hook/useFilteredTags";
import type { Tag } from "src/type/supabaseCustom";

type SelectTag = {
  onFilterCustomers: (
    filterTags: {
      id: string;
      insertedAt: string;
      updatedAt: string;
      name: string;
    }[]
  ) => void;
  handleDelete: (tag: Tag, deleteBaseTags?: boolean) => Tag[] | undefined;
  handleSelect: (tag: Tag, addBaseTags?: boolean) => void;
  selectTags: Tag[];
  tag: Tag;
};
export const SelectTag = (props: SelectTag) => {
  const [isSelect, setIsSelect] = useState(false);

  const handleSelect = () => {
    if (isSelect) {
      setIsSelect(false);
      const newTags = props.handleDelete(props.tag);
      if (newTags) props.onFilterCustomers(newTags);
    } else {
      setIsSelect(true);
      props.handleSelect(props.tag);
      props.onFilterCustomers([...props.selectTags, props.tag]);
    }
  };

  return (
    <button
      type="button"
      onClick={handleSelect}
      className={`px-2 ${isSelect && "rounded-md bg-yellow-200"}`}
    >
      <TagComponent name={props.tag.name} />
    </button>
  );
};

export const Filter = (props: {
  handleFilterCustomers: (
    filterTags: {
      id: string;
      insertedAt: string;
      updatedAt: string;
      name: string;
    }[]
  ) => void;
}) => {
  const { tags, selectTags, onDeleteTags, onSelectTags } = useFilteredTags();
  return (
    <div className="row-start-1 w-[300px] divide-y bg-white p-4 md:row-start-auto">
      <h3 className="col-span-3 border-white pb-3 text-center text-sm font-semibold">
        タグ検索
      </h3>
      <div className="flex flex-wrap gap-2 pt-3">
        {tags?.map((tag) => {
          return (
            <SelectTag
              key={tag.id}
              tag={tag}
              selectTags={selectTags}
              handleSelect={onSelectTags}
              handleDelete={onDeleteTags}
              onFilterCustomers={props.handleFilterCustomers}
            />
          );
        })}
      </div>
    </div>
  );
};
