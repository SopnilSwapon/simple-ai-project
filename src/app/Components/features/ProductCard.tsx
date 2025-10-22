"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import AppButton from "../common/AppButton";

interface IProductCard {
  sectionTag?: string; // optional small button title like "Our Product"
  title: string; // full title (plain text)
  cardTitle: string;
  highlightText?: string; // colored text part
  subtitle?: string; // below title
  listDescription: string;
  points: string[]; // array of bullet points
  buttonText: string;
  icon: StaticImageData;
  reverse?: boolean; // true for image left, text right
}

const ProductCard: React.FC<IProductCard> = ({
  sectionTag,
  title,
  highlightText,
  cardTitle,
  subtitle,
  listDescription,
  points,
  buttonText,
  icon,
  reverse = false,
}) => {
  return (
    <section className="py-25">
      <div className="mb-12 text-center">
        {sectionTag && (
          <AppButton
            title={sectionTag}
            className="border border-[#2A7183]! py-2! text-sm! mx-auto rounded-[60px] bg-[#4CCEEE1A]"
          />
        )}
        <h1
          className={`font-bold text-xl md:text-[32px] my-3 md:my-4 flex flex-wrap justify-center text-center gap-2 text-white font-[Sofia_Sans]`}
        >
          {highlightText && (
            <span className="text-[rgba(76,206,238,1)]">{highlightText}</span>
          )}
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 flex justify-center text-center">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-4 justify-between py-15 lg:py-20 px-4 lg:px-20 bg-[#0B1820]/40 border border-white/10 rounded-2xl hover:bg-[#0B1820]/60 transition">
        <div>
          <h4 className="text-xl md:text-2xl mt-2 font-semibold text-cyan-400">
            {cardTitle}
          </h4>
          <p className="pt-4 text-[#B2B4B6]">{listDescription}</p>
          <ul className="list-disc py-6 pl-4 text-[16px] text-[#B2B4B6]">
            {points.map((point, index) => (
              <li key={index} className="mb-1">
                {point}
              </li>
            ))}
          </ul>
          <AppButton
            className="hover:bg-[#4CCEEE]! bg-transparent hover:border-none text-sm! h-12 backdrop-blur-sm"
            title={buttonText}
          />
        </div>
        <Image
          src={icon}
          className="h-50 md:h-100 w-50 md:w-100 mx-auto"
          height={55}
          width={55}
          alt="Feature icon"
        />
      </div>
    </section>
  );
};

export default ProductCard;
