import Banner from "./Components/home/Banner";
// import TestimonialSection from "./Components/home/TestimonialSection";
import SMPLGPTSec from "./Components/home/SMPL-GPTSec";
import AboutUs from "./Components/home/AboutSMPLGPT";
import BlockChainSolutionSection from "./Components/home/BlockChainSolutionSec";
import FAQSection from "./Components/home/FAQSection";
import BlockChainAutomation from "./Components/home/BlockChainAutomation";
import BuySellSection from "./Components/home/BuySellSection";
import InfiniteScroll from "./Components/home/TestimonialSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="">
        <InfiniteScroll />
        {/*<SMPLGPTSec />
        <AboutUs />
        <BlockChainAutomation />
        <BlockChainSolutionSection />
        <FAQSection />
        <BuySellSection /> */}
      </div>
    </div>
  );
}
