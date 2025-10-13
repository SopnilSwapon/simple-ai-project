import React from "react";
import vectorImg from "@/assets/code-svgrepo-com 1.png";
import Image from "next/image";
import { Header1 } from "./common/Header1";
import AppButton from "./common/AppButton";

export default function SMPLGPTSec() {
  return (
    <div
      className="max-w-[1320px] mx-auto h-[466px] flex flex-col mt-25 mb-[50px] justify-center items-center 
  px-[120px] py-[100px] relative rounded-xl bg-[linear-gradient(to_right,#0B1820,#070E15)]"
    >
      <Image src={vectorImg} height={355} width={355} alt="Vector svg" />
      <div className="absolute top-25 flex items-center flex-col">
        <Header1 title="SMPL GPT" />
        <h2 className="text-[32px] font-bold font-sans mt-3">
          AI Assistant for Blockchain Guidance
        </h2>
        <hr
          className="w-full h-[1px] border-0 rounded 
           bg-gradient-to-r from-[#121313] via-[#4CCEEE] to-[#1c1d1d] mt-5"
        />
        <p className="text-[16px] mt-4">
          Deliver real-time blockchain insights and support through
          conversational A1 expertise.
        </p>
        <AppButton
          className="hover:bg-[#4CCEEE]! bg-transparent hover:border-none w-44 h-14 mt-10 backdrop-blur-sm"
          title="Try SMPL GPT"
        />
      </div>
    </div>
  );
}
