import React from "react";
import AppButton from "../common/AppButton";

export default function GetStartSection() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat rounded-2xl backdrop-brightness-[20%]"
      style={{ backgroundImage: "url('/getstartedBg.png')" }}
    >
      <div className="max-w-[1320px] mx-auto my-15  lg:my-25   py-10 lg:py-15 flex gap-x-16 justify-between items-center flex-col lg:flex-row px-4">
        <div className="flex-1">
          <div>
            {/* Header Section */}
            <div className="mb-12">
              <h1
                className={`font-[700] lg:text-[48px] text-2xl my-4 flex justify-center flex-col text-center text-[rgba(76,206,238,1)] font-[Sofia_Sans]`}
              >
                <span className="text-white!">Ready to get started with</span>{" "}
                SMPLAL.io Platform?
              </h1>
              <p className="text-center">
                Power your applications with Smplai’s robust APIs and connect
                effortlessly with leading blockchain platforms.
              </p>
            </div>
            <AppButton
              className="bg-[#4CCEEE] border-none text-black backdrop-blur-sm py-5 text-lg mx-auto px-8!"
              title="Schedule a Demo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
