import Image from "next/image";
import React from "react";
import banner_logo from "@/assets/banner-img.png";

export default function Banner() {
  return (
    <div className="pt-24">
      <Image src={banner_logo} height={832} width={1920} alt="banner logo" />
    </div>
  );
}
