import Banner from "./Components/home/Banner";
// import TestimonialSection from "./Components/home/TestimonialSection";
import SMPLGPTSec from "./Components/home/SMPL-GPTSec";
import AboutSMPLGPT from "./Components/home/AboutSMPLGPT";
import BlockChainSolutionSection from "./Components/home/BlockChainSolutionSec";
import FAQSection from "./Components/home/FAQSection";
import BlockChainAutomation from "./Components/home/BlockChainAutomation";
import BuySellSection from "./Components/home/BuySellSection";
import InfiniteScroll from "./Components/home/TestimonialSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <InfiniteScroll />
      <div className="max-w-[1320px] mx-auto px-6">
        <SMPLGPTSec />
        <AboutSMPLGPT />
      </div>
      <BlockChainAutomation />
      <div className="max-w-[1320px] mx-auto px-6">
        <BlockChainSolutionSection />
        <FAQSection />
      </div>

      <BuySellSection />
    </div>
  );
}
