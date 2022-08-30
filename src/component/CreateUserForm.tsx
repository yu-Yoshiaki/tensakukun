import { useState } from "react";
import { supabase } from "src/lib/supabase";

export const CreateUserForm = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const handleSubmit = async () => {
    // const { data } = await supabase
    //   .from("customers")
    //   .update({ email, phone, username });
    return;
  };

  const handleClick = () => {
    const id = liff.getIDToken();
    console.log("---", id);
  };

  return (
    <div>
      <button onClick={handleClick}>getid</button>
      <form method="post" onSubmit={handleSubmit}>
        name:
        <input type="text" onChange={(e: any) => setUsername(e)} />
        email:
        <input type="text" onChange={(e: any) => setEmail(e)} />
        phone:
        <input type="text" onChange={(e: any) => setPhone(e)} />
      </form>
    </div>
  );
};
