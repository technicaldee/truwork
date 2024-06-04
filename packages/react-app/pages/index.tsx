import { useSocialConnect } from "@/SocialConnect/useSocialConnect";
import HomePage from "@/components/Home";
import SocialConnectUI from "@/components/SocialConnectUI";
import { ContractKitProvider } from "@celo-tools/use-contractkit";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const { data: session } = useSession();

  const [isOpen, setIsOpen] = useState(false);
  const [hideConnectBtn, setHideConnectBtn] = useState(false);
  const { account, connected, lookupAddress } = useSocialConnect();

  return (
    <main className="w-screen bg-white flex p-4 text-gray-800 text-lg font-bold">
      {!session ? (
        <div className="bg-white overflow-hidden lg:flex md:flex w-full h-screen">
          <div className="lg:w-1/2 md:w-1/2 w-full flex justify-center items-center ">
            <Image
              width="350"
              height="300"
              alt="Hero Image"
              src="/hero.png"
            ></Image>
          </div>
          <div className="lg:w-1/2 p-4 md:w-1/2 w-full flex justify-center flex-col">
            <h1 className="text-5xl font-bold">Work you can Trust</h1>
            <p className="font-light">
              Built on the Celo blockchain, TruWork protects the interests of
              those buying and selling digital services.
            </p>
            <>
              <SocialConnectUI
                isOpen={isOpen}
                closeModal={() => {
                  setIsOpen(false);
                }}
              />
              <Disclosure as="nav" className="">
                {({ open }) => (
                  <>
                    <div className="md:flex lg:flex  items-center  mt-4">
                      {connected && account && (
                        <div className="">
                          <button
                            type="button"
                            onClick={() => setIsOpen(true)}
                            className="text-white bg-orange-700 hover:bg-orange-700/80 focus:ring-4 focus:outline-none focus:ring-orange-700/50 font-medium rounded-xl text-base px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-orange/40 dark:focus:ring-gray-600"
                          >
                            Connect your social network
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </Disclosure>
            </>
          </div>
        </div>
      ) : (
        <ContractKitProvider
          dapp={{ name: "", url: "", description: "", icon: "" }}
        >
          <HomePage />
        </ContractKitProvider>
      )}
    </main>
  );
}
