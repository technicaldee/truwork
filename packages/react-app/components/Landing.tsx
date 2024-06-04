import { useSession } from "next-auth/react";
import Image from "next/image";

const { data: session } = useSession();

const Landing = ({}) => {
  return (
    <>
      <div className="bg-orange-700 overflow-hidden flex w-full min-h-screen">
        <div className="w-1/2">
          <h1>Work you can Trust</h1>
          <p>
            Built on the Celo blockchain, TruWork protects the interests of
            those buying and selling digital services.
          </p>
          {!session ? "Sign in with Github" : "Sign Out"}
        </div>
        <div className="w-1/2 h-60 flex justify-end items-end">
          <Image
            className="h-60"
            width="500"
            height="300"
            alt="Hero Image"
            src="/hero.png"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Landing;
