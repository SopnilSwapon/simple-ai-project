import Navbar from "./Components/home/Navbar";
import Banner from "./Components/home/Banner";
import TestimonialSection from "./Components/home/TestimonialSection";
import SMPLGPTSec from "./Components/home/SMPL-GPTSec";
import AboutUs from "./Components/home/AboutSMPLGPT";
import BlockChainSolutionSection from "./Components/home/BlockChainSolutionSec";
import FAQSection from "./Components/home/FAQSection";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <Banner />
        <TestimonialSection />
        <SMPLGPTSec />
        <AboutUs />
        <BlockChainSolutionSection />
        <FAQSection />
      </div>
    </div>
  );
}
