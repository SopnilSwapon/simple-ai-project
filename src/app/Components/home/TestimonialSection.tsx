"use client";
import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import img1 from "@/assets/image 19.png";
import img2 from "@/assets/image 21.png";
import img3 from "@/assets/image 23.png";
import img4 from "@/assets/image 25.png";
import img5 from "@/assets/image 27.png";
import img6 from "@/assets/image 29.png";

const tickerImages: StaticImageData[] = [img1, img2, img3, img4, img5, img6];

export default function TestimonialSection() {
  return (
    // Infinite scrolling ticker of images
    <div className="overflow-hidden flex justify-center items-center h-40 bg-[#0B1117] w-full">
      <motion.div
        className="flex gap-3 justify-between w-full"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {tickerImages.map((image, i: number) => (
          <div key={i} className="">
            <Image
              src={image}
              alt={`Ticker ${i + 1}`}
              width={120}
              height={160}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
