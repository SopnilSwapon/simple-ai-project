import img1 from "@/assets/Frame (1).png";
import img2 from "@/assets/Frame (2).png";
import img3 from "@/assets/Frame (3).png";
import img4 from "@/assets/Frame (4).png";
import img5 from "@/assets/Frame (5).png";
import img6 from "@/assets/Frame (6).png";
import Image, { StaticImageData } from "next/image";
import AppButton from "../common/AppButton";
import { Rating } from "@/components/ui/Rating";

interface IFeature {
  id: number;
  name: string;
  description: string;
  icon: StaticImageData;
}

const features: IFeature[] = [
  {
    id: 1,
    name: "Innovation",
    description:
      "We are committed to continually pushing the boundaries of what's possible with AI and blockchain technology.",
    icon: img1,
  },
  {
    id: 2,
    name: "Security",
    description:
      "Our top priority is ensuring the highest levels of security for our clients, helping them mitigate risks and prevent fraud.",
    icon: img2,
  },
  {
    id: 3,
    name: "Efficiency",
    description:
      "We believe in maximizing efficiency and reducing time-to-market for blockchain solutions with AI-powered automation.",
    icon: img3,
  },
  {
    id: 4,
    name: "Integrity",
    description:
      "We uphold the highest standards of ethics, transparency, and responsibility in all our AI-driven solutions.",
    icon: img4,
  },
  {
    id: 5,
    name: "Collaboration",
    description:
      "We foster a culture of collaboration, working closely with our clients to understand their needs and deliver tailor-made solutions.",
    icon: img5,
  },
  {
    id: 6,
    name: "Customer-Centricity",
    description:
      "We prioritize our users’ needs, ensuring seamless experiences and tailored AI solutions that drive success.",
    icon: img6,
  },
];

export default function FoundationOfAI() {
  return (
    <section className="bg-[#091017]">
      <div className="pt-25 py-10 max-w-[1320px] mx-auto px-6 py:15 lg:py-25">
        {/* Header Section */}
        <div className="mb-12">
          <AppButton
            title="Core Values"
            className="border border-[#2A7183]! text-sm! mx-auto rounded-[60px] bg-[#4CCEEE1A]"
          />
          <h1
            className={`font-[700] lg:text-[48px] text-2xl my-4 flex justify-center text-center text-[rgba(76,206,238,1)] font-[Sofia_Sans]`}
          >
            <span className="text-white!">The Foundation of</span> &nbsp; SIMPLE
            AI
          </h1>
          <p className="text-white/70 flex justify-center text-center">
            See how Smplai is transforming businesses with cutting-edge AI and
            blockchain solutions.
          </p>
        </div>
        {/* Features List */}
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
          {features.map(({ id, name, description, icon }) => (
            <div
              key={id}
              className="gap-4 p-8 bg-[#0B1820]/40 border border-white/10 rounded-2xl hover:bg-[#0B1820]/60 transition"
            >
              <div>
                <div className="backdrop-blur-[10px]  w-14 h-14 bg-[radial-gradient(95.52%_96.38%_at_23%_10%,rgba(76,206,238,0.26),rgba(43,117,136,0)_100%)] p-2 rounded-full border border-[#295366]">
                  <Image src={icon} alt="logo" className="w-10 h-10 p-1" />
                </div>
                <h2 className="text-xl md:text-2xl  my-4 lg:my-6 mt-2 font-semibold text-cyan-400">
                  {name}
                </h2>
                <p className="mb-1">{description}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
