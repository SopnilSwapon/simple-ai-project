import React from "react";
import AppButton from "../common/AppButton";
import backgroundImg from "@/assets/pricing_bg - Copy.png";

export default function BuySellSection() {
  return (
    <section className="max-w-[1320px] mx-auto mt-25 flex justify-between items-center">
      <div>
        <div>
          {/* Header Section */}
          <div className="mb-12">
            <AppButton
              title="Buy SMPL"
              className="w-26 border border-[#2A7183]! text-sm! rounded-[60px] bg-[#4CCEEE1A]"
            />

            <h1
              className={`font-[700] text-[48px] my-4 text-[rgba(76,206,238,1)] font-[Sofia_Sans]`}
            >
              Buy $SMPL{" "}
              <span className="text-white!">
                easily with Credit Card, Google Pay, Apple Pay, and more...
              </span>
            </h1>
            <p>
              Purchase $SMPL tokens directly using your preferred payment
              method. We support major credit cards, digital wallets, and bank
              transfers to make buying crypto as simple as possible. No
              complicated DEX interfaces - just quick and easy token purchases.
            </p>
          </div>
        </div>
        <AppButton
          className="hover:bg-[#4CCEEE]! hover:border-none w-[155px] mt-12 h-12 backdrop-blur-sm bg-white/5"
          title="Learn More"
        />
      </div>
      <div>
        {/* <Image src={left_side_img} width={547} height={500} alt="logo" /> */}
        {/* Features List */}
        <div className="grid grid-cols-1 gap-3 mt-6">
          <div>
            <div className="flex gap-4 ">
              <div className="rounded-full border-[#2A7183]! p-2 bg-[#4CCEEE1A]">
                bangladesh
              </div>
              <h4 className="text-lg mt-2 font-semibold text-cyan-400">
                Coming soon
              </h4>
            </div>
            <ul className="list-disc pl-24 text-[16px] text-[#B2B4B6]">
              <li className="mb-1">description1</li>
              <li>description2</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
