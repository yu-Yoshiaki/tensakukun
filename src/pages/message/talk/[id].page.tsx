import dayjs from "dayjs";
import ja from "dayjs/locale/ja";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Layout } from "src/component/";
import { supabase } from "src/lib/supabase";
import type { definitions } from "src/type/supabase";

import { Bubble } from "./Bubble";
import { Form } from "./Form";

dayjs.locale(ja);

type Talk = {
  talks: {
    id: string;
    insertedAt: string;
    updatedAt: string;
    istype?: string | undefined;
    message?: string | undefined;
    touserid?: string;
    messagetype?: string;
    messageid?: string;
    messagetext?: string;
    webhookeventid?: string;
    isredelivery?: boolean;
    istimestamp?: string;
    replytoken?: string;
    ismode?: string;
    isReply?: boolean;
    userId?: string;
    pictureurl?: string;
  }[];
};

const Talk = (props: Talk) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout header="LINEトーク">
      <div className="flex gap-8 p-8">
        <div>
          <div className="bg-yellow-200">
            ※ 自動返信のやり取りは表示されません。
          </div>
          <div
            className="h-[555px] space-y-5 overflow-y-auto bg-sky-200 p-4 md:h-[520px]"
            id={"scrollbar"}
          >
            {props.talks?.map((talk) => {
              const time = dayjs(talk.insertedAt).format("HH:mm");
              return (
                <div key={talk.id}>
                  <Bubble
                    imageSrc={talk.pictureurl}
                    imageArt=""
                    text={talk.messagetext ?? talk.message}
                    time={time}
                  />
                </div>
              );
            })}
          </div>
          <div className="bg-white p-4">
            <Form lineId={id as string} />
          </div>
        </div>

        <div></div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id as string;
  const { data: messages } = await supabase
    .from<definitions["talks"]>("talks")
    .select("*", { count: "exact" })
    .eq("userId", id);

  const { data: pushmessages } = await supabase
    .from<definitions["pushmessages"]>("pushmessages")
    .select("*")
    .eq("toUser", id);

  const { data } = await supabase
    .from<definitions["customers"]>("customers")
    .select("*")
    .eq("lineid", id)
    .single();

  if (!pushmessages || !messages || !data)
    return {
      props: {
        talks: null,
      },
    };

  const talklist = [
    ...messages.map((d) => {
      return {
        ...d,
        pictureurl: data.pictureurl,
      };
    }),
    ...pushmessages.map((d) => {
      return {
        id: d.id,
        insertedAt: d.insertedAt,
        updatedAt: d.updatedAt,
        message: d.message,
        touserid: d.toUser,
        istype: d.isType,
      };
    }),
  ];
  const talks = talklist.sort((a, b) => {
    return a.insertedAt < b.insertedAt ? -1 : 1; //オブジェクトの昇順ソート
  });

  return {
    props: {
      talks,
    },
  };
};

export default Talk;
