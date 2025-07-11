"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BiTrendingUp, BiShield, BiWallet, BiCoin } from "react-icons/bi";

interface TokenAllocation {
  label: string;
  percentage: number;
  amount: string;
  color: string;
  description: string;
}

interface StatItem {
  value: string;
  description: string;
  icon: React.ReactNode;
}

// Data untuk Token Allocation dengan warna yang konsisten
const tokenAllocations: TokenAllocation[] = [
  {
    label: "Public Sale",
    percentage: 30,
    amount: "300M",
    color: "#18aaea",
    description: "Available for public purchase",
  },
  {
    label: "Team & Advisors",
    percentage: 20,
    amount: "200M",
    color: "#16232a",
    description: "Vested over 4 years",
  },
  {
    label: "Development",
    percentage: 25,
    amount: "250M",
    color: "#10B981",
    description: "Platform development",
  },
  {
    label: "Marketing",
    percentage: 15,
    amount: "150M",
    color: "#F59E0B",
    description: "Marketing & partnerships",
  },
  {
    label: "Reserve",
    percentage: 10,
    amount: "100M",
    color: "#EF4444",
    description: "Emergency & expansion",
  },
];

// Data untuk Statistik
const stats: StatItem[] = [
  {
    value: "Trion AI",
    description: "Token Name",
    icon: <BiCoin className="text-xl" />,
  },
  {
    value: "TRION",
    description: "Ticker",
    icon: <BiCoin className="text-xl" />,
  },
  {
    value: "100 M",
    description: "Total Supply",
    icon: <BiCoin className="text-xl" />,
  },
  {
    value: "5 %",
    description: "Fee Buy/Sell",
    icon: <BiCoin className="text-xl" />,
  },
];

export default function Tokenomics() {
  const [activeSlice, setActiveSlice] = useState<number | null>(null);

  // Calculate angle for pie chart
  const calculateAngle = (percentage: number) => (percentage / 100) * 360;

  let cumulativeAngle = 0;
  const pieSlices = tokenAllocations.map((item, index) => {
    const angle = calculateAngle(item.percentage);
    const slice = {
      ...item,
      startAngle: cumulativeAngle,
      endAngle: cumulativeAngle + angle,
      angle,
    };
    cumulativeAngle += angle;
    return slice;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section id="tokenomics" className="relative w-full py-20 bg-[#16232a]">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#18aaea] uppercase tracking-wide text-sm font-semibold mb-2">
            Tokenomics
          </h2>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
            Let the games begin!
          </h1>
          <p className="text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
            $TRION token supply is capped at 100M tokens with strategic
            allocation for sustainable growth and fair distribution.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Interactive Pie Chart */}
          <motion.div
            className="flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="relative" variants={itemVariants}>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 320 320"
                  className="transform -rotate-90"
                >
                  {/* Pie Slices */}
                  {pieSlices.map((slice, index) => {
                    const isActive = activeSlice === index;
                    const radius = isActive ? 145 : 140;
                    const strokeWidth = isActive ? 12 : 8;

                    return (
                      <motion.circle
                        key={index}
                        cx="160"
                        cy="160"
                        r={radius}
                        fill="none"
                        stroke={slice.color}
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${
                          (slice.percentage / 100) * 849.54
                        } 849.54`}
                        strokeDashoffset={-((slice.startAngle / 360) * 849.54)}
                        className="cursor-pointer transition-all duration-300 drop-shadow-lg"
                        onMouseEnter={() => setActiveSlice(index)}
                        onMouseLeave={() => setActiveSlice(null)}
                        initial={{ strokeDasharray: "0 849.54" }}
                        animate={{
                          strokeDasharray: `${
                            (slice.percentage / 100) * 849.54
                          } 849.54`,
                        }}
                        transition={{ duration: 1.2, delay: index * 0.1 }}
                      />
                    );
                  })}
                </svg>

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                      1B
                    </div>
                    <div className="text-sm text-gray-400">Total Supply</div>
                    <div className="text-xs text-[#18aaea] mt-1">$TRION</div>
                  </div>
                </div>

                {/* Active Slice Label */}
                {activeSlice !== null && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#16232a]/95 backdrop-blur-sm rounded-lg px-4 py-3 border border-[#18aaea]/30 shadow-xl"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: tokenAllocations[activeSlice].color,
                        }}
                      />
                      <div>
                        <div className="text-white font-semibold text-sm">
                          {tokenAllocations[activeSlice].label}
                        </div>
                        <div className="text-[#18aaea] text-sm">
                          {tokenAllocations[activeSlice].percentage}% •{" "}
                          {tokenAllocations[activeSlice].amount}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Compact Legend */}
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-3"
              variants={itemVariants}
            >
              {tokenAllocations.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                    activeSlice === index
                      ? "bg-[#18aaea]/20 border-[#18aaea]/50"
                      : "bg-white/5 border-gray-600/30 hover:border-[#18aaea]/30"
                  }`}
                  onMouseEnter={() => setActiveSlice(index)}
                  onMouseLeave={() => setActiveSlice(null)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-white text-sm font-medium">
                    {item.label}
                  </span>
                  <span className="text-[#18aaea] text-sm">
                    {item.percentage}%
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Token Statistics */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Token Stats */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-6">
                Token Statistics
              </h3>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="p-4 lg:p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-[#18aaea]/20 hover:border-[#18aaea]/40 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#18aaea] to-[#16232a] rounded-lg flex items-center justify-center">
                        <div className="text-white">{stat.icon}</div>
                      </div>
                      <div>
                        <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-400">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section - Key Features */}
        {/* <motion.div
          className="mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <motion.div
              className="p-6 lg:p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-[#18aaea]/20 text-center hover:border-[#18aaea]/40 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-[#18aaea] mb-3">
                Deflationary
              </div>
              <div className="text-gray-400 text-sm lg:text-base">
                Regular token burns reduce total supply over time
              </div>
            </motion.div>

            <motion.div
              className="p-6 lg:p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-[#18aaea]/20 text-center hover:border-[#18aaea]/40 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-[#18aaea] mb-3">
                Utility-First
              </div>
              <div className="text-gray-400 text-sm lg:text-base">
                Real utility with platform access and rewards
              </div>
            </motion.div>

            <motion.div
              className="p-6 lg:p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-[#18aaea]/20 text-center hover:border-[#18aaea]/40 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-[#18aaea] mb-3">
                Community-Driven
              </div>
              <div className="text-gray-400 text-sm lg:text-base">
                Decentralized governance by token holders
              </div>
            </motion.div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
