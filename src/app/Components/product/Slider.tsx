"use client";
import img1 from "@/assets/image 27.png";
import img2 from "@/assets/image 23.png";
import img3 from "@/assets/image 25.png";
import designLogo from "@/assets/Group 18.png";
import Image, { StaticImageData } from "next/image";
import AppButton from "../common/AppButton";
import { Rating } from "@/components/ui/Rating";
import React from "react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
interface IFeature {
  id: number;
  name: string;
  designation: string;
  description: string;
  icon: StaticImageData;
  rating: number;
}

const features: IFeature[] = [
  {
    id: 1,
    name: "John Doe",
    designation: "CTO of Digital Ocean",
    description:
      '"Smplai helped us secure our smart contracts with 98% accuracy. A game-changer for our business!"',
    icon: img1,
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "AI Engineer at ONCHAIN RAMP",
    description:
      '"The AI tools are incredibly intuitive and have saved us countless hours of manual work."',
    icon: img2,
    rating: 5,
  },
  {
    id: 3,
    name: "Alex Brown",
    designation: "CEO of Hugging Face",
    description:
      '"The seamless integration with Ethereum and Solana has been a huge win for our platform."',
    icon: img3,
    rating: 5,
  },
];
export default function Slider() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="grid! mySwiper grid-cols-1! md:grid-cols-2! xl:grid-cols-3! gap-8 mt-12"
      >
        {features.map(
          ({ id, name, description, icon, designation, rating }) => (
            <SwiperSlide
              key={id}
              className="gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-8 bg-[#0B1820]/40 border border-white/10 rounded-2xl hover:bg-[#0B1820]/60 transition"
            >
              <div>
                <h2 className="text-xl md:text-2xl mt-2 font-semibold text-cyan-400">
                  {name}
                </h2>
                <h3 className="mb-6 mt-2 text-white/70">{designation}</h3>
                <p className="mb-1">{description}</p>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <Image src={icon} height={155} width={155} alt="Vector svg" />
                <Rating value={rating} readOnly max={5} />
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </div>
  );
}
