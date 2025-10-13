import Navbar from "./Components/home/Navbar";
import Banner from "./Components/home/Banner";
import TestimonialSection from "./Components/home/TestimonialSection";
import SMPLGPTSec from "./Components/home/SMPL-GPTSec";
import AboutUs from "./Components/home/AboutSMPLGPT";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <TestimonialSection />
      <SMPLGPTSec />
      <AboutUs />
    </div>
  );
}
