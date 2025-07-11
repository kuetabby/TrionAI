import Hero from "./sections/Hero";
import HowToStart from "./sections/HowToStart";
import About from "./sections/About";
import Approach from "./sections/Approach";
import Tokenomics from "./sections/Tokenomics";
import Roadmap from "./sections/Roadmap";
import FAQSection from "./sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowToStart />
      <Tokenomics />
      <Roadmap />
      {/* <Approach /> */}
      {/* <FAQSection /> */}
    </>
  );
}
