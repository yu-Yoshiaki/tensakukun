import { useState } from "react";
import { Tag } from "src/component/Tag";
import { useFilteredTags } from "src/hook/useFilteredTags";
import type { Customer } from "src/pages/customer/index.page";
import type { definitions } from "src/type/supabase";

type Tag = definitions["tags"] & {
  customersTags: definitions["customers_tags"][];
};

type SelectTag = {
  handleFilterCustomers: (
    filterTags: {
      id: string;
      inserted_at: string;
      updated_at: string;
      name: string;
    }[]
  ) => void;
  handleDeleteTags: (tag: Tag) => void;
  handleSelectTags: (tag: Tag) => void;
  selectTags: Tag[];
  tag: Tag;
};
export const SelectTag = (props: SelectTag) => {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        if (isTrue) {
          setIsTrue(false);
          props.handleDeleteTags(props.tag);
          props.handleFilterCustomers(props.selectTags);
        } else {
          setIsTrue(true);
          props.handleSelectTags(props.tag);
          props.handleFilterCustomers([...props.selectTags, props.tag]);
        }
      }}
    >
      <Tag name={props.tag.name} />
    </button>
  );
};

type Filter = {
  customers: Customer[];
  handleFilterCustomers: (
    filterTags: {
      id: string;
      inserted_at: string;
      updated_at: string;
      name: string;
    }[]
  ) => void;
};

export const Filter = (props: Filter) => {
  const { tags, selectTags, handleDeleteTags, handleSelectTags } =
    useFilteredTags();

  return (
    <div className="row-start-1 w-[300px] divide-y bg-white p-4 md:row-start-auto">
      <h3 className="col-span-3 border-white pb-3 text-center text-sm font-semibold">
        タグ検索
      </h3>
      <div className="flex flex-wrap gap-2 pt-3">
        {tags?.map((tag) => {
          return (
            <SelectTag
              tag={tag}
              selectTags={selectTags}
              handleSelectTags={handleSelectTags}
              handleDeleteTags={handleDeleteTags}
              handleFilterCustomers={props.handleFilterCustomers}
            />
          );
        })}
      </div>
    </div>
  );
};
