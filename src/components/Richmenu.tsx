import type { Action, Area, RichMenu } from "@line/bot-sdk";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Props = {
  editMode: boolean;
};

export const Richmenu = (props: Props) => {
  const [isHide, setIsHide] = useState(false);
  const [image, setImage] = useState<string>();
  const [imageError, setImageError] = useState<string>();

  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
    control,
    setValue,
  } = useForm<RichMenu>({
    defaultValues: { chatBarText: "メニュー", selected: false },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "areas",
  });

  const onSubmit = async (richMenu: RichMenu) => {
    if (!image) return setImageError("画像が選択されていません。");
    try {
      const { data: menuId } = await axios.post<string>(
        "/api/richmenu/create",
        {
          richMenu,
        }
      );
      const { data } = await axios.post<string>(
        "/api/richmenu/linkImageToMenu",
        {
          menuId,
          image: "/Users/yumotoyoshiaki/Downloads/タグ.png",
        }
      );

      toast.success(data);
    } catch (error: any) {
      toast.error(error.message);
    }
    // console.log(image?.substring(5));
  };

  const AppendMessageButton = () => {
    const handleClick = () => {
      append({
        bounds: { x: 0, y: 0, width: 0, height: 0 },
        action: { type: "message", text: "" },
      });
    };
    return (
      <button
        type="button"
        onClick={handleClick}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-white"
      >
        +
      </button>
    );
  };

  const RemoveMessageButton = (props: { index: number }) => {
    const handleClick = () => {
      remove(props.index);
    };
    return (
      <button
        type="button"
        onClick={handleClick}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-sm font-semibold text-white"
      >
        ✖︎
      </button>
    );
  };

  const handleSetMenuTemplate = (event: any) => {
    reset({ areas: [] });
    if (event.target.value === "") return setIsHide(false);

    const data1: {
      bounds: Area;
      action: Action<{
        label?: string | undefined;
      }>;
    } = {
      bounds: { x: 0, y: 0, width: 833, height: 843 },
      action: { type: "message", text: "メッセージ1", label: "" },
    };
    const data2: {
      bounds: Area;
      action: Action<{
        label?: string | undefined;
      }>;
    } = {
      bounds: { x: 833, y: 0, width: 833, height: 843 },
      action: { type: "message", text: "メッセージ2", label: "" },
    };
    const data3: {
      bounds: Area;
      action: Action<{
        label?: string | undefined;
      }>;
    } = {
      bounds: { x: 1666, y: 0, width: 833, height: 843 },
      action: { type: "message", text: "メッセージ3", label: "" },
    };
    const data4: {
      bounds: Area;
      action: Action<{
        label?: string | undefined;
      }>;
    } = {
      bounds: { x: 0, y: 843, width: 833, height: 843 },
      action: { type: "message", text: "メッセージ4", label: "" },
    };
    const data5: {
      bounds: Area;
      action: Action<{
        label?: string | undefined;
      }>;
    } = {
      bounds: { x: 833, y: 843, width: 833, height: 843 },
      action: { type: "message", text: "メッセージ5", label: "" },
    };
    const data6: {
      bounds: Area;
      action: Action<{
        label?: string | undefined;
      }>;
    } = {
      bounds: { x: 1666, y: 843, width: 833, height: 843 },
      action: { type: "message", text: "メッセージ6", label: "" },
    };

    if (event.target.value === "2*3") {
      setIsHide(true);
      setValue("size", { width: 2500, height: 1686 });

      append([data1, data2, data3, data4, data5, data6]);
    }
    if (event.target.value === "2*2") {
      setIsHide(true);
      setValue("size", { width: 2500, height: 1686 });
      append([
        {
          bounds: { x: 0, y: 0, width: 1250, height: 843 },
          action: { type: "message", text: "メッセージ1", label: "" },
        },
        {
          bounds: { x: 1250, y: 0, width: 1250, height: 843 },
          action: { type: "message", text: "メッセージ2", label: "" },
        },
        {
          bounds: { x: 0, y: 843, width: 1250, height: 843 },
          action: { type: "message", text: "メッセージ3", label: "" },
        },
        {
          bounds: { x: 1250, y: 843, width: 1250, height: 843 },
          action: { type: "message", text: "メッセージ4", label: "" },
        },
      ]);
    }
    if (event.target.value === "1*3") {
      setIsHide(true);
      setValue("size", { width: 2500, height: 843 });
      append([data1, data2, data3]);
    }
  };

  const handleChangeFileToBase64 = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const url = URL.createObjectURL(e.target.files[0]);
    setImage(url);
  };

  useEffect(() => {
    if (props.editMode) return;
  });

  return (
    <div className="w-[600px] rounded-md border bg-gray-300 p-10">
      <h3>リッチメニュー作成</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col justify-between">
          <label htmlFor="name">メニュー名</label>
          <input
            type="text"
            {...register("name")}
            className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-200 focus:ring-red-200 "
          />
        </div>
        <div className="flex flex-col justify-between">
          <label htmlFor="chatBarText">メニューバーテキスト</label>
          <input
            type="text"
            {...register("chatBarText")}
            className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-200 focus:ring-red-200 "
          />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="selected">selected</label>
          <input
            type="text"
            {...register("selected")}
            className="block w-20 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-200 focus:ring-red-200 "
          />
        </div>

        {<div className="text-red-500">{imageError}</div> ?? ""}
        <div className="flex gap-2">
          <div className="relative h-[200px] w-[400px] border">
            {image && (
              <Image src={image} alt="" layout="fill" objectFit="contain" />
            )}
          </div>
          <div>
            <label
              htmlFor="photo"
              className="block w-20 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-200 focus:ring-red-200 "
            >
              変更する
              <input
                onChange={handleChangeFileToBase64}
                type="file"
                id="photo"
                accept="image/*"
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="menuTemplate">テンプレート選択</label>
          <select
            name="menuTemplate"
            id="menuTemplate"
            onChange={handleSetMenuTemplate}
            className="block w-36 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-200 focus:ring-red-200 "
          >
            <option value=""></option>
            <option value="2*3">縦2 ✖︎ 横3</option>
            <option value="2*2">縦2 ✖︎ 横2</option>
            <option value="1*3">縦1 ✖︎ 横3</option>
          </select>
        </div>

        {!isHide && (
          <div className="flex gap-4">
            <div className="flex items-center gap-4">
              <label htmlFor="size.width">横</label>
              <input
                type="number"
                {...register("size.width")}
                className="block w-20 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-200 focus:ring-red-200 "
              />
            </div>
            <div className="flex items-center gap-4">
              <label htmlFor="size.height">縦</label>
              <input
                type="number"
                {...register("size.height")}
                className="block w-20 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-200 focus:ring-red-200 "
              />
            </div>
          </div>
        )}
        {!isHide && <AppendMessageButton />}
        <div>
          {fields.map((field, index) => {
            return (
              <div
                key={field.id}
                className="mb-5 rounded-md border bg-red-200 p-5"
              >
                {!isHide && (
                  <div>
                    <RemoveMessageButton index={index} />
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-4">
                        <label htmlFor={`areas.${index}.bounds.x`}>
                          開始位置 X
                        </label>
                        <input
                          type="number"
                          {...register(`areas.${index}.bounds.x`)}
                          className="block w-20 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-200 focus:ring-red-200 "
                        />
                      </div>
                      <div className="flex items-center space-x-4">
                        <label htmlFor={`areas.${index}.bounds.width`}>
                          X → 幅
                        </label>
                        <input
                          type="number"
                          className="block w-20 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-200 focus:ring-red-200 "
                          {...register(`areas.${index}.bounds.width`)}
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-4">
                        <label htmlFor={`areas.${index}.bounds.y`}>
                          開始位置 Y
                        </label>
                        <input
                          type="number"
                          className="block w-20 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-200 focus:ring-red-200 "
                          {...register(`areas.${index}.bounds.y`)}
                        />
                      </div>

                      <div className="flex items-center space-x-4">
                        <label htmlFor={`areas.${index}.bounds.height`}>
                          Y ↓ 高さ
                        </label>
                        <input
                          type="number"
                          className="block w-20 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-200 focus:ring-red-200 "
                          {...register(`areas.${index}.bounds.height`)}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex gap-4">
                  <div>
                    <label htmlFor={`areas.${index}.action.type`}>
                      アクション
                    </label>
                    <input
                      type="text"
                      {...register(`areas.${index}.action.type`)}
                      className="block w-32 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-200 focus:ring-red-200 "
                    />
                  </div>
                  <div>
                    <label htmlFor={`areas.${index}.action.text`}>
                      テキスト
                    </label>
                    <input
                      type="text"
                      {...register(`areas.${index}.action.text`)}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-200 focus:ring-red-200 "
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex auto-cols-min gap-2">
          <input
            type="submit"
            value={"登録"}
            className="w-[126px] rounded-md bg-green-400 py-2 px-4 text-center text-sm font-semibold text-white hover:cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};
