import AppButton from "../common/AppButton";
import icon1 from "@/assets/Frame.png";
import icon2 from "@/assets/Group.png";
import icon3 from "@/assets/Group (1).png";
import icon4 from "@/assets/Group (2).png";
import right_side_img from "@/assets/Frame 2147226985.png";
import left_side_img from "@/assets/Frame 1000002429.png";
import Image, { StaticImageData } from "next/image";
interface IFeature {
  id: number;
  title: string;
  description1: string;
  description2: string;
  icon: StaticImageData;
}
interface IAdvantageData {
  id: number;
  title: string;
  description: string;
}

const features: IFeature[] = [
  {
    id: 1,
    title: "AI-Powered Smart Contract Audits",
    description1:
      "Detect vulnerabilities in smart contracts before deployment.",
    description2: "Real-time AI analysis for secure transactions.",
    icon: icon1,
  },
  {
    id: 2,
    title: "Automated Blockchain Insights",
    description1: "AI-driven analytics to optimize decision-making.",
    description2: "Predict trends and improve operational efficiency.",
    icon: icon2,
  },
  {
    id: 3,
    title: "Security & Risk Detection",
    description1:
      "Identify and mitigate threats using AI-powered security monitoring.",
    description2: "Protect against scams, hacks, and fraud in real-time.",
    icon: icon3,
  },
  {
    id: 4,
    title: "AI-Driven Development Tools",
    description1: "AI-assisted code generation & optimization.",
    description2: "Seamless integration with multiple blockchain networks.",
    icon: icon4,
  },
];

const advantageData: IAdvantageData[] = [
  {
    id: 1,
    title: "Scalability:",
    description:
      " Grow your blockchain ecosystem with the power of AI, capable of handling large volumes of data.",
  },
  {
    id: 2,
    title: "Real-Time Monitoring:",
    description:
      "Continuous monitoring to identify risks and optimize workflows instantly.",
  },
  {
    id: 3,
    title: "Time & Cost Efficiency:",
    description:
      "Automate workflows, smart contract development, and security audits, saving valuable time and reducing operational costs.",
  },
  {
    id: 4,
    title: "User-Friendly Interface:",
    description:
      "An intuitive platform designed to make complex tasks easy for developers and businesses.",
  },
];
export default function SecurityAdvantage() {
  return (
    <section>
      <div className="flex justify-between flex-col-reverse lg:flex-row items-center py-25">
        <div>
          <div>
            {/* Header Section */}
            <div className="mb-12">
              <AppButton
                title="About Us"
                className="border border-[#2A7183]! py-2! text-sm! rounded-[60px] bg-[#4CCEEE1A]"
              />

              {/* Header Section */}
              <div className="mb-12">
                <h1
                  className={`font-[700] lg:text-[48px] text-2xl my-4 flex justify-center flex-col text-[rgba(76,206,238,1)] font-[Sofia_Sans]`}
                >
                  <span className="text-white!">Ready to get started with</span>{" "}
                  SMPLAL.io Platform?
                </h1>
                <p>
                  SIMPLE AI enhances blockchain security, automates workflows,
                  and powers decentralized innovation with artificial
                  intelligence.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 gap-3 mt-6">
              {features.map(
                ({ id, title, description1, description2, icon }) => (
                  <div key={id}>
                    <div className="flex gap-4 ">
                      <div className="backdrop-blur-[10px] bg-[radial-gradient(95.52%_96.38%_at_23%_10%,rgba(76,206,238,0.26),rgba(43,117,136,0)_100%)] p-2 rounded-full border border-[#295366]">
                        <Image
                          src={icon}
                          alt={title}
                          className="w-10 h-10 p-[6px] text-cyan-400"
                        />
                      </div>
                      <h4 className="text-[16px] md:text-lg mt-2 font-semibold text-cyan-400">
                        {title}
                      </h4>
                    </div>
                    <ul className="list-disc pl-24 text-[16px] text-[#B2B4B6]">
                      <li className="mb-1">{description1}</li>
                      <li>{description2}</li>
                    </ul>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
        <div>
          <Image src={right_side_img} width={747} height={700} alt="logo" />
        </div>
      </div>
      <div className="flex justify-between flex-col-reverse  lg:flex-row-reverse gap-20  items-center mt-15 lg:mt-25">
        <div>
          <div>
            {/* Header Section */}
            <div className="mb-12">
              {/* Header Section */}
              <div className="mb-12">
                <h1
                  className={`font-bold text-2xl md:text-[48px] my-3 md:my-4 flex text-center gap-2 text-[rgba(76,206,238,1)] font-[Sofia_Sans]`}
                >
                  <span className="text-white!">Key Advantages of</span>
                  SIMPLE AI
                </h1>
                <p>
                  SIMPLE AI enhances blockchain security, automates workflows,
                  and powers decentralized innovation with artificial
                  intelligence.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 gap-3 mt-6">
              {advantageData.map(({ id, title, description }) => (
                <h1
                  key={id}
                  className={`text-[16px] text-white/70 font-[Sofia_Sans]`}
                >
                  <span className="text-[rgba(76,206,238,1)]">{title}</span>
                  &nbsp;{description}
                </h1>
              ))}
            </div>
          </div>
          <h1 className="text-xl lg:text-2xl font-bold my-2 lg:my-6">
            Our Mission
          </h1>
          <p className="text-[16px] text-white/70">
            At SIMPLE AI, our mission is to bridge the gap between AI and
            blockchain, providing cutting-edge tools to secure, optimize, and
            automate decentralized applications. We empower developers,
            businesses, and enterprises with AI-driven insights, security, and
            efficiency.
          </p>
        </div>
        <div className="w-full">
          <Image src={left_side_img} width={947} height={900} alt="logo" />
        </div>
      </div>
    </section>
  );
}
