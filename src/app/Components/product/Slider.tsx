"use client";
import img1 from "@/assets/image 27.png";
import img2 from "@/assets/image 23.png";
import img3 from "@/assets/image 25.png";
import sliderLogo from "@/assets/Group 17 (1).png";
import Image, { StaticImageData } from "next/image";
import { Rating } from "@/components/ui/Rating";
import React from "react";
import { Keyboard, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
  logo: StaticImageData;
}

const features: IFeature[] = [
  {
    id: 1,
    name: "John Doe",
    designation: "CTO of Digital Ocean",
    description:
      '"Smplai helped us secure our smart with 98% accuracy. A game-changer for our business!"',
    icon: img1,
    logo: sliderLogo,
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "AI Engineer at ONCHAIN RAMP",
    description:
      '"The AI tools are incredibly intuitive and have saved us countless hours of manual work."',
    icon: img2,
    logo: sliderLogo,
    rating: 5,
  },
  {
    id: 3,
    name: "Alex Brown",
    designation: "CEO of Hugging Face",
    description:
      '"The seamless integration with Ethereum and Solana has been a huge win for our platform."',
    icon: img3,
    logo: sliderLogo,
    rating: 5,
  },
  {
    id: 4,
    name: "Sophie Turner",
    designation: "Head of Blockchain at Binance",
    description:
      '"The platform gives us full transparency and trust in our data — outstanding results!"',
    icon: img1,
    logo: sliderLogo,
    rating: 4,
  },
  {
    id: 5,
    name: "Michael Lee",
    designation: "CTO at Chainlink",
    description:
      '"Outstanding support and AI-driven insights — Smplai is the future of smart auditing."',
    icon: img2,
    logo: sliderLogo,
    rating: 5,
  },
  {
    id: 6,
    name: "Sara Khan",
    designation: "Product Lead at Coinbase",
    description:
      '"Our efficiency improved drastically. We now ship features 2x faster with Smplai."',
    icon: img3,
    logo: sliderLogo,
    rating: 4,
  },
];

export default function Slider() {
  return (
    <div className="mt-12">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        speed={1600} // 👈 smooth transition speed
        centeredSlides={false}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        breakpoints={{
          0: { slidesPerView: 1, slidesPerGroup: 1 },
          768: { slidesPerView: 2, slidesPerGroup: 2 },
          1280: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
      >
        <hr
          className="w-[98%] mx-auto h-[1px] border-0 absolute top-13  rounded 
     bg-[#4CCEEE]"
        />
        {features.map(
          ({ id, name, description, icon, designation, rating, logo }) => (
            <SwiperSlide key={id} className="">
              <div className="flex justify-center w-full mb-10">
                <Image src={logo} height={10} width={120} alt="Vector svg" />
              </div>
              <div className="flex flex-col overflow-visible p-8 bg-[#0B1820]/40  justify-between h-full border border-white/10 rounded-2xl hover:bg-[#0B1820]/60 transition">
                <div>
                  <h2 className="text-xl md:text-2xl mt-2 font-semibold ">
                    {name}
                  </h2>
                  <h3 className="mb-6 mt-2 text-white/70">{designation}</h3>
                  <p className="mb-1 text-white/80">{description}</p>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <Image
                    src={icon}
                    height={155}
                    width={155}
                    alt="Profile"
                    className="rounded-full"
                  />
                  <Rating value={rating} readOnly max={5} />
                </div>
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </div>
  );
}
