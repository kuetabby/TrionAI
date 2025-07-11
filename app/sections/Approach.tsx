"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { LuCircleCheckBig } from "react-icons/lu";

const Approach = () => {
  const dummy = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ];

  return (
    <section
      id="approach"
      className="w-full py-20 bg-backgroundColor space-y-64 max-w-screen-lg"
    >
      <motion.div
        className="container flex flex-col items-center mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Heading */}
        <h2 className=" text-primaryColorLight mb-2">Our Approach</h2>
        <h2 className="text-4xl font-extrabold text-white mb-2">
          Lorem ipsum dolor sit amet!
        </h2>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className=" text-white/80 mb-12"
        >
          Here is a selection of the latest trending online games available at
          Trion AI.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row items-center text-center sm:text-start gap-12">
          <Image
            src="/assets/images/cross.png"
            alt="Trion AI"
            width={250}
            height={250}
          />
          <div className="flex flex-col text-gray-400">
            <h1 className="text-2xl font-bold text-white">
              Historical Performance Analysis & Market Data Integration
            </h1>
            Whether you’re a professional designer, a content creator, or
            someone who simply wants to bring a concept to life, we turns your
            words into stunning visuals—effortlessly and instantly
            <div className="mt-2">
              {dummy.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row gap-2 justify-center sm:justify-start items-center mb-1"
                  >
                    <LuCircleCheckBig className="text-primaryColorLight" />
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
        <motion.div className="flex flex-col-reverse sm:flex-row items-center text-center sm:text-start gap-12 mt-24">
          <div className="flex flex-col text-gray-400">
            <h1 className="text-2xl font-bold text-white">
              Historical Performance Analysis & Market Data Integration
            </h1>
            Whether you’re a professional designer, a content creator, or
            someone who simply wants to bring a concept to life, we turns your
            words into stunning visuals—effortlessly and instantly
            <div className="mt-2">
              {dummy.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row gap-2 justify-center sm:justify-start items-center mb-1"
                  >
                    <LuCircleCheckBig className="text-primaryColorLight" />
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <Image
            src="/assets/images/timer.png"
            alt="Trion AI"
            width={150}
            height={150}
          />
        </motion.div>
        <motion.div className="flex flex-col sm:flex-row items-center text-center sm:text-start gap-12 mt-24">
          <Image
            src="/assets/images/circle.png"
            alt="Trion AI"
            width={250}
            height={250}
          />
          <div className="flex flex-col text-gray-400">
            <h1 className="text-2xl font-bold text-white">
              Historical Performance Analysis & Market Data Integration
            </h1>
            Whether you’re a professional designer, a content creator, or
            someone who simply wants to bring a concept to life, we turns your
            words into stunning visuals—effortlessly and instantly
            <div className="mt-2">
              {dummy.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row gap-2 justify-center sm:justify-start items-center mb-1"
                  >
                    <LuCircleCheckBig className="text-primaryColorLight" />
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Approach;
