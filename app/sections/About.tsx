"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BiBell,
  BiTrophy,
  BiStats,
  BiChart,
  BiCheckCircle,
  BiShield,
  BiTrendingUp,
  BiBot,
  BiRocket,
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

export default function About() {
  const [selectedMatch, setSelectedMatch] = useState(0);

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
            name: "Manchester United U21",
            shortName: "MU U21",
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
            name: "Manchester City U21",
            shortName: "MC U21",
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
          "Combo Double chance: draw or Manchester City U21 and +2.5 goals",
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
            shortName: "MC",
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
            name: "Manchester United",
            shortName: "MU",
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

  // Platform Features
  const platformFeatures = [
    {
      icon: <BiBot className="text-3xl" />,
      title: "Advanced AI Technology",
      description:
        "Our cutting-edge AI analyzes 50+ data points including team form, player statistics, historical performance, and weather conditions to provide accurate predictions.",
      stats: "95% Accuracy Rate",
    },
    {
      icon: <BiChart className="text-3xl" />,
      title: "Comprehensive Analytics",
      description:
        "Interactive radar charts, statistical breakdowns, and team comparisons give you deep insights into every match before you place your bet.",
      stats: "20+ Sports Covered",
    },
    {
      icon: <BiShield className="text-3xl" />,
      title: "Risk Assessment",
      description:
        "Smart risk evaluation and personalized betting recommendations help you make informed decisions and optimize your betting strategy.",
      stats: "Real-time Analysis",
    },
    {
      icon: <BiTrendingUp className="text-3xl" />,
      title: "Profit Optimization",
      description:
        "Our algorithms identify the best betting opportunities and provide strategies to maximize your returns while minimizing risks.",
      stats: "Expert Recommendations",
    },
  ];

  // Success Stats
  const successStats = [
    // { number: "10,000+", label: "Active Users" },
    { number: "0", label: "Active Users" },
    { number: "95%", label: "Accuracy Rate" },
    // { number: "20+", label: "Sports Covered" },
    { number: "20+", label: "Sports Covered" },
    { number: "24/7", label: "Live Updates" },
  ];

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
    <section id="about" className="w-full py-20 bg-[#16232a] space-y-20">
      {/* <div className="absolute top-0 right-0 w-full h-[100px] bg-gradient-to-t from-transparent to-black z-[10]" />
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent z-10" /> */}

      {/* About Project Header */}
      <motion.div
        className="container flex flex-col items-center mx-auto px-4 lg:px-6 text-center mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[#18aaea] mb-2 text-sm font-semibold uppercase tracking-wide">
          About Trion AI
        </h2>
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
          Revolutionary AI-Powered Sports Betting Platform
        </h1>
        <p className="text-base lg:text-lg text-gray-400 max-w-3xl mx-auto">
          We combine cutting-edge artificial intelligence with comprehensive
          sports analytics to provide the most accurate predictions and betting
          advice. Our platform analyzes thousands of data points in real-time to
          give you the winning edge.
        </p>
      </motion.div>

      {/* Success Stats */}
      <motion.div
        className="container mx-auto px-4 lg:px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {successStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#18aaea]/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-[#18aaea] mb-2">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Platform Features */}
      <motion.div
        className="container mx-auto px-4 lg:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="whyus"
      >
        <div className="h-16" />
        <div className="text-center mb-16">
          <h2 className="text-[#18aaea] mb-2 text-sm font-semibold uppercase tracking-wide">
            Platform Features
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Why Choose Our AI Platform?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover what makes our platform the most trusted choice for sports
            betting enthusiasts worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 lg:p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-[#18aaea]/20 hover:border-[#18aaea]/40 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#18aaea] to-[#16232a] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18aaea]/20 text-[#18aaea] rounded-full text-sm">
                    <BiCheckCircle />
                    {feature.stats}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AI Predictions Demo */}
      <motion.div
        className="container flex flex-col items-center mx-auto px-4 lg:px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[#18aaea] mb-2 text-sm font-semibold uppercase tracking-wide">
          AI Predictions Demo
        </h2>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-2">
          See Our AI in Action!
        </h2>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white/80 mb-12 max-w-2xl text-sm lg:text-base"
        >
          Experience real-time AI analysis with comprehensive statistics and
          expert betting advice for every match.
        </motion.p>

        {/* Prediction Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {predictions.map((predict, index) => (
            <motion.div
              key={index}
              className={`relative w-full flex flex-col bg-white/5 backdrop-blur-sm shadow-lg p-4 lg:p-6 rounded-xl text-center transform transition-all duration-300 border cursor-pointer ${
                selectedMatch === index
                  ? "border-[#18aaea]/50 shadow-[#18aaea]/20"
                  : "border-white/10 hover:border-[#18aaea]/30"
              } gap-4`}
              onClick={() => setSelectedMatch(index)}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Header */}
              <div className="flex flex-row w-full justify-between items-center">
                <Image
                  src={predict.sport.logo}
                  alt={predict.sport.name}
                  className="w-16 h-6 lg:w-20 lg:h-8 object-contain"
                  width={80}
                  height={32}
                />
                <div className="flex flex-col items-center text-xs text-gray-400">
                  <span>{predict.match.date}</span>
                  <span className="font-bold text-sm lg:text-base text-white">
                    {predict.match.time}
                  </span>
                </div>
                <motion.div
                  className="p-2 rounded-full bg-[#18aaea]/20 text-[#18aaea]"
                  whileHover={{ scale: 1.1 }}
                >
                  <BiBell />
                </motion.div>
              </div>

              {/* Teams */}
              <div className="flex flex-row w-full justify-between items-center">
                <div className="flex flex-col items-center justify-center gap-2 lg:gap-3">
                  <Image
                    src={predict.match.teams[0].logo}
                    alt={predict.match.teams[0].name}
                    className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
                    width={48}
                    height={48}
                  />
                  <span className="font-bold text-xs lg:text-sm text-white">
                    {predict.match.teams[0].shortName}
                  </span>
                  <div className="bg-gradient-to-r from-[#18aaea] to-[#16232a] text-white rounded-lg px-2 py-1 lg:px-3 lg:py-2 text-xs lg:text-sm flex items-center gap-1">
                    <BiTrophy />
                    <span>{predict.match.teams[0].winProbability}</span>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <span className="text-[#18aaea] font-bold text-base lg:text-lg">
                    VS
                  </span>
                  <motion.button
                    className="px-3 py-1 lg:px-4 lg:py-2 bg-[#18aaea]/20 text-[#18aaea] rounded-lg text-xs lg:text-sm hover:bg-[#18aaea]/30 transition-colors flex items-center gap-1 lg:gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <BiStats />
                    <span className="hidden sm:inline">View Stats</span>
                  </motion.button>
                </div>

                <div className="flex flex-col items-center justify-center gap-2 lg:gap-3">
                  <Image
                    src={predict.match.teams[1].logo}
                    alt={predict.match.teams[1].name}
                    className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
                    width={48}
                    height={48}
                  />
                  <span className="font-bold text-xs lg:text-sm text-white">
                    {predict.match.teams[1].shortName}
                  </span>
                  <div className="bg-red-500/80 text-white rounded-lg px-2 py-1 lg:px-3 lg:py-2 text-xs lg:text-sm">
                    {predict.match.teams[1].winProbability}
                  </div>
                </div>
              </div>

              {/* Betting Advice */}
              <div className="mt-4 p-3 lg:p-4 bg-[#18aaea]/10 rounded-lg border border-[#18aaea]/20">
                <h4 className="text-[#18aaea] font-semibold mb-2 text-xs lg:text-sm">
                  AI Betting Advice
                </h4>
                <p className="text-white text-xs lg:text-sm">
                  {predict.match.bettingAdvice}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Statistics */}
        {selectedMatch !== null && (
          <motion.div
            className="w-full max-w-6xl bg-[#16232a]/80 backdrop-blur-sm rounded-xl p-4 lg:p-8 border border-[#18aaea]/20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Radar Chart */}
              <div className="flex justify-center">
                <StatRadar
                  team1Stats={predictions[selectedMatch].match.teams[0].stats}
                  team2Stats={predictions[selectedMatch].match.teams[1].stats}
                  team1Name={
                    predictions[selectedMatch].match.teams[0].shortName
                  }
                  team2Name={
                    predictions[selectedMatch].match.teams[1].shortName
                  }
                />
              </div>

              {/* Bar Chart */}
              <div className="flex justify-center">
                <StatBars
                  team1Stats={predictions[selectedMatch].match.teams[0].stats}
                  team2Stats={predictions[selectedMatch].match.teams[1].stats}
                  team1Name={
                    predictions[selectedMatch].match.teams[0].shortName
                  }
                  team2Name={
                    predictions[selectedMatch].match.teams[1].shortName
                  }
                />
              </div>
            </div>

            {/* Enhanced Betting Advice */}
            <div className="mt-6 lg:mt-8 p-4 lg:p-6 bg-gradient-to-r from-[#18aaea]/10 to-[#16232a]/10 rounded-lg border border-[#18aaea]/30">
              <h4 className="text-[#18aaea] font-semibold mb-3 text-base lg:text-lg flex items-center gap-2">
                <BiChart />
                Enhanced AI Analysis
              </h4>
              <p className="text-white mb-4 text-sm lg:text-base">
                {predictions[selectedMatch].match.bettingAdvice}
              </p>
              <div className="flex justify-end">
                <motion.button
                  className="px-4 lg:px-6 py-2 bg-gradient-to-r from-[#18aaea] to-[#16232a] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try Our Platform
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
