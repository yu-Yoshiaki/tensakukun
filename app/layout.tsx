import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const RootLayout = (props: { children: ReactNode }) => {
  return (
    <html lang="en">
      <Toaster />
      <body>{props.children}</body>
    </html>
  );
};

export default RootLayout;
