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
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...tickerImages, ...tickerImages].map((img, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 w-64 gap-4 h-10 rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src={img}
                alt="infinity scrolling logo"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
