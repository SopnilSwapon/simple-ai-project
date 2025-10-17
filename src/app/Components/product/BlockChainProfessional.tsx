import img1 from "@/assets/image 27.png";
import img2 from "@/assets/image 23.png";
import img3 from "@/assets/image 25.png";
import designLogo from "@/assets/Group 18.png";
import Image, { StaticImageData } from "next/image";
import AppButton from "../common/AppButton";
import { Rating } from "@/components/ui/Rating";

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
            className="border border-[#2A7183]! text-sm! mx-auto rounded-[60px] bg-[#4CCEEE1A]"
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
        <Image src={designLogo} height={10} width={1320} alt="Vector svg" />
        {/* Features List */}
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
          {features.map(
            ({ id, name, description, icon, designation, rating }) => (
              <div
                key={id}
                className="gap-4 p-8 bg-[#0B1820]/40 border border-white/10 rounded-2xl hover:bg-[#0B1820]/60 transition"
              >
                <div>
                  <h2 className="text-xl md:text-2xl mt-2 font-semibold text-cyan-400">
                    {name}
                  </h2>
                  <h3 className="mb-6 mt-2 text-white/70">{designation}</h3>
                  <p className="mb-1">{description}</p>
                </div>
                <div className="mt-6 flex justify-between flex-col lg:flex-row items-center gap-4">
                  <Image src={icon} height={155} width={155} alt="Vector svg" />
                  <Rating value={rating} readOnly max={5} />
                </div>
              </div>
            ),
          )}
        </ul>
      </div>
      <div></div>
    </section>
  );
}
