"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BiBell,
  BiTrophy,
  BiStats,
  BiChart,
  BiPlay,
  BiSearch,
  BiBullseye,
  BiWallet,
  BiChevronRight,
  BiChevronLeft,
} from "react-icons/bi";
import { useState } from "react";

// Interface untuk team stats
interface TeamStats {
  form: number;
  attacking: number;
  defensive: number;
  possession: number;
  h2h: number;
  goals: number;
}

// Interface untuk StatRadar dan StatBars props
interface StatComponentProps {
  team1Stats: TeamStats;
  team2Stats: TeamStats;
  team1Name: string;
  team2Name: string;
}

export default function Features() {
  const [selectedMatch, setSelectedMatch] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const sports = [
    {
      image: "/assets/images/sports/f1.png",
      title: "Formula 1",
      link: "",
    },
    {
      image: "/assets/images/sports/premier_league.png",
      title: "Premier League",
      link: "",
    },
    {
      image: "/assets/images/sports/champions_league.png",
      title: "Champions League",
      link: "",
    },
    {
      image: "/assets/images/sports/motogp.png",
      title: "MotoGP",
      link: "",
    },
    {
      image: "/assets/images/sports/afc_cup.png",
      title: "AFC Cup",
      link: "",
    },
    {
      image: "/assets/images/sports/olympics.png",
      title: "Olympics",
      link: "",
    },
  ];

  const predictions = [
    {
      sport: {
        name: "Premier League",
        logo: "/assets/images/sports/premier_league.png",
      },
      match: {
        time: "19:00",
        date: "Today",
        teams: [
          {
            name: "Liverpool U21",
            shortName: "LIV",
            logo: "/assets/images/teams/mu.png",
            status: "Win",
            winProbability: "65%",
            stats: {
              form: 85,
              attacking: 78,
              defensive: 82,
              possession: 75,
              h2h: 60,
              goals: 70,
            },
          },
          {
            name: "Sparta Praha U21",
            shortName: "SPR",
            logo: "/assets/images/teams/mc.png",
            status: "Lose",
            winProbability: "35%",
            stats: {
              form: 65,
              attacking: 70,
              defensive: 68,
              possession: 55,
              h2h: 40,
              goals: 50,
            },
          },
        ],
        bettingAdvice:
          "Combo Double chance: draw or Sparta Praha U21 and +2.5 goals",
      },
    },
    {
      sport: {
        name: "Premier League",
        logo: "/assets/images/sports/premier_league.png",
      },
      match: {
        time: "21:30",
        date: "Tomorrow",
        teams: [
          {
            name: "Manchester City",
            shortName: "MCFC",
            logo: "/assets/images/teams/mc.png",
            status: "Win",
            winProbability: "72%",
            stats: {
              form: 92,
              attacking: 95,
              defensive: 88,
              possession: 85,
              h2h: 80,
              goals: 85,
            },
          },
          {
            name: "Arsenal",
            shortName: "ARS",
            logo: "/assets/images/teams/mu.png",
            status: "Lose",
            winProbability: "28%",
            stats: {
              form: 75,
              attacking: 80,
              defensive: 78,
              possession: 70,
              h2h: 20,
              goals: 65,
            },
          },
        ],
        bettingAdvice: "Over 2.5 goals and Manchester City to win",
      },
    },
  ];

  // How to Use Steps
  const howToUseSteps = [
    {
      step: "01",
      title: "Choose Your League",
      description:
        "Select from Premier League, Champions League, Formula 1, MotoGP, and many more sports leagues available on our platform.",
      icon: <BiSearch className="text-xl" />,
      image: "/assets/images/sports/premier_league.png",
      details: [
        "Browse 20+ available leagues",
        "Filter by sport type",
        "Real-time league updates",
        "Live match schedules",
      ],
    },
    {
      step: "02",
      title: "Select Match & Teams",
      description:
        "Pick the specific match you want to analyze. Our AI will instantly load comprehensive team statistics and historical data.",
      icon: <BiBullseye className="text-xl" />,
      image: "/assets/images/teams/mu.png",
      details: [
        "Live match selection",
        "Team performance history",
        "Head-to-head records",
        "Player availability status",
      ],
    },
    {
      step: "03",
      title: "Get AI Predictions",
      description:
        "Our advanced AI analyzes 50+ data points including team form, player stats, weather conditions, and historical patterns.",
      icon: <BiChart className="text-xl" />,
      image: "/assets/images/Logo.png",
      details: [
        "95% accuracy rate",
        "Real-time analysis",
        "Multiple prediction types",
        "Confidence levels included",
      ],
    },
    {
      step: "04",
      title: "Review Statistics",
      description:
        "Examine detailed radar charts, team comparisons, and comprehensive statistical breakdowns before making your decision.",
      icon: <BiStats className="text-xl" />,
      image: "/assets/images/chart-preview.png",
      details: [
        "Interactive radar charts",
        "Team comparison tools",
        "Historical performance",
        "Advanced metrics analysis",
      ],
    },
    {
      step: "05",
      title: "Get Betting Advice",
      description:
        "Receive personalized betting recommendations based on AI analysis, including risk assessment and optimal betting strategies.",
      icon: <BiTrophy className="text-xl" />,
      image: "/assets/images/betting-advice.png",
      details: [
        "Risk-based recommendations",
        "Multiple betting options",
        "Profit optimization tips",
        "Real-time odds comparison",
      ],
    },
    {
      step: "06",
      title: "Place Your Bet",
      description:
        "Use our integrated platform to place bets directly or export predictions to your preferred betting platform.",
      icon: <BiWallet className="text-xl" />,
      image: "/assets/images/wallet.png",
      details: [
        "Integrated betting platform",
        "Multiple payment options",
        "Export to external platforms",
        "Track your betting history",
      ],
    },
  ];

  // Next Step Function
  const nextStep = () => {
    if (activeStep < howToUseSteps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  // Previous Step Function
  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  // Split steps into two columns for desktop
  const leftColumnSteps = howToUseSteps.slice(0, 3);
  const rightColumnSteps = howToUseSteps.slice(3, 6);

  const StatRadar: React.FC<StatComponentProps> = ({
    team1Stats,
    team2Stats,
    team1Name,
    team2Name,
  }) => {
    const categories = [
      "Form",
      "Attacking",
      "Defensive",
      "Possession",
      "H2H",
      "Goals",
    ];
    const team1Data = [
      team1Stats.form,
      team1Stats.attacking,
      team1Stats.defensive,
      team1Stats.possession,
      team1Stats.h2h,
      team1Stats.goals,
    ];
    const team2Data = [
      team2Stats.form,
      team2Stats.attacking,
      team2Stats.defensive,
      team2Stats.possession,
      team2Stats.h2h,
      team2Stats.goals,
    ];

    return (
      <div className="w-full">
        <h3 className="text-lg font-semibold text-white mb-4">
          Radar Chart Comparison
        </h3>
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#18aaea] rounded-sm"></div>
              <span className="text-sm text-white">{team1Name}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#EF4444] rounded-sm"></div>
              <span className="text-sm text-white">{team2Name}</span>
            </div>
          </div>
        </div>

        <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto">
          <svg width="100%" height="100%" viewBox="0 0 320 320">
            {/* Grid lines */}
            {[20, 40, 60, 80, 100].map((radius, i) => (
              <polygon
                key={i}
                points={categories
                  .map((_, index) => {
                    const angle = ((index * 60 - 90) * Math.PI) / 180;
                    const r = radius * 1.2;
                    const x = 160 + r * Math.cos(angle);
                    const y = 160 + r * Math.sin(angle);
                    return `${x},${y}`;
                  })
                  .join(" ")}
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            ))}

            {/* Category lines */}
            {categories.map((_, index) => {
              const angle = ((index * 60 - 90) * Math.PI) / 180;
              const x = 160 + 120 * Math.cos(angle);
              const y = 160 + 120 * Math.sin(angle);
              return (
                <line
                  key={index}
                  x1="160"
                  y1="160"
                  x2={x}
                  y2={y}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
              );
            })}

            {/* Team 1 polygon */}
            <polygon
              points={team1Data
                .map((value, index) => {
                  const angle = ((index * 60 - 90) * Math.PI) / 180;
                  const r = (value / 100) * 120;
                  const x = 160 + r * Math.cos(angle);
                  const y = 160 + r * Math.sin(angle);
                  return `${x},${y}`;
                })
                .join(" ")}
              fill="rgba(24, 170, 234, 0.3)"
              stroke="#18aaea"
              strokeWidth="2"
            />

            {/* Team 2 polygon */}
            <polygon
              points={team2Data
                .map((value, index) => {
                  const angle = ((index * 60 - 90) * Math.PI) / 180;
                  const r = (value / 100) * 120;
                  const x = 160 + r * Math.cos(angle);
                  const y = 160 + r * Math.sin(angle);
                  return `${x},${y}`;
                })
                .join(" ")}
              fill="rgba(239, 68, 68, 0.3)"
              stroke="#EF4444"
              strokeWidth="2"
            />

            {/* Category labels */}
            {categories.map((category, index) => {
              const angle = ((index * 60 - 90) * Math.PI) / 180;
              const x = 160 + 140 * Math.cos(angle);
              const y = 160 + 140 * Math.sin(angle);
              return (
                <text
                  key={index}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs fill-white"
                >
                  {category}
                </text>
              );
            })}
          </svg>
        </div>
      </div>
    );
  };

  const StatBars: React.FC<StatComponentProps> = ({
    team1Stats,
    team2Stats,
    team1Name,
    team2Name,
  }) => {
    const categories = [
      "Form",
      "Attacking",
      "Defensive",
      "Possession",
      "H2H",
      "Goals",
    ];
    const team1Data = [
      team1Stats.form,
      team1Stats.attacking,
      team1Stats.defensive,
      team1Stats.possession,
      team1Stats.h2h,
      team1Stats.goals,
    ];
    const team2Data = [
      team2Stats.form,
      team2Stats.attacking,
      team2Stats.defensive,
      team2Stats.possession,
      team2Stats.h2h,
      team2Stats.goals,
    ];

    return (
      <div className="w-full">
        <h3 className="text-lg font-semibold text-white mb-4">
          Detailed Percentage Comparison
        </h3>
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#18aaea] rounded-sm"></div>
              <span className="text-sm text-white">{team1Name}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#EF4444] rounded-sm"></div>
              <span className="text-sm text-white">{team2Name}</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {categories.map((category, index) => (
            <div key={index} className="space-y-1">
              <div className="text-sm text-white text-center">{category}</div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-6 lg:w-16 lg:h-8 bg-[#18aaea] rounded flex items-center justify-center">
                  <span className="text-xs text-white">{team1Data[index]}</span>
                </div>
                <div className="flex-1 flex">
                  <div
                    className="h-6 lg:h-8 bg-[#18aaea] rounded-l"
                    style={{ width: `${team1Data[index]}%` }}
                  />
                  <div
                    className="h-6 lg:h-8 bg-[#EF4444] rounded-r"
                    style={{ width: `${team2Data[index]}%` }}
                  />
                </div>
                <div className="w-12 h-6 lg:w-16 lg:h-8 bg-[#EF4444] rounded flex items-center justify-center">
                  <span className="text-xs text-white">{team2Data[index]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="howtouse" className="w-full py-20 bg-[#16232a] space-y-20">
      {/* How to Use Section */}
      <motion.div
        className="container flex flex-col items-center mx-auto px-4 lg:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-[#18aaea] mb-2 text-sm font-semibold uppercase tracking-wide">
            How to Use
          </h2>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
            Start Winning with AI in 6 Easy Steps
          </h1>
          <p className="text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
            Our platform makes AI-powered sports predictions simple and
            accessible. Follow these steps to start winning today.
          </p>
        </div>

        {/* Mobile Progress Bar */}
        <div className="lg:hidden w-full mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#18aaea] text-sm font-bold">
              STEP {howToUseSteps[activeStep].step}
            </span>
            <span className="text-gray-400 text-sm">
              {activeStep + 1} of {howToUseSteps.length}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
            <div
              className="bg-[#18aaea] h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((activeStep + 1) / howToUseSteps.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Steps Timeline */}
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Steps Navigation + CTA (Desktop) */}
            <div className="space-y-6">
              {/* Steps Navigation (Desktop only) */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  {/* Left Column - Steps 1-3 */}
                  <div className="space-y-3">
                    {leftColumnSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                          activeStep === index
                            ? "bg-gradient-to-r from-[#18aaea]/20 to-[#16232a]/20 border-[#18aaea]/50"
                            : "bg-white/5 border-gray-600/30 hover:border-[#18aaea]/30"
                        } border`}
                        onClick={() => setActiveStep(index)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              activeStep === index
                                ? "bg-[#18aaea] text-white"
                                : "bg-gray-700 text-gray-400"
                            }`}
                          >
                            {step.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[#18aaea] text-xs font-bold block">
                              STEP {step.step}
                            </span>
                            <h3 className="text-white font-semibold text-sm mb-1 truncate">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Right Column - Steps 4-6 */}
                  <div className="space-y-3">
                    {rightColumnSteps.map((step, index) => (
                      <motion.div
                        key={index + 3}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                          activeStep === index + 3
                            ? "bg-gradient-to-r from-[#18aaea]/20 to-[#16232a]/20 border-[#18aaea]/50"
                            : "bg-white/5 border-gray-600/30 hover:border-[#18aaea]/30"
                        } border`}
                        onClick={() => setActiveStep(index + 3)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              activeStep === index + 3
                                ? "bg-[#18aaea] text-white"
                                : "bg-gray-700 text-gray-400"
                            }`}
                          >
                            {step.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[#18aaea] text-xs font-bold block">
                              STEP {step.step}
                            </span>
                            <h3 className="text-white font-semibold text-sm mb-1 truncate">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Compact CTA (Desktop only) */}
              <motion.div
                className="hidden lg:block p-6 bg-gradient-to-r from-[#18aaea]/10 to-[#16232a]/10 rounded-xl border border-[#18aaea]/30 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  Ready to Start Winning?
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Join thousands of successful bettors who trust our AI
                  predictions.
                </p>
                <div className="flex flex-col gap-3">
                  {/* <motion.button
                    className="w-full py-2.5 bg-gradient-to-r from-[#18aaea] to-[#16232a] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Free Trial
                  </motion.button> */}
                  <motion.button
                    className="w-full py-2.5 border border-[#18aaea]/50 text-[#18aaea] rounded-lg font-semibold hover:bg-[#18aaea]/10 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Watch Demo
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Step Details */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-[#18aaea]/30"
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#18aaea] to-[#16232a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl lg:text-3xl">
                    {howToUseSteps[activeStep].icon}
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  {howToUseSteps[activeStep].title}
                </h3>
                <p className="text-gray-400 text-sm lg:text-base">
                  {howToUseSteps[activeStep].description}
                </p>
              </div>

              {/* Step Details */}
              <div className="space-y-3">
                <h4 className="text-[#18aaea] font-semibold mb-3">
                  Key Features:
                </h4>
                {howToUseSteps[activeStep].details.map((detail, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-[#18aaea] rounded-full flex-shrink-0"></div>
                    <span className="text-sm lg:text-base">{detail}</span>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-6">
                {/* Previous Button */}
                <motion.button
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    activeStep === 0
                      ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                  onClick={prevStep}
                  disabled={activeStep === 0}
                  whileHover={activeStep > 0 ? { scale: 1.05 } : {}}
                  whileTap={activeStep > 0 ? { scale: 0.95 } : {}}
                >
                  <BiChevronLeft />
                  <span className="hidden sm:inline">Previous</span>
                </motion.button>

                {/* Next/Get Started Button */}
                {activeStep === howToUseSteps.length - 1 ? (
                  ""
                ) : (
                  <motion.button
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-[#18aaea] to-[#16232a] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    onClick={
                      activeStep === howToUseSteps.length - 1
                        ? () => {}
                        : nextStep
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeStep === howToUseSteps.length - 1 ? (
                      "Get Started Now"
                    ) : (
                      <>
                        Next Step
                        <BiChevronRight />
                      </>
                    )}
                  </motion.button>
                )}
                {/* <motion.button
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-[#18aaea] to-[#16232a] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  onClick={
                    activeStep === howToUseSteps.length - 1
                      ? () => {}
                      : nextStep
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeStep === howToUseSteps.length - 1 ? (
                    "Get Started Now"
                  ) : (
                    <>
                      Next Step
                      <BiChevronRight />
                    </>
                  )}
                </motion.button> */}
              </div>

              {/* Mobile Step Navigation */}
              <div className="lg:hidden mt-6 flex justify-center gap-2">
                {howToUseSteps.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeStep === index ? "bg-[#18aaea] w-6" : "bg-gray-600"
                    }`}
                    onClick={() => setActiveStep(index)}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile CTA - shown only on mobile */}
          <motion.div
            className="lg:hidden mt-8 p-6 bg-gradient-to-r from-[#18aaea]/10 to-[#16232a]/10 rounded-xl border border-[#18aaea]/30 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Ready to Start Winning?
            </h3>
            <p className="text-gray-400 mb-6 text-sm">
              Join thousands of successful bettors who trust our AI predictions.
              Start your winning journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <motion.button
                className="px-6 py-3 bg-gradient-to-r from-[#18aaea] to-[#16232a] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button> */}
              <motion.button
                className="px-6 py-3 border border-[#18aaea]/50 text-[#18aaea] rounded-lg font-semibold hover:bg-[#18aaea]/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
