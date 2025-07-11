"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { LuCircleCheck } from "react-icons/lu";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// Interface untuk tipe data FAQ
interface FAQItem {
  question: string;
  answer: string;
}

// Data FAQ
const faqData: FAQItem[] = [
  {
    question: "What is Trion AI?",
    answer:
      "Trion AI is an AI-powered betting assistant designed to provide accurate predictions by analyzing market data, historical performance, and real-time trends.",
  },
  {
    question: "How does Trion AI improve betting outcomes?",
    answer:
      "Trion AI uses machine learning algorithms to process vast amounts of data, delivering actionable insights and predictions with up to 85% accuracy to enhance your betting decisions.",
  },
  {
    question: "What sports are covered by Trion AI?",
    answer:
      "Trion AI supports a variety of sports, including football, basketball, tennis, and esports, ensuring accurate predictions tailored to each game.",
  },
  {
    question: "Do I need a subscription to use Trion AI?",
    answer:
      "Trion AI offers both free and premium plans. Free users can access basic predictions, while premium users benefit from advanced analytics, higher accuracy, and additional features.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Konten FAQ di Kiri */}
        <motion.div
          className="flex flex-col lg:w-1/2 text-gray-400"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white mb-6 text-center sm:text-start">
            Frequently Asked Questions
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-center sm:text-start">
            Learn how <span className="text-primaryColorLight">Trion AI</span>{" "}
            enhances your betting experience with advanced AI predictions.
          </p>

          {/* Daftar FAQ */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-primaryColorLight/10 border border-primaryColorDark/50 hover:shadow-lg hover:shadow-primaryColorLight/20 rounded-lg shadow-lg overflow-hidden"
              >
                <div
                  className="flex justify-between items-center p-4 cursor-pointer hover:bg-primaryColorLight/50 hover:shadow-lg hover:shadow-primaryColorLight/20 transition-all"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center gap-3">
                    <LuCircleCheck
                      className="text-primaryColorLight"
                      size={24}
                    />
                    <h3 className="font-semibold text-white">
                      {item.question}
                    </h3>
                  </div>
                  {activeIndex === index ? (
                    <AiOutlineMinus
                      className="text-primaryColorLight"
                      size={20}
                    />
                  ) : (
                    <AiOutlinePlus
                      className="text-primaryColorLight"
                      size={20}
                    />
                  )}
                </div>

                {/* Konten Expand */}
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 text-gray-300 text-sm"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex justify-center relative"
        >
          <div className="relative w-[320px] h-[320px]">
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-30" />
            <Image
              src="/assets/images/arrow.png"
              alt="FAQ Illustration"
              width={320}
              height={320}
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
