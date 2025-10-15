import Image from "next/image";
import React from "react";
import AI_Name from "@/assets/Frame 2147227009.jpg";
import { Header1 } from "../common/Header1";
import AppButton from "../common/AppButton";

export default function Banner() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/banner_video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <Header1 className="text-6xl lg:text-[120px]" title="SIMPLE AI" />

        <div className="flex flex-col sm:flex-row gap-6 mt-23">
          <AppButton
            className="bg-[#4CCEEE]! text-black border-none backdrop-blur-sm w-42 py-5 text-lg"
            title="Buy"
          />
          <AppButton
            className="backdrop-blur-sm w-42 text-lg border border-white py-5"
            title="KYC"
          />
          <AppButton
            className="backdrop-blur-xs w-42 text-lg border border-white py-5"
            title="Audit"
          />
        </div>
      </div>
    </div>
  );
}
