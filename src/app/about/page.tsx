import React from "react";
import SecurityAdvantage from "../Components/AboutUs/SecurityAdvantage";
import FoundationOfAI from "../Components/AboutUs/FoundationOfAI";

export default function page() {
  return (
    <div className="max-w-[1320px] mx-auto px-6 py:15 lg:py-25">
      <SecurityAdvantage />
      <FoundationOfAI />
    </div>
  );
}
