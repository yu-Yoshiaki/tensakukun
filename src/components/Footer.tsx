// import Link from "next/link";
export const Footer = () => {
  return (
    <div className="bg-gray-800 py-8 px-20 text-center text-gray-200">
      <div className="flex justify-center gap-4">
        {/* <Link href="/privacy">
          <a className="border-b-2 border-gray-800 font-semibold hover:text-gray-500">
            プライバシーポリシー
          </a>
        </Link> */}
        {/* <Link href="/privacy">
          <a className="border-b-2 border-gray-800 font-semibold hover:text-gray-500">
            特定商取引
          </a>
        </Link> */}
      </div>
      <p>
        © 2023{" "}
        <a href="https://a-release.com" className="font-semibold text-blue-400">
          α-Release企画
        </a>{" "}
        All rights reserved
      </p>
    </div>
  );
};
