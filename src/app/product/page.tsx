import React from "react";
import BlockChainSolutionSection from "../Components/home/BlockChainSolutionSec";
import GetStartSection from "../Components/product/GetStartSection";
import FAQSection from "../Components/home/FAQSection";
import BlockChainProfessional from "../Components/product/BlockChainProfessional";

export default function page() {
  return (
    <div className="max-w-[1320px] mx-auto px-6 py:15 lg:py-25">
      <BlockChainSolutionSection />
      <GetStartSection />
      <FAQSection />
      <BlockChainProfessional />
    </div>
  );
}
