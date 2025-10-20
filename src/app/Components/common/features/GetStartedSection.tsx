import React from "react";
import AppButton from "../AppButton";

interface IGetStartedSectionProps {
  bgImage: string;
  titleWhite: string;
  titleColor: string;
  description: string;
  buttonText: string;
}

export default function GetStartedSection({
  bgImage,
  titleWhite,
  titleColor,
  description,
  buttonText,
}: IGetStartedSectionProps) {
  return (
    <section className="relative rounded-2xl overflow-hidden max-w-[1320px] mx-auto">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-[2px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Optional Gradient / Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4CCEEE]/20 via-black/50 to-[#4CCEEE]/20"></div>

      {/* Content Layer */}
      <div className="relative max-w-[1320px] mx-auto py-10 lg:py-15 flex flex-col lg:flex-row gap-x-16 justify-between items-center px-4">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="font-[700] lg:text-[48px] flex flex-col text-center gap-2 text-2xl my-4 text-[rgba(76,206,238,1)] font-[Sofia_Sans]">
            <span className="text-white">{titleWhite}</span> {titleColor}
          </h1>
          <p className="mb-6 text-center lg:w-[55%] mx-auto w-full">
            {description}
          </p>
          <AppButton
            className="bg-[#4CCEEE] border-none text-black backdrop-blur-sm text-lg px-8 mx-auto"
            title={buttonText}
          />
        </div>
      </div>
    </section>
  );
}
