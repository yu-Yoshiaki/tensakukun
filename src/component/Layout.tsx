import { ReactNode, useState } from "react";
import { Signin } from "src/component/Signin";
import { useUserSession } from "src/hook/useUserSession";
import { Header } from "./Header";
import { Sidemenu } from "./Sidemenu";

/**
 * @package
 */

type Props = {
  header: string;
  description?: string;
  children: ReactNode;
};

export const Layout = (props: Props) => {
  const { session } = useUserSession();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 text-gray-700 min-h-screen">
      {/* {session ? (
        <div className="grid md:grid-cols-[250px,auto] divide-x">
          <Header />
          <main className="h-screen overflow-auto">
            <h2 className="m-8 text-2xl font-bold">{props.header}</h2>
            <p className="md:ml-8 mb-2 w-[80%] min-h-[70px]">
              {props.description}
            </p>
            <div className="overflow-auto">{props.children}</div>
          </main>
        </div>
      ) : (
        <main className="flex items-center justify-center h-screen">
          <Signin />
        </main>
      )} */}
      <div className="md:grid grid-cols-[250px,auto]">
        {isOpen ? (
          <div className="fixed z-10 border-r md:block">
            <Header />
          </div>
        ) : (
          <div className="border-r hidden md:block">
            <Header />
          </div>
        )}
        <main className="overflow-y-auto">
          <div className="flex justify-between items-center m-8 md:mb-4">
            <h2 className="text-2xl font-bold">{props.header}</h2>
            <div className="block md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
                onClick={handleOpen}
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <p className="px-8 md:px-0 md:ml-8 md:w-[80%] min-h-[50px]">
            {props.description}
          </p>
          <div>{props.children}</div>
        </main>
      </div>
    </div>
  );
};
