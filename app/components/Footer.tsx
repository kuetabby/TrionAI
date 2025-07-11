import Image from "next/image";
import { FaBook, FaTelegram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#16232a] text-gray-300 py-10">
      <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 gap-8 items-center justify-center text-center max-w-screen-sm">
        {/* Company Info */}
        <h1 className="leading-tight flex flex-wrap justify-center gap-4">
          <div className="flex flex-row items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-[#18aaea]/25 text-white hover:border-[#18aaea]/40 transition-all duration-300">
            <Image
              src="/assets/images/Logo.png"
              alt="Representation of Trion AI"
              width={24}
              height={24}
              className="rounded-xl w-auto h-auto object-cover"
              priority={false}
            />
            Trion AI
          </div>
        </h1>

        <p className="text-gray-400 leading-relaxed">
          The world's first AI sports prediction that puts users at the
          forefront. We make beautiful data accessible to brands while ensuring
          those who create them retain their rights and are properly rewarded.
        </p>

        {/* Social Media */}
        <div className="mt-4 flex space-x-4 text-lg items-center justify-center">
          <a
            href="#"
            aria-label="Twitter"
            className="p-2 rounded-full bg-white/5 hover:bg-[#18aaea]/20 text-gray-400 hover:text-[#18aaea] transition-all duration-300"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href="#"
            aria-label="Telegram"
            className="p-2 rounded-full bg-white/5 hover:bg-[#18aaea]/20 text-gray-400 hover:text-[#18aaea] transition-all duration-300"
          >
            <FaTelegram size={24} />
          </a>
          <a
            href="#"
            aria-label="Documentation"
            className="p-2 rounded-full bg-white/5 hover:bg-[#18aaea]/20 text-gray-400 hover:text-[#18aaea] transition-all duration-300"
          >
            <FaBook size={24} />
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mt-4 text-lg font-bold text-[#18aaea] mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-wrap gap-6 justify-center">
            <li>
              <a
                href="#hero"
                className="text-gray-400 hover:text-[#18aaea] transition-colors duration-300 text-sm font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-[#18aaea] transition-colors duration-300 text-sm font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#howtouse"
                className="text-gray-400 hover:text-[#18aaea] transition-colors duration-300 text-sm font-medium"
              >
                How to Use
              </a>
            </li>
            <li>
              <a
                href="#tokenomics"
                className="text-gray-400 hover:text-[#18aaea] transition-colors duration-300 text-sm font-medium"
              >
                Tokenomics
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="text-gray-400 hover:text-[#18aaea] transition-colors duration-300 text-sm font-medium"
              >
                Roadmap
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-[#18aaea]/20 pt-6 text-center text-sm">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Trion AI. All Rights Reserved. | Designed
          by{" "}
          <a
            href="#"
            className="text-[#18aaea] hover:text-white transition-colors duration-300"
          >
            Trion AI
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
