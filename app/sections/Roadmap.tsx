"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BiCheck } from "react-icons/bi";

interface RoadmapPhase {
  phase: string;
  // month: string;
  // year?: string;
  title: string;
  description: string;
  features: string[];
  status: "completed" | "in-progress" | "upcoming";
}

const roadmapData: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "Foundation & Core Infrastructure",
    description:
      "Establishing the fundamental architecture and core systems for Trion AI platform.",
    features: [
      "Platform architecture setup",
      "User authentication system",
      "Basic AI model integration",
      "Database infrastructure",
    ],
    status: "in-progress",
  },
  {
    phase: "Phase 2",
    title: "AI Gaming Engine Development",
    description:
      "Building the core AI gaming engine with advanced machine learning capabilities.",
    features: [
      "AI game logic implementation",
      "Real-time prediction algorithms",
      "Performance optimization",
      "Beta testing framework",
    ],
    status: "upcoming",
  },
  {
    phase: "Phase 3",
    title: "Enhanced User Experience",
    description:
      "Improving user interface and adding advanced gaming features for better engagement.",
    features: [
      "Advanced UI/UX design",
      "Multi-game support",
      "Social features integration",
      "Mobile optimization",
    ],
    status: "upcoming",
  },
  {
    phase: "Phase 4",
    title: "Blockchain Integration",
    description:
      "Implementing blockchain technology for secure transactions and tokenization.",
    features: [
      "Smart contract development",
      "Token economics implementation",
      "NFT marketplace integration",
      "Decentralized governance",
    ],
    status: "upcoming",
  },
  {
    phase: "Phase 5",
    title: "Global Expansion & Partnerships",
    description:
      "Scaling the platform globally with strategic partnerships and enterprise solutions.",
    features: [
      "Multi-language support",
      "Regional compliance",
      "Partnership integrations",
      "Enterprise API development",
    ],
    status: "upcoming",
  },
];

export default function Roadmap() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === roadmapData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? roadmapData.length - 1 : prevIndex - 1
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-[#10B981]";
      case "in-progress":
        return "bg-[#18aaea]";
      case "upcoming":
        return "bg-gray-600";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "upcoming":
        return "Upcoming";
      default:
        return "Unknown";
    }
  };

  return (
    <section id="roadmap" className="relative w-full py-20 bg-[#16232a]">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Title Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#18aaea] uppercase tracking-wide mb-2 text-sm font-semibold">
            Development Roadmap
          </h2>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
            Our Journey Forward
          </h1>
          <p className="text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive development roadmap showcasing the
            evolution of Trion AI platform from foundation to global expansion.
          </p>
        </motion.div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Phase Details */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-[#18aaea]/20 hover:border-[#18aaea]/40 transition-all duration-300">
              {/* Phase Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#18aaea] mb-2">
                    {roadmapData[currentIndex].phase}
                  </h3>
                  {/* <p className="text-gray-400 text-sm lg:text-base">
                    {roadmapData[currentIndex].month}{" "}
                    {roadmapData[currentIndex].year}
                  </p> */}
                </div>
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-3 h-3 rounded-full ${getStatusColor(
                      roadmapData[currentIndex].status
                    )}`}
                  ></div>
                  <span className="text-sm text-gray-400">
                    {getStatusText(roadmapData[currentIndex].status)}
                  </span>
                </div>
              </div>

              {/* Phase Title */}
              <h4 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                {roadmapData[currentIndex].title}
              </h4>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
                {roadmapData[currentIndex].description}
              </p>

              {/* Features */}
              <div>
                <h5 className="text-lg font-semibold text-[#18aaea] mb-3">
                  Key Features
                </h5>
                <ul className="space-y-2">
                  {roadmapData[currentIndex].features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center text-gray-300 text-sm lg:text-base"
                    >
                      <div className="w-2 h-2 bg-[#18aaea] rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Neon Graphic */}
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 text-[6rem] lg:text-[8rem] font-bold text-[#18aaea] opacity-5 flex items-center justify-center">
              {roadmapData[currentIndex].phase}
            </div>
            <div className="relative flex items-center justify-center">
              <motion.div
                className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-r from-[#18aaea] to-[#16232a] blur-xl opacity-70"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                  },
                  scale: {
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  },
                }}
              />
              <Image
                className="absolute drop-shadow-xl"
                src={"/assets/fluid.svg"}
                alt="Roadmap Trion AI"
                width={280}
                height={280}
              />
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative px-2 mb-12">
          <div className="flex justify-between items-center border-t border-[#18aaea]/25">
            {roadmapData.map((item, index) => (
              <motion.div
                key={index}
                className={`text-center relative text-xs sm:text-sm lg:text-base cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? "text-[#18aaea] scale-110"
                    : "text-gray-400 hover:text-gray-300"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onClick={() => setCurrentIndex(index)}
              >
                {/* Dot with Checkmark for Completed */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div
                    className={`w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center ${
                      index === currentIndex
                        ? "bg-gradient-to-br from-[#18aaea] to-[#16232a] shadow-lg shadow-[#18aaea]/50"
                        : `${getStatusColor(item.status)} opacity-60`
                    }`}
                  >
                    {/* Show checkmark for completed phases */}
                    {item.status === "completed" && (
                      <BiCheck className="text-white text-sm font-bold" />
                    )}
                  </div>
                  {index === currentIndex && (
                    <div className="absolute inset-0 rounded-full bg-[#18aaea] opacity-30 animate-ping" />
                  )}
                </div>
                {/* Phase */}
                <p className="mt-6 font-semibold">{item.phase}</p>
                {/* <p className="text-xs opacity-75">
                  {item.month} {item.year}
                </p> */}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mb-8 space-x-4">
          <motion.button
            onClick={handlePrev}
            className="p-3 lg:p-4 bg-gradient-to-r from-[#18aaea] to-[#16232a] hover:from-[#18aaea] hover:to-[#18aaea] rounded-full shadow-lg hover:scale-110 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 lg:h-6 lg:w-6 text-white group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="p-3 lg:p-4 bg-gradient-to-r from-[#18aaea] to-[#16232a] hover:from-[#18aaea] hover:to-[#18aaea] rounded-full shadow-lg hover:scale-110 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 lg:h-6 lg:w-6 text-white group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center">
          <div className="flex space-x-2">
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 flex items-center justify-center ${
                  index === currentIndex ? "bg-[#18aaea] w-6" : "bg-gray-600"
                }`}
              >
                {/* Show mini checkmark for completed phases in progress indicator */}
                {item.status === "completed" && index !== currentIndex && (
                  <BiCheck className="text-white text-xs" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
