/* eslint-disable no-console */
import type { CustomNextPage } from "next";
import { useState } from "react";
import { BlogLayout } from "src/component/BlogLayout";

const Root: CustomNextPage = () => {
  const [displayName, setDisplayName] = useState<string>();

  const handleQrCamera = async () => {
    try {
      const profile = await liff.getProfile();
      setDisplayName(profile.displayName);
    } catch (err: any) {
      console.log(err.message, "===");
    }
  };

  return (
    <div>
      <h2>Root</h2>
      <button onClick={handleQrCamera}>Click</button>
      <p>{displayName}</p>
    </div>
  );
};

Root.getLayout = BlogLayout;

export default Root;
