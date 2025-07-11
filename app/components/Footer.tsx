"use client";
import Image from "next/image";
import Link from "next/link";

import { menuItems } from "./AppBar";
import { findUsLink, socialsLink } from "../utils/constant";
import { DexscreenerIcon, TeleIcon, TwitterIcon } from "../utils/socials";

export default function Footer() {
  const socials = [
    {
      title: "X/Twitter",
      link: socialsLink.twitter,
      icon: TwitterIcon,
    },
    {
      title: "Telegram",
      link: socialsLink.telegram,
      icon: TeleIcon,
    },
    // {
    //   title: "Uniswap",
    //   link: findUsLink.uniswap,
    //   icon: UniswapIcon,
    // },
    // {
    //   title: "Dextools",
    //   link: findUsLink.dextools,
    //   icon: DextoolsIcon,
    // },
    {
      title: "Dexscreener",
      link: findUsLink.dexscreener,
      icon: DexscreenerIcon,
    },
  ];

  const handleNavigation = (id: string, external: boolean) => {
    if (external) {
      window.location.href = `/${id}`;
    } else {
      const baseUrl = window.location.origin;
      const targetUrl = `${baseUrl}/#${id}`;
      if (window.location.pathname !== "/") {
        window.location.href = targetUrl;
      } else {
        window.history.pushState(null, "", targetUrl);
        const targetElement = document.getElementById(id);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    // <footer className="bg-[#16232a] text-gray-300 py-10">
    //   <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 gap-8 items-center justify-center text-center max-w-screen-sm">
    //     {/* Company Info */}
    //     <h1 className="leading-tight flex flex-wrap justify-center gap-4">
    //       <div className="flex flex-row items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-[#18aaea]/25 text-white hover:border-[#18aaea]/40 transition-all duration-300">
    //         <Image
    //           src="/assets/images/Logo.png"
    //           alt="Representation of Trion AI"
    //           width={24}
    //           height={24}
    //           className="rounded-xl w-auto h-auto object-cover"
    //           priority={false}
    //         />
    //         Trion AI
    //       </div>
    //     </h1>

    //     <p className="text-gray-400 leading-relaxed">
    //       The world's first AI sports prediction that puts users at the
    //       forefront. We make beautiful data accessible to brands while ensuring
    //       those who create them retain their rights and are properly rewarded.
    //     </p>

    //     {/* Social Media */}
    //     <div className="mt-4 flex space-x-4 text-lg items-center justify-center">
    //       <a
    //         href="#"
    //         aria-label="Twitter"
    //         className="p-2 rounded-full bg-white/5 hover:bg-[#18aaea]/20 text-gray-400 hover:text-[#18aaea] transition-all duration-300"
    //       >
    //         <FaXTwitter size={24} />
    //       </a>
    //       <a
    //         href="#"
    //         aria-label="Telegram"
    //         className="p-2 rounded-full bg-white/5 hover:bg-[#18aaea]/20 text-gray-400 hover:text-[#18aaea] transition-all duration-300"
    //       >
    //         <FaTelegram size={24} />
    //       </a>
    //       <a
    //         href="#"
    //         aria-label="Documentation"
    //         className="p-2 rounded-full bg-white/5 hover:bg-[#18aaea]/20 text-gray-400 hover:text-[#18aaea] transition-all duration-300"
    //       >
    //         <FaBook size={24} />
    //       </a>
    //     </div>

    //     {/* Quick Links */}
    //     <div>
    //       <h3 className="mt-4 text-lg font-bold text-[#18aaea] mb-4">
    //         Quick Links
    //       </h3>
    //       <ul className="flex flex-wrap gap-6 justify-center">
    //         <li>
    //           <a
    //             href="#hero"
    //             className="text-gray-400 hover:text-[#18aaea] transition-colors duration-300 text-sm font-medium"
    //           >
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#about"
    //             className="text-gray-400 hover:text-[#18aaea] transition-colors duration-300 text-sm font-medium"
    //           >
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#howtouse"
    //             className="text-gray-400 hover:text-[#18aaea] transition-colors duration-300 text-sm font-medium"
    //           >
    //             How to Use
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#tokenomics"
    //             className="text-gray-400 hover:text-[#18aaea] transition-colors duration-300 text-sm font-medium"
    //           >
    //             Tokenomics
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#roadmap"
    //             className="text-gray-400 hover:text-[#18aaea] transition-colors duration-300 text-sm font-medium"
    //           >
    //             Roadmap
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>

    //   {/* Copyright */}
    //   <div className="mt-10 border-t border-[#18aaea]/20 pt-6 text-center text-sm">
    //     <p className="text-gray-400">
    //       © {new Date().getFullYear()} Trion AI. All Rights Reserved. | Designed
    //       by{" "}
    //       <a
    //         href="#"
    //         className="text-[#18aaea] hover:text-white transition-colors duration-300"
    //       >
    //         Trion AI
    //       </a>
    //       .
    //     </p>
    //   </div>
    // </footer>
    <footer className="bg-backgroundColor text-gray-300 py-10">
      {/* <div className="container mx-auto px-4 grid grid-cols-1 gap-8 items-center justify-center text-center max-w-screen-sm">
        <h1 className="leading-tight flex flex-wrap justify-center gap-4">
          <div className="flex flex-row items-center gap-2 bg-primaryColorLight/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primaryColorLight/25 text-white">
            <Image
              src={LogoPurple}
              alt="Representation of Bethive AI"
              width={24}
              height={24}
              className="rounded-xl w-auto h-auto object-cover"
              priority={false}
            />
            Bethive AI
          </div>
        </h1>
        Bethive AI revolutionizes football betting with AI predictions,
        empowering users with accurate insights and smarter strategies.
        <div className="mt-4 flex space-x-4 text-lg items-center justify-center">
          <a
            href={socialsLink.twitter}
            aria-label="Twitter"
            className="hover:text-primaryColorLight"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href={socialsLink.telegram}
            aria-label="Telegram"
            className="hover:text-primaryColorLight"
          >
            <FaTelegram size={24} />
          </a>
          <a
            href={socialsLink.whitepaper}
            aria-label="whitepaper"
            className="hover:text-primaryColorLight"
          >
            <FaBook size={24} />
          </a>
        </div>
      </div> */}

      <div className="w-full lg:hidden max-w-screen-xl mx-auto my-4">
        <ul className="flex flex-wrap gap-4 items-center justify-center mx-auto">
          {menuItems.map((item) => (
            <li key={item.id} className="text-gray-400 font-semibold">
              {item.external && item.link ? (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto hover:text-primaryColor"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavigation(item.id, item.external)}
                  className="hover:text-primaryColor"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between max-w-screen-xl mx-auto">
        <Image
          src={"/assets/Header.svg"}
          alt="Header"
          width={50}
          height={50}
          className="w-[40vw] sm:w-52 h-auto object-contain flex"
          priority={false}
        />

        <ul className="hidden lg:flex gap-4 items-center justify-center mx-auto">
          {menuItems.map((item) => (
            <li key={item.id} className="text-gray-400 font-semibold">
              {item.external && item.link ? (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto hover:text-primaryColor"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavigation(item.id, item.external)}
                  className="hover:text-primaryColor"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        <div className="flex justify-end items-center relative mr-4">
          {/* <span className="border-b border-b-gray-500 flex-1 h-[1px] justify-self-stretch"></span> */}
          <div className="w-auto flex justify-center gap-x-2 md:gap-x-4">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.title}
                >
                  <button
                    // variant="outline"
                    className="w-[2em] !bg-black fill-white hover:fill-[#18aaea] shadow-md shadow-[#18aaea] border-[#18aaea] p-2"
                  >
                    <Icon className="!text-lg" />
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="flex justify-between mt-10 border-t border-gray-700 pt-6 max-w-screen-xl px-4 mx-auto">
        <p className="text-sm">© 2025 Trion AI. All rights reserved.</p>

        <Link
          href={`${socialsLink.whitepaper}/privacy-policy`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="underline text-white text-sm">Privacy Policy</p>
        </Link>
        {/* <p className="text-sm">
          © {new Date().getFullYear()} Bethive AI. All Rights Reserved. |
          Designed by{" "}
          <a href="#" className="text-primaryColorLight hover:underline">
            Bethive AI
          </a>
          .
        </p> */}
      </div>
    </footer>
  );
}
