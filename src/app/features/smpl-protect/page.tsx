import { StaticImageData } from "next/image";

import img1 from "@/assets/shield-half-svgrepo-com-1 1.png";
import icon1 from "@/assets/Frame.png";
import icon2 from "@/assets/Group.png";
import icon3 from "@/assets/Group (1).png";
import icon4 from "@/assets/Group (2).png";
import left_side_img from "@/assets/Frame 2147226984.png";
import right_side_img from "@/assets/Frame 2147226986.png";

import ProductCard from "@/app/Components/features/ProductCard";
import BlockChainProfessional from "@/app/Components/common/BlockChainProfessional";
import WhyChooseAndHowWorks from "@/app/Components/features/WhyChooseAndHowWorks";
import GetStartedSection from "@/app/Components/features/GetStartedSection";

interface IFeature {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData;
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

const howItWorksData: IFeature[] = [
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
export default function page() {
  return (
    <div className="max-w-[1320px] mx-auto px-6 py:15 lg:py-25">
      {/* Product card view */}
      <ProductCard
        sectionTag="Our Product"
        highlightText="SMPL Protect –"
        title="AI-Powered Blockchain Intelligence"
        subtitle="Unlock Data-Driven Insights for Smarter Decision-Making"
        cardTitle="Unlock Data-Driven Insights for Smarter Decision-Making"
        listDescription="SMPL GPT is your AI-powered assistant for blockchain analysis, providing deep insights, smart contract evaluations, and market trend predictions. Whether you're a developer, investor, or enterprise, SMPL GPT helps you make informed decisions with cutting-edge AI analytics."
        points={[
          "Detect vulnerabilities in smart contracts before deployment.",
          "Real-time AI analysis for secure transactions.",
        ]}
        buttonText="Try SMPL Protect"
        icon={img1}
      />
      <section>
        {/* Why choose SMPL Protect */}
        <WhyChooseAndHowWorks
          btnTitle="Why Choose"
          headingWhite="Why Choose"
          headingColor="SMPLA GPT"
          subText="Unlock Data-Driven Insights for Smarter Decision-Making"
          features={whyChooseData}
          image={left_side_img}
          reverse={false}
        />

        {/*  How it works section  */}
        <WhyChooseAndHowWorks
          btnTitle="How it work"
          headingWhite="How IT"
          headingColor="Works"
          subText="Unlock Data-Driven Insights for Smarter Decision-Making"
          features={howItWorksData}
          image={right_side_img}
          reverse={true}
        />
      </section>
      {/* Get started section */}
      <GetStartedSection
        bgImage="/getstartedBg.png"
        titleWhite="Get Started"
        titleColor="with SMPL Protect Today!"
        description="No Setup Required – Instant AI-powered insights at your fingertips
Secure & Reliable – Built with cutting-edge blockchain security standards. Scalable for Any Project – From startups to enterprises, we’ve got you covered."
        buttonText="Start Using SMPL Protect"
      />
      <BlockChainProfessional />
    </div>
  );
}
