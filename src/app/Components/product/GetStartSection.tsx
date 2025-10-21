import React from "react";
import AppButton from "../common/AppButton";

export default function GetStartSection() {
  return (
    <section className="relative rounded-2xl overflow-hidden max-w-[1320px] mx-auto my-15  lg:my-25   py-10 lg:py-15">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-[2px]"
        style={{ backgroundImage: "url('/getstartedBg.png')" }}
      ></div>

      {/* Optional Gradient / Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4CCEEE]/20 via-black/50 to-[#4CCEEE]/20"></div>

      {/* Content Layer */}
      <div className="relative max-w-[1320px] mx-auto py-10 lg:py-15 flex flex-col lg:flex-row gap-x-16 justify-between items-center px-4">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="font-[700] lg:text-[48px] flex flex-col text-center gap-2 text-2xl my-4 text-[rgba(76,206,238,1)] font-[Sofia_Sans]">
            <span className="text-white ">Ready to get started with</span>{" "}
            SMPLAL.io Platform?
          </h1>
          <p className="mb-6 text-center">
            Power your applications with Smplai’s robust APIs and connect
            effortlessly with leading blockchain platforms.
          </p>
          <AppButton
            className="bg-[#4CCEEE] border-none text-black backdrop-blur-sm lg:py-4 py-3  text-lg px-8 mx-auto"
            title="Schedule a Demo"
          />
        </div>
      </div>
    </section>
  );
}
