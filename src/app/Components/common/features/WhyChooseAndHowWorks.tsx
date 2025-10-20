import Image, { StaticImageData } from "next/image";
import AppButton from "../../common/AppButton";

interface IFeature {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData;
}

interface IWhyChooseAndHowWorks {
  btnTitle: string;
  headingWhite: string;
  headingColor: string;
  subText: string;
  features: IFeature[];
  image: StaticImageData;
  reverse?: boolean;
}

export default function WhyChooseAndHowWorks({
  btnTitle,
  headingWhite,
  headingColor,
  subText,
  features,
  image,
  reverse = false,
}: IWhyChooseAndHowWorks) {
  return (
    <div
      className={`flex justify-between gap-12 flex-col ${
        reverse ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center py-25`}
    >
      {/* Image Section */}
      <div>
        <Image src={image} width={747} height={700} alt="feature" />
      </div>

      {/* Text Section */}
      <div>
        {/* Header */}
        <div className="mb-12">
          <AppButton
            title={btnTitle}
            className="border border-[#2A7183]! py-2! text-sm! rounded-[60px] bg-[#4CCEEE1A]"
          />
          <div className="mb-12">
            <h1
              className={`font-[700] lg:text-[48px] text-2xl my-4 flex flex-row gap-2 text-[rgba(76,206,238,1)] font-[Sofia_Sans]`}
            >
              <span className="text-white">{headingWhite}</span> {headingColor}
            </h1>
            <p>{subText}</p>
          </div>
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-1 gap-3 mt-6">
          {features.map(({ id, title, description, icon }) => (
            <div key={id}>
              <div className="flex gap-4 ">
                <div className="backdrop-blur-[10px] bg-[radial-gradient(95.52%_96.38%_at_23%_10%,rgba(76,206,238,0.26),rgba(43,117,136,0)_100%)] p-2 rounded-full border border-[#295366]">
                  <Image
                    src={icon}
                    alt={title}
                    className="w-8 lg:w-10 h-8 lg:h-8 p-[6px] text-cyan-400"
                  />
                </div>
                <h4 className="text-[16px] md:text-lg mt-2 font-semibold text-cyan-400">
                  {title}
                </h4>
              </div>
              <ul className="list-disc pl-24 text-[16px] text-[#B2B4B6]">
                <li className="mb-1">{description}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
