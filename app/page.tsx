import Hero from "./sections/Hero";
import HowToStart from "./sections/HowToStart";
import About from "./sections/About";
// import Approach from "./sections/Approach";
import Tokenomics from "./sections/Tokenomics";
import Roadmap from "./sections/Roadmap";
// import FAQSection from "./sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full relative">
        <div className="absolute top-0 right-0 w-full h-[75px] bg-gradient-to-t from-transparent to-black z-[10]" />
        <div className="absolute bottom-0 left-0 w-full h-[75px] bg-gradient-to-t from-black to-transparent z-10" />
      </div>
      <About />
      <HowToStart />
      <Tokenomics />
      <Roadmap />
      <div className="w-full relative">
        <div className="absolute top-0 right-0 w-full h-[50px] bg-gradient-to-t from-transparent to-black z-[10]" />
        <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-black to-transparent z-10" />
      </div>
      {/* <Approach /> */}
      {/* <FAQSection /> */}
    </>
  );
}
