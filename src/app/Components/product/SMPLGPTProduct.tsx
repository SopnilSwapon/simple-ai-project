import img1 from "@/assets/code-svgrepo-com 1.png";
import Image, { StaticImageData } from "next/image";
import AppButton from "../common/AppButton";
interface IFeature {
  id: number;
  title: string;
  listDescription: string;
  description1: string;
  description2: string;
  button_content: string;
  icon: StaticImageData;
}

const features: IFeature[] = [
  {
    id: 1,
    title: "Unlock Data-Driven Insights for Smarter Decision-Making",
    listDescription:
      "SMPL GPT is your AI-powered assistant for blockchain analysis, providing deep insights, smart contract evaluations, and market trend predictions. Whether you're a developer, investor, or enterprise, SMPL GPT helps you make informed decisions with cutting-edge AI analytics.",
    description1:
      "Detect vulnerabilities in smart contracts before deployment.",
    description2: "Real-time AI analysis for secure transactions.",
    button_content: "Try SMPL GPT",
    icon: img1,
  },
];

export default function SMPLGPTProduct() {
  return (
    <section className="py-10">
      <div>
        {/* Header Section */}
        <div className="mb-12">
          <AppButton
            title="Our Product"
            className="border border-[#2A7183]! p-2! text-sm! mx-auto bg-[#4CCEEE1A]"
          />
          <h1
            className={`font-bold text-xl md:text-[32px] my-3 md:my-4 flex justify-center text-center gap-2 text-white!  font-[Sofia_Sans]`}
          >
            <span className="text-[rgba(76,206,238,1)]">SMPL GPT –</span>{" "}
            AI-Powered Blockchain Intelligence
          </h1>
          <p className="text-white/70 flex justify-center text-center">
            Unlock Data-Driven Insights for Smarter Decision-Making
          </p>
        </div>

        {/* Features List */}
        <ul className="mt-12">
          {features.map(
            ({
              id,
              title,
              listDescription,
              description1,
              description2,
              button_content,
              icon,
            }) => (
              <div
                key={id}
                className="flex flex-col-reverse lg:flex-row gap-4 justify-between py-15 lg:py-20 pl-4 pr-4 lg:pr-30 lg:pl-20 bg-[#0B1820]/40 border border-white/10 rounded-2xl hover:bg-[#0B1820]/60 transition"
              >
                <div>
                  <h4 className="text-xl md:text-2xl mt-2 font-semibold text-cyan-400">
                    {title}
                  </h4>
                  <p className="pt-4 text-[#B2B4B6]">{listDescription}</p>
                  <ul className="list-disc py-6 pl-4 text-[16px] text-[#B2B4B6]">
                    <li className="mb-1">{description1}</li>
                    <li>{description2}</li>
                  </ul>
                  <AppButton
                    className="hover:bg-[#4CCEEE]! bg-transparent hover:border-none text-sm! h-12 backdrop-blur-sm"
                    title={button_content}
                  />
                </div>
                <Image
                  src={icon}
                  className="h-50 md:h-60 w-50 md:w-full  mx-auto"
                  height={355}
                  width={355}
                  alt="Vector svg"
                />
              </div>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
