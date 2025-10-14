import AppButton from "../common/AppButton";
import Image from "next/image";
import automationImg from "@/assets/automatonImg.png";

export default function BlockChainAutomation() {
  return (
    <section className=" bg-[#0B1117]">
      <div className="px-6 max-w-[1320px] h-[1024px] bg-[#0B1117] mx-auto mt-25 py-10">
        <div>
          {/* Header Section */}
          <div>
            <AppButton
              title="How It Works"
              className="border border-[#2A7183]! text-sm! mx-auto rounded-[60px] bg-[#4CCEEE1A]"
            />
            <h1
              className={`font-[700] text-[48px] my-4 flex justify-center flex-col text-center text-[rgba(76,206,238,1)] font-[Sofia_Sans]`}
            >
              <span className="text-white!">AI-Powered</span> Blockchain
              Automation
            </h1>
            <p className="text-white/70 flex justify-center">
              Seamlessly integrate AI into your blockchain workflow in just a
              few steps.
            </p>
          </div>
          <div className="flex gap-4 justify-center items-center p-6 pt-0">
            <div className="h-full">
              <div className=" pt-72">
                <h4 className="text-lg  text-center font-semibold text-cyan-400">
                  AI scans and analyzes data
                </h4>
                <ul className="list-disc py-6  pl-30 text-[16px] text-[#B2B4B6]">
                  <li className="mb-1">
                    Detects vulnerabilities and optimizes blockchain
                    performance.
                  </li>
                  <li>
                    Detects vulnerabilities and optimizes blockchain
                    performance.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg mt-2 text-center font-semibold text-cyan-400">
                  AI scans and analyzes data
                </h4>
                <ul className="list-disc py-6  pl-30 text-[16px] text-[#B2B4B6]">
                  <li className="mb-1">
                    Detects vulnerabilities and optimizes blockchain
                    performance.
                  </li>
                  <li>
                    Detects vulnerabilities and optimizes blockchain
                    performance.
                  </li>
                </ul>
              </div>
            </div>
            <Image
              src={automationImg}
              height={522}
              width={453}
              alt="Vector svg"
            />
            <div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400">
                  Seamless Blockchain Support
                </h4>
                <ul className="list-disc py-6 pl-4 text-[16px] text-[#B2B4B6]">
                  <li className="mb-1">
                    Supports Base, with future support for Solana and other EVM
                    chains.
                  </li>
                  <li>Easy integration with minimal setup. </li>
                </ul>
              </div>
              <div className="mt-22">
                <h4 className="text-lg font-semibold text-cyan-400">
                  Seamless Blockchain Support
                </h4>
                <ul className="list-disc py-6 pl-4 text-[16px] text-[#B2B4B6]">
                  <li className="mb-1">
                    Supports Base, with future support for Solana and other EVM
                    chains.
                  </li>
                  <li>Easy integration with minimal setup. </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
