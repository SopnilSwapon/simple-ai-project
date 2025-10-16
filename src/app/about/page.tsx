import React from "react";
import SecurityAdvantage from "../Components/AboutUs/SecurityAdvantage";
import FoundationOfAI from "../Components/AboutUs/FoundationOfAI";
import JoinRevolutionSection from "../Components/AboutUs/JoinRevolutionSection";

export default function page() {
  return (
    <div className="w-full">
      <div className="max-w-[1320px] mx-auto px-6 py:15 lg:py-25">
        <SecurityAdvantage />
      </div>
      <div>
        <FoundationOfAI />
      </div>
      <div className="max-w-[1320px] mx-auto px-6 py:15 lg:py-25">
        <JoinRevolutionSection />
      </div>
    </div>
  );
}
