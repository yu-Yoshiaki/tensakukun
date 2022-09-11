import Head from "next/head";
import Link from "next/link";

const LP = () => {
  return (
    <div>
      <Head>
        <title>Lブースト</title>
      </Head>
      <div>
        <header className="fixed flex h-20 w-full items-center justify-around bg-white shadow-md">
          <Link href={"/"}>
            <a>
              <h1>Lブースト</h1>
            </a>
          </Link>
          <nav>
            <Link href={"/price"}>料金</Link>
          </nav>
        </header>
        <main className="min-h-screen bg-sky-50 pt-20">
          <div>hello, world.</div>
          <div></div>
        </main>
        <footer className="bg-gray-800">a</footer>
      </div>
    </div>
  );
};

export default LP;
