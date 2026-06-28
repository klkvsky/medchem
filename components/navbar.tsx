"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, stagger } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const currentSectionPlaceHolder = "О Компании";
  const placeholderSections = [
    "о компании",
    "Услуги",
    "портфолио",
    "Xantir",
    "команда",
    "партнеры",
    "Контакты",
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    open: {
      transition: { delayChildren: stagger(0.03, { startDelay: 0.1 }) },
    },
    closed: {
      transition: { delayChildren: stagger(0.01, { from: "last" }) },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { y: { stiffness: 1000, velocity: -100 } },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: { y: { stiffness: 1000 } },
    },
  };

  return (
    <div className="w-dvw h-dvh fixed top-0 left-0 z-100">
      <div className="flex flex-col w-full h-full gap-23 relative px-2 pt-5">
        <motion.div
          animate={{
            opacity: isOpen ? 1 : 0,
          }}
          className="bg-white/20 backdrop-blur-md absolute top-0 left-0 w-full h-full"
        />
        <div className="flex flex-row items-center justify-between w-full z-10">
          <button
            className="flex flex-row items-center gap-3"
            onClick={handleToggle}
          >
            <Image
              src="assets/icons/menu.svg"
              width={100}
              height={100}
              alt="logo"
              className="w-5 h-5"
            />
            <p className="text-h3 text-white font-aeonik-mono uppercase">
              {currentSectionPlaceHolder}
            </p>
          </button>
          {!isOpen ? (
            <motion.div>
              <Image
                src="logo.svg"
                width={100}
                height={100}
                alt="logo"
                className="w-auto h-6"
              />
            </motion.div>
          ) : (
            <motion.button
              onClick={handleToggle}
              className="h-6.25 w-6.25 flex items-center justify-center bg-[#E3E3E3] rounded-md"
            >
              <Image
                src="assets/icons/close.svg"
                width={100}
                height={100}
                alt="logo"
                className="w-1.5 h-1.5"
              />
            </motion.button>
          )}
        </div>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={navVariants}
          // animate={{
          //   clipPath: !isOpen ? "inset(0 0 100% 0)" : "inset(0 0 0 0)",
          // }}
          className="flex flex-col gap-2.5 z-10"
        >
          {placeholderSections.map((section) => (
            <motion.p
              initial={false}
              variants={itemVariants}
              key={section}
              className="text-h2 font-aeonik-mono uppercase text-white"
            >
              {section}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
