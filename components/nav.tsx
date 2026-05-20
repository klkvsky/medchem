"use client";

import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const sections = [
  { id: "hero",      href: "/#hero",      label: "о компании", darkBg: true  },
  { id: "services",  href: "/#services",  label: "Услуги",     darkBg: false },
  { id: "process",   href: "/#services",  label: "Услуги",     darkBg: true  },
  { id: "portfolio", href: "/#portfolio", label: "портфолио",  darkBg: false },
  { id: "xantir",    href: "/#xantir",    label: "Xantir",     darkBg: false },
  { id: "team",      href: "/#team",      label: "команда",    darkBg: false },
  { id: "partners",  href: "/#partners",  label: "партнеры",   darkBg: false },
  { id: "contacts",  href: "/#contacts",  label: "Контакты",   darkBg: true  },
];

const uniqueSections = sections.filter(
  (s, i, arr) => arr.findIndex((x) => x.href === s.href) === i,
);

const itemVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0 },
};

export default function Nav() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    function update() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      let current = "hero";

      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrollY;
        if (scrollY >= top - windowHeight * 0.4) {
          current = id;
        }
      }

      setActiveId(current);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const isHero = activeId === "hero";
  const active = sections.find((s) => s.id === activeId);
  const textColor = active?.darkBg ? "text-[#FAFAFA]" : "text-burgundy";

  return (
    <nav className="fixed top-0 left-0 w-full z-100">
      <div className="relative w-full h-full flex p-2">
        <Image
          src={logo}
          width={147}
          height={24}
          alt="MedChem logo"
          className="absolute top-2 left-1/2 -translate-x-1/2 md:w-[88px] md:h-auto xl:w-45 xl:h-auto"
        />
        <div
          className={`flex flex-col text-nav-link uppercase font-aeonik-mono mr-auto transition-colors duration-300 ${textColor}`}
        >
          <AnimatePresence mode="wait">
            {isHero ? (
              <motion.div
                key="full"
                className="flex flex-col"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
                  },
                  hidden: {
                    transition: { staggerChildren: 0.04, staggerDirection: -1 },
                  },
                }}
              >
                {uniqueSections.map(({ href, label }) => (
                  <motion.div
                    key={href}
                    variants={itemVariants}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <Link href={href}>{label}</Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              active && (
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Link href={active.href}>{active.label}</Link>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
