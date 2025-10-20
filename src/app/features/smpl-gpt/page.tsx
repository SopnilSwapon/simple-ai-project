import SMPLGPT from "@/app/Components/Features/SMPL-GPT/SMPL-GPT";
import WhyChooseSMPLGPT from "@/app/Components/Features/SMPL-GPT/WhyChooseSMPLGPT";
import React from "react";

export default function page() {
  return (
    <div className="max-w-[1320px] mx-auto px-6 py:15 lg:py-25">
      <SMPLGPT />
      <WhyChooseSMPLGPT />
    </div>
  );
}
