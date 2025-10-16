import React from "react";
import BlockChainSolutionSection from "../Components/common/BlockChainSolutionSec";
import GetStartSection from "../Components/product/GetStartSection";

export default function page() {
  return (
    <div className="max-w-[1320px] mx-auto px-6 py:15 lg:py-25">
      <BlockChainSolutionSection />
      <GetStartSection />
    </div>
  );
}
