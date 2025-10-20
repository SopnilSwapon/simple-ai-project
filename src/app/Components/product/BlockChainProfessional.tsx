import img1 from "@/assets/image 27.png";
import img2 from "@/assets/image 23.png";
import img3 from "@/assets/image 25.png";
import designLogo from "@/assets/Group 18.png";
import Image, { StaticImageData } from "next/image";
import AppButton from "../common/AppButton";
import { Rating } from "@/components/ui/Rating";
import Slider from "./Slider";

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

export default function BlockChainProfessional() {
  return (
    <section className="pt-25 py-10">
      <div>
        {/* Header Section */}
        <div className="mb-12">
          <AppButton
            title="Testimonials"
            className="border border-[#2A7183]! py-2! text-sm! mx-auto rounded-[60px] bg-[#4CCEEE1A]"
          />
          <h1
            className={`font-[700] lg:text-[48px] text-2xl my-4 flex justify-center flex-col text-center text-[rgba(76,206,238,1)] font-[Sofia_Sans]`}
          >
            <span className="text-white!">Trusted by AI &</span> Blockchain
            Professionals
          </h1>
          <p className="text-white/70 flex justify-center text-center">
            See how Smplai is transforming businesses with cutting-edge AI and
            blockchain solutions.
          </p>
        </div>
      </div>
      <Slider />
    </section>
  );
}
