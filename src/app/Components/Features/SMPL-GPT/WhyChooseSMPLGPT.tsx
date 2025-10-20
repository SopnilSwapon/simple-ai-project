import icon1 from "@/assets/Frame.png";
import icon2 from "@/assets/Group.png";
import icon3 from "@/assets/Group (1).png";
import icon4 from "@/assets/Group (2).png";
import left_side_img from "@/assets/Frame 2147226984.png";
import right_side_img from "@/assets/Frame 2147226986.png";
import Image, { StaticImageData } from "next/image";
import AppButton from "../../common/AppButton";
interface IFeature {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData;
}
interface IAdvantageData {
  id: number;
  title: string;
  description: string;
}

const whyChooseData: IFeature[] = [
  {
    id: 1,
    title: "Real-Time Blockchain Insights",
    description:
      "AI-powered audits to detect vulnerabilities and optimize performance.",
    icon: icon1,
  },
  {
    id: 2,
    title: "Smart Contract Evaluations",
    description: "AI-driven analytics to optimize decision-making.",
    icon: icon2,
  },
  {
    id: 3,
    title: "Data-Driven Predictions",
    description:
      "Leverage AI for accurate forecasting of blockchain market trends.",
    icon: icon3,
  },
  {
    id: 4,
    title: "Seamless Integration",
    description: "AI-assisted code generation & optimization.",
    icon: icon4,
  },
];

const howIsWorksData: IFeature[] = [
  {
    id: 1,
    title: "Connect Your Blockchain",
    description: "Link your project or wallet for instant insights.",
    icon: icon1,
  },
  {
    id: 2,
    title: "AI Scans & Analyzes",
    description:
      "SMPL GPT evaluates market data, smart contracts, and security risks.",
    icon: icon2,
  },
  {
    id: 3,
    title: "Optimize & Automate",
    description:
      "Use AI-driven suggestions to improve security and efficiency.",
    icon: icon3,
  },
];

export default function WhyChooseSMPLGPT() {
  return (
    <section>
      <div className="flex justify-between flex-col-reverse lg:flex-row items-center">
        <div>
          <div>
            {/* Header Section */}
            <div className="mb-12">
              <AppButton
                title="Why Choose"
                className="border border-[#2A7183]! py-2! text-sm! rounded-[60px] bg-[#4CCEEE1A]"
              />

              {/* Header Section */}
              <div className="mb-12">
                <h1
                  className={`font-[700] lg:text-[48px] text-2xl my-4 flex flex-row gap-2 text-[rgba(76,206,238,1)] font-[Sofia_Sans]`}
                >
                  <span className=" text-white">Why Choose</span> SMPLAL GPT
                </h1>
                <p>Unlock Data-Driven Insights for Smarter Decision-Making</p>
              </div>
            </div>

            {/* whyChooseData List */}
            <div className="grid grid-cols-1 gap-3 mt-6">
              {whyChooseData.map(({ id, title, description, icon }) => (
                <div key={id}>
                  <div className="flex gap-4 ">
                    <div className="backdrop-blur-[10px] bg-[radial-gradient(95.52%_96.38%_at_23%_10%,rgba(76,206,238,0.26),rgba(43,117,136,0)_100%)] p-2 rounded-full border border-[#295366]">
                      <Image
                        src={icon}
                        alt={title}
                        className="w-8 lg:w-10 h-8 lg:h-8 p-[6px] text-cyan-400"
                      />
                    </div>
                    <h4 className="text-[16px] md:text-lg mt-2 font-semibold text-cyan-400">
                      {title}
                    </h4>
                  </div>
                  <ul className="list-disc pl-24 text-[16px] text-[#B2B4B6]">
                    <li className="mb-1">{description}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Image src={left_side_img} width={747} height={700} alt="logo" />
        </div>
      </div>
      <div className="flex justify-between gap-12 flex-col lg:flex-row items-center py-25">
        <div>
          <Image src={right_side_img} width={747} height={700} alt="logo" />
        </div>
        <div>
          <div>
            {/* Header Section */}
            <div className="mb-12">
              <AppButton
                title="How it work"
                className="border border-[#2A7183]! py-2! text-sm! rounded-[60px] bg-[#4CCEEE1A]"
              />

              {/* Header Section */}
              <div className="mb-12">
                <h1
                  className={`font-[700] lg:text-[48px] text-[rgba(76,206,238,1)] text-2xl my-4 flex gap-2 font-[Sofia_Sans]`}
                >
                  <span className="text-white">How IT</span> Works
                </h1>
                <p>Unlock Data-Driven Insights for Smarter Decision-Making</p>
              </div>
            </div>

            {/* whyChooseData List */}
            <div className="grid grid-cols-1 gap-3 mt-6">
              {howIsWorksData.map(({ id, title, description, icon }) => (
                <div key={id}>
                  <div className="flex gap-4 ">
                    <div className="backdrop-blur-[10px] bg-[radial-gradient(95.52%_96.38%_at_23%_10%,rgba(76,206,238,0.26),rgba(43,117,136,0)_100%)] p-2 rounded-full border border-[#295366]">
                      <Image
                        src={icon}
                        alt={title}
                        className="w-8 lg:w-10 h-8 lg:h-8 p-[6px] text-cyan-400"
                      />
                    </div>
                    <h4 className="text-[16px] md:text-lg mt-2 font-semibold text-cyan-400">
                      {title}
                    </h4>
                  </div>
                  <ul className="list-disc pl-24 text-[16px] text-[#B2B4B6]">
                    <li className="mb-1">{description}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
