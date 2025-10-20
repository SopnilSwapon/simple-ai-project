import AppButton from "../common/AppButton";
import icon1 from "@/assets/Frame.png";
import icon2 from "@/assets/Group.png";
import icon3 from "@/assets/Group (1).png";
import icon4 from "@/assets/Group (2).png";
import left_side_img from "@/assets/Frame 1000002434.png";
import Image, { StaticImageData } from "next/image";
interface IFeature {
  id: number;
  title: string;
  description1: string;
  description2: string;
  icon: StaticImageData;
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

export default function AboutSMPLGPT() {
  return (
    <section className="mt-25 flex justify-between flex-col-reverse lg:flex-row items-center">
      <div>
        <div>
          {/* Header Section */}
          <div className="mb-12">
            <AppButton
              title="About Us"
              className="border border-[#2A7183]! py-2! text-sm! rounded-[60px] bg-[#4CCEEE1A]"
            />

            <h1
              className={`font-[700] text-2xl md:text-[48px] my-4 text-[rgba(76,206,238,1)] font-[Sofia_Sans]`}
            >
              <span className="text-white!">About</span> SIMPLE AI
            </h1>
            <p>
              SIMPLE AI leverages artificial intelligence to enhance blockchain
              security, automate workflows, and create smarter decentralized
              applications.
            </p>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 gap-3 mt-6">
            {features.map(({ id, title, description1, description2, icon }) => (
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
            ))}
          </div>
        </div>
        <AppButton
          className="hover:bg-[#4CCEEE]! hover:border-none w-[155px] mt-12 h-12 backdrop-blur-sm bg-white/5"
          title="Learn More"
        />
      </div>
      <div>
        <Image src={left_side_img} width={547} height={500} alt="logo" />
      </div>
    </section>
  );
}
