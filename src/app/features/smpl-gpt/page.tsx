import ProductCard from "@/app/Components/common/features/ProductCard";
import img1 from "@/assets/code-svgrepo-com 1.png";

import WhyChooseSMPLGPT from "@/app/Components/Features/SMPL-GPT/WhyChooseSMPLGPT";
import React from "react";
import BlockChainProfessional from "@/app/Components/common/BlockChainProfessional";

export default function page() {
  return (
    <div className="max-w-[1320px] mx-auto px-6 py:15 lg:py-25">
      <ProductCard
        sectionTag="Our Product"
        highlightText="SMPL GPT –"
        title="AI-Powered Blockchain Intelligence"
        subtitle="Unlock Data-Driven Insights for Smarter Decision-Making"
        cardTitle="Unlock Data-Driven Insights for Smarter Decision-Making"
        listDescription="SMPL GPT is your AI-powered assistant for blockchain analysis, providing deep insights, smart contract evaluations, and market trend predictions. Whether you're a developer, investor, or enterprise, SMPL GPT helps you make informed decisions with cutting-edge AI analytics."
        points={[
          "Detect vulnerabilities in smart contracts before deployment.",
          "Real-time AI analysis for secure transactions.",
        ]}
        buttonText="Try SMPL GPT"
        icon={img1}
      />
      <WhyChooseSMPLGPT />
      <BlockChainProfessional />
    </div>
  );
}
