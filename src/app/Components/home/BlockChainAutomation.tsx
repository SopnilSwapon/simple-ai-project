import AppButton from "../common/AppButton";
import Image from "next/image";
import automationImg from "@/assets/automatonImg.png";

export default function BlockChainAutomation() {
  return (
    <section className="bg-[#0B1117]">
      <div className="bg-[#0B1117] mt-15 lg:mt-25 lg:py-25 py-15 max-w-[1320px] mx-auto px-6">
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
          <div className="flex gap-4 p-6 pt-10">
            <div className="h-full">
              <div className="pt-24">
                <h4 className="text-lg text-center font-semibold text-cyan-400">
                  Seamless Blockchain Support
                </h4>
                <hr className="w-[60%] mx-auto text-cyan-400 border-b border-b-cyan-400 mt-1" />
                <ul className="list-disc py-6  pl-30 text-[16px] text-[#B2B4B6]">
                  <li className="mb-1">
                    Supports Base, with future support for Solana and other EVM
                    chains.
                  </li>
                  <li>Easy integration with minimal setup.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg text-center font-semibold text-cyan-400">
                  AI scans and analyzes data
                </h4>
                <hr className="w-[60%] mx-auto text-cyan-400 border-b border-b-cyan-400 mt-1" />

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
            <div>
              <Image
                src={automationImg}
                height={422}
                width={353}
                alt="Vector svg"
                className="w-96 h-88"
              />
            </div>
            <div className="pl-10">
              <div>
                <h4 className="text-lg font-semibold pt-4 text-cyan-400">
                  Get real-time insights and solutions
                </h4>
                <hr className="w-[80%] text-cyan-400 border-b border-b-cyan-400 mt-1" />
                <ul className="list-disc py-6 pl-4 text-[16px] text-[#B2B4B6]">
                  <li className="mb-1">
                    AI generates reports with actionable recommendations.
                  </li>
                  <li>
                    Smart insights for DeFi, NFTs, and enterprise blockchain
                    applications.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400">
                  Optimize & Automate with AI-driven tools
                </h4>
                <hr className="w-[94%] text-cyan-400 border-b border-b-cyan-400 mt-1" />

                <ul className="list-disc py-6 pl-4 text-[16px] text-[#B2B4B6]">
                  <li className="mb-1">
                    Deploy AI-powered automation for security and development.
                  </li>
                  <li>
                    Continuously improve efficiency with AI-enhanced blockchain
                    strategies.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
