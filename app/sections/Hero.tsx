"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden py-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Video Background with Enhanced Overlay */}
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        src="/assets/videos/ballon_ai_bg.mp4"
        autoPlay
        loop
        muted
      /> */}

      {/* Multi-layered Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#16232a]/20 via-[#18aaea]/5 to-[#16232a]/80 z-[-1]" />
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#16232a] via-transparent to-transparent z-[-1]" /> */}

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#18aaea] rounded-full opacity-30"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Interactive Mouse Follower */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      >
        <div className="w-5 h-5 bg-[#18aaea] rounded-full opacity-20 blur-sm" />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Brand Badge - Positioned to avoid navbar overlap */}
            <motion.div
              className="inline-flex items-center gap-3 bg-[#16232a]/60 backdrop-blur-md rounded-full px-6 py-3 border border-[#18aaea]/30 shadow-lg mt-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Image
                  src="/assets/images/Logo.png"
                  alt="Trion AI"
                  width={28}
                  height={28}
                  className="rounded-full"
                  priority
                />
              </motion.div>
              <span className="text-[#18aaea] font-semibold tracking-wide">
                Trion AI
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl lg:text-7xl font-extrabold leading-tight"
              variants={itemVariants}
            >
              <span className="block bg-gradient-to-r from-white via-[#18aaea] to-white bg-clip-text text-transparent">
                Powering
              </span>
              <span className="block bg-gradient-to-r from-[#18aaea] via-[#18aaea] to-[#16232a] bg-clip-text text-transparent">
                Next-Gen AI
              </span>
              <motion.span
                className="block text-white relative"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(24, 170, 234, 0.5)",
                    "0 0 20px rgba(24, 170, 234, 0.8)",
                    "0 0 10px rgba(24, 170, 234, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Revolution
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              The world's first{" "}
              <span className="text-[#18aaea] font-semibold">
                AI sports prediction
              </span>{" "}
              platform that puts users at the forefront. We make beautiful data
              accessible while ensuring creators retain their rights and are
              properly rewarded.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-[#18aaea] via-[#18aaea] to-[#16232a] rounded-full font-semibold text-lg overflow-hidden transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(24, 170, 234, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <span className="relative z-10">Explore Trion AI</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#16232a] via-[#18aaea] to-[#18aaea] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={isHovered ? { x: [0, 100, 0] } : {}}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              <motion.button
                className="group px-8 py-4 bg-transparent border-2 border-[#18aaea]/50 rounded-full font-semibold text-lg hover:bg-[#18aaea]/10 transition-all duration-300 backdrop-blur-sm"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(24, 170, 234, 1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  Contact Us
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div className="flex gap-8 pt-8" variants={itemVariants}>
              {[
                { label: "AI Models", value: "100+" },
                { label: "Predictions", value: "1M+" },
                { label: "Accuracy", value: "95%" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-[#18aaea]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            className="relative flex items-center justify-center"
            variants={itemVariants}
          >
            {/* Animated Rings */}
            <div className="relative">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-[#18aaea]/30"
                  style={{
                    width: 300 + i * 100,
                    height: 300 + i * 100,
                    left: -(i * 50),
                    top: -(i * 50),
                  }}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 20 + i * 5,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />
              ))}

              {/* Central Glow */}
              <motion.div
                className="w-80 h-80 bg-gradient-to-r from-[#18aaea]/20 via-[#18aaea]/30 to-[#16232a]/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Center Logo/Icon */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                variants={floatingVariants}
                animate="animate"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-[#18aaea] to-[#16232a] rounded-full flex items-center justify-center shadow-2xl">
                  <Image
                    src="/assets/images/Logo.png"
                    alt="Trion AI"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[#18aaea] rounded-full flex justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-[#18aaea] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
