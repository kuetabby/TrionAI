"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AppBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "hero", label: "Home", external: false },
    { id: "about", label: "About", external: false },
    { id: "howtouse", label: "How to Use", external: false },
    { id: "tokenomics", label: "Tokenomics", external: false },
    { id: "roadmap", label: "Roadmap", external: false },
  ];

  // Improved scroll detection with Intersection Observer
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Adjust margins for better detection
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (menuItems.some((item) => item.id === sectionId)) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Fallback scroll detection
    const handleScrollFallback = () => {
      setIsScrolled(window.scrollY > 50);

      // Fallback active section detection
      const sections = menuItems.map((item) => item.id);
      let currentSection = "hero";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with some tolerance)
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollFallback);

    // Initial check
    handleScrollFallback();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollFallback);
      observer.disconnect();
    };
  }, []);

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
          // Offset for fixed header
          const offsetTop = targetElement.offsetTop - 100;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
    }
    setMobileMenuOpen(false);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
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

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const menuItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full text-white z-50 p-4"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.nav
        className={`container mx-auto flex items-center max-w-6xl justify-between py-4 px-6 transition-all duration-300 ${
          isScrolled
            ? "bg-[#16232a]/95 backdrop-blur-xl border border-[#18aaea]/40 shadow-2xl shadow-[#18aaea]/20"
            : "bg-[#16232a]/60 backdrop-blur-lg border border-[#18aaea]/25"
        } rounded-2xl`}
        animate={{
          scale: isScrolled ? 0.98 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Enhanced Logo */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="relative"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#18aaea] to-[#16232a] rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="/assets/images/Logo.png"
                alt="Trion AI"
                width={32}
                height={32}
                className="relative rounded-full border-2 border-[#18aaea]/50"
                priority
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-[#18aaea] bg-clip-text text-transparent">
                Trion AI
              </span>
              <span className="text-xs text-[#18aaea]/70 -mt-1">
                Next-Gen AI
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Enhanced Desktop Navigation */}
        <ul className="hidden md:flex gap-6 items-center">
          {menuItems.map((item, index) => (
            <li key={item.id}>
              <motion.button
                onClick={() => handleNavigation(item.id, item.external)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-[#18aaea]"
                    : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#18aaea]/20 to-[#16232a]/20 rounded-lg border border-[#18aaea]/30"
                    layoutId="activeBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 font-medium text-sm">
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-2 h-2 bg-[#18aaea] rounded-full"
                    style={{ x: "-50%" }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  />
                )}
              </motion.button>
            </li>
          ))}
        </ul>

        {/* Enhanced CTA Button */}
        <div className="hidden md:block">
          <motion.button
            className="group relative px-6 py-3 bg-gradient-to-r from-[#18aaea] via-[#18aaea] to-[#16232a] rounded-full font-semibold overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(24, 170, 234, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#16232a] via-[#18aaea] to-[#18aaea] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              $BALLON
            </span>
          </motion.button>
        </div>

        {/* Enhanced Hamburger Menu */}
        <motion.button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-[#18aaea]/10 transition-colors duration-200"
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="w-6 h-6 flex flex-col justify-center items-center gap-1"
            animate={isMobileMenuOpen ? "open" : "closed"}
          >
            <motion.span
              className="block w-6 h-0.5 bg-white rounded-full"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-white rounded-full"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-white rounded-full"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.button>
      </motion.nav>

      {/* Enhanced Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-2 mx-2"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="bg-[#16232a]/95 backdrop-blur-xl border border-[#18aaea]/40 rounded-2xl shadow-2xl shadow-[#18aaea]/20 overflow-hidden">
              <ul className="flex flex-col py-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    variants={menuItemVariants}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => handleNavigation(item.id, item.external)}
                      className={`w-full text-left px-6 py-3 transition-all duration-200 ${
                        activeSection === item.id
                          ? "text-[#18aaea] bg-[#18aaea]/10 border-l-4 border-[#18aaea]"
                          : "text-gray-300 hover:text-white hover:bg-[#18aaea]/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            activeSection === item.id
                              ? "bg-[#18aaea]"
                              : "bg-gray-500"
                          }`}
                        />
                        <span className="font-medium">{item.label}</span>
                      </div>
                    </button>
                  </motion.li>
                ))}

                {/* Mobile CTA Button */}
                <motion.li
                  className="px-6 pt-4 pb-2"
                  variants={menuItemVariants}
                >
                  <motion.button
                    className="w-full py-3 bg-gradient-to-r from-[#18aaea] via-[#18aaea] to-[#16232a] rounded-full font-semibold text-white"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      $BALLON
                    </span>
                  </motion.button>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Debug Info (Remove in production) */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-4 right-4 bg-black/50 text-white p-2 rounded text-xs">
          Active: {activeSection}
        </div>
      )}
    </motion.header>
  );
}
