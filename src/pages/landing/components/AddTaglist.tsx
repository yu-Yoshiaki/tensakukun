// import type { Dispatch, SetStateAction } from "react";
// import { useState } from "react";

// type Tag = {
//   id: number;
//   name: string;
// };

export const AddTaglist = () =>
  // props: {
  // tagList: Tag[];
  // setTaglist: Dispatch<SetStateAction<Tag[]>>;
  // }
  {
    // const [name, setName] = useState("");
    // const handleChange = (value: string) => {
    //   setName(value);
    // };
    // const handleAdd = () => {
    //   props.setTaglist([
    //     ...props.tagList,
    //     { id: props.tagList.length + 1, name },
    //   ]);
    // };

    return (
      <div className="flex gap-4 rounded-md p-2">
        {/* <input type="text" onChange={handleChange(e)} /> */}
        {/* <button onClick={handleAdd}>新規作成</button> */}
      </div>
    );
  };
