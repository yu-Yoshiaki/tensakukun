/* eslint-disable no-console */
import type { CustomNextPage } from "next";
import { useState } from "react";
import { BlogLayout } from "src/component";

const Root: CustomNextPage = () => {
  const [displayName, setDisplayName] = useState<string>();

  const handleFetchProfile = async () => {
    try {
      const profile = await liff.getProfile();
      setDisplayName(profile.displayName);
    } catch (err: any) {
      console.log(err.message, "===");
    }
  };

  const handleQrCamera = async () => {
    try {
      const scan = await liff.scanCodeV2();
      console.log(scan);
    } catch (err: any) {
      console.log(err.message, "===");
    }
  };

  return (
    <div>
      <h2>Root</h2>
      <button
        onClick={handleFetchProfile}
        className="p-4 border border-blue-400"
      >
        FetchProfile
      </button>
      <button onClick={handleQrCamera} className="p-4 border border-blue-400">
        QR
      </button>
      <p>{displayName}</p>
    </div>
  );
};

Root.getLayout = BlogLayout;

export default Root;
