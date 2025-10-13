import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import TestimonialSection from "./Components/TestimonialSection";
import SMPLGPTSec from "./Components/SMPL-GPTSec";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <TestimonialSection />
      <SMPLGPTSec />
    </div>
  );
}
