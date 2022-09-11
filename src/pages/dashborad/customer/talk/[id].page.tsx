import dayjs from "dayjs";
import ja from "dayjs/locale/ja";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { supabase } from "src/lib/supabase";
import { Layout } from "src/pages/dashborad/component/Layout";
import { Bubble } from "src/pages/dashborad/customer/talk/Bubble";
import { Form } from "src/pages/dashborad/customer/talk/Form";
import type { definitions } from "src/type/supabase";

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
    <Layout>
      <div
        className="h-[49vh] space-y-5 overflow-y-auto rounded-t-xl bg-sky-200 p-4 md:h-[540px]"
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
      <div className="rounded-b-xl bg-white p-4">
        <Form lineId={id as string} />
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
    .eq("touserid", id);

  const { data } = await supabase
    .from<definitions["customers"]>("customers")
    .select("pictureurl")
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
        id: d.id,
        insertedAt: d.inserted_at,
        updatedAt: d.updated_at,
        messagetype: d.messagetype,
        messageid: d.messageid,
        messagetext: d.messagetext,
        webhookeventid: d.webhookeventid,
        isredelivery: d.isredelivery,
        istimestamp: d.istimestamp,
        replytoken: d.replytoken,
        ismode: d.ismode,
        isReply: d.isReply,
        userId: d.userId,
        pictureurl: data.pictureurl,
      };
    }),
    ...pushmessages.map((d) => {
      return {
        id: d.id,
        insertedAt: d.inserted_at,
        updatedAt: d.updated_at,
        message: d.message,
        touserid: d.touserid,
        istype: d.istype,
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
