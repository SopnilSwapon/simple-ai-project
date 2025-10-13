import vectorImg from "@/assets/code-svgrepo-com 1.png";
import Image, { StaticImageData } from "next/image";
import AppButton from "../common/AppButton";
interface IFeature {
  id: number;
  title: string;
  description1: string;
  description2: string;
  button_content: string;
  icon: StaticImageData;
}

const features: IFeature[] = [
  {
    id: 1,
    title: "SMPL GPT",
    description1:
      "Detect vulnerabilities in smart contracts before deployment.",
    description2: "Real-time AI analysis for secure transactions.",
    button_content: "Try SMPL GPT",
    icon: vectorImg,
  },
  {
    id: 2,
    title: "SMPL PROTECT",
    description1: "AI-driven analytics to optimize decision-making.",
    description2: "Predict trends and improve operational efficiency.",
    button_content: "Secure Blockchain",
    icon: vectorImg,
  },
  {
    id: 3,
    title: "SMPL CREATE",
    description1:
      "Identify and mitigate threats using AI-powered security monitoring.",
    description2: "Protect against scams, hacks, and fraud in real-time.",
    button_content: "Start Building",
    icon: vectorImg,
  },
  {
    id: 4,
    title: "SMPL AI AGENTS",
    description1: "AI-assisted code generation & optimization.",
    description2: "Seamless integration with multiple blockchain networks.",
    button_content: "Automate with AI Agents",
    icon: vectorImg,
  },
];

export default function BlockChainSolutionSection() {
  return (
    <section className="px-6 max-w-[1320px] mx-auto mt-25 py-10 text-white">
      <div>
        {/* Header Section */}
        <div className="mb-12">
          <h1
            className={`font-[700] text-[48px] my-4 text-[rgba(76,206,238,1)] font-[Sofia_Sans]`}
          >
            <span className="text-white!">AI-Powered</span> Blockchain Solutions
          </h1>
          <p className="text-white/70 mx-auto">
            SIMPLE AI leverages artificial intelligence to enhance blockchain
            security, automate workflows, and create smarter decentralized
            applications.
          </p>
        </div>

        {/* Features List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          {features.map(
            ({
              id,
              title,
              description1,
              description2,
              button_content,
              icon,
            }) => (
              <li
                key={id}
                className="flex gap-4 justify-between p-6 bg-[#0B1820]/40 border border-white/10 rounded-2xl hover:bg-[#0B1820]/60 transition"
              >
                <div>
                  <h4 className="text-lg mt-2 font-semibold text-cyan-400">
                    {title}
                  </h4>
                  <ul className="list-disc py-6 pl-4 text-[16px] text-[#B2B4B6]">
                    <li className="mb-1">{description1}</li>
                    <li>{description2}</li>
                  </ul>
                  <AppButton
                    className="hover:bg-[#4CCEEE]! bg-transparent hover:border-none text-sm! h-12 backdrop-blur-sm"
                    title={button_content}
                  />
                </div>
                <Image src={icon} height={355} width={355} alt="Vector svg" />
              </li>
            ),
          )}
        </ul>
      </div>
      <div></div>
    </section>
  );
}
