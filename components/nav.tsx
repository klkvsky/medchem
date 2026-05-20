"use client";

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
        <motion.svg
          width="147"
          height="24"
          viewBox="0 0 147 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="MedChem logo"
          className="absolute top-2 left-1/2 -translate-x-1/2 md:w-[88px] md:h-auto xl:w-45 xl:h-auto"
        >
          <motion.path
            d="M54.5903 21.1459C51.1784 21.1459 49.21 18.5254 49.21 15.3341C49.21 12.1427 51.1784 9.49622 54.5903 9.49622C58.0021 9.49622 59.9443 12.1427 59.9443 15.3341C59.9443 18.5254 58.0021 21.1459 54.5903 21.1459ZM54.5903 24C59.4194 24 63.0937 20.6789 63.0937 14.893V0H59.9443V11.3643L61.2566 11.3124C60.338 8.27676 57.556 6.64216 54.3278 6.64216C49.8661 6.64216 46.0605 10.1708 46.0605 15.3341C46.0605 20.4973 49.8661 24 54.5903 24ZM147 23.7146V13.4141C147 10.093 144.927 6.66811 140.491 6.66811C138.26 6.66811 136.554 7.65405 135.426 9.08108C134.35 7.65405 132.696 6.66811 130.439 6.66811C125.82 6.66811 123.747 10.067 123.747 13.3881V23.7146H126.896V13.3881C126.896 11.3643 128.077 9.52216 130.439 9.52216C132.801 9.52216 133.799 11.3903 133.799 13.4141V23.7146H136.948V13.3881C136.948 11.3643 138.129 9.52216 140.491 9.52216C142.853 9.52216 143.851 11.3903 143.851 13.4141V23.7146H147ZM27.2689 16.6054L42.9111 16.5016V13.8292H27.2426L27.2689 16.6054ZM42.8586 18.5254H39.5254C38.5281 20.2378 36.9272 21.1459 34.9325 21.1459C31.5206 21.1459 29.5522 18.5254 29.5522 15.3341C29.5522 12.1427 31.5206 9.49622 34.9325 9.49622C38.3444 9.49622 40.2866 12.1427 40.2866 15.3341L40.1816 16.5276H43.3573C43.4097 16.1384 43.436 15.7751 43.436 15.3081C43.436 10.4043 39.6304 6.64216 34.9325 6.64216C30.2084 6.64216 26.4028 10.4303 26.4028 15.3341C26.4028 20.2378 30.2084 24 34.9325 24C38.7381 24 41.73 21.5611 42.8586 18.5254ZM23.2533 23.7146V14.0368C23.2533 10.7157 21.18 7.29081 16.7445 7.29081C14.5137 7.29081 12.8077 8.27676 11.6792 9.70378C10.6031 8.27676 8.94965 7.29081 6.69256 7.29081C2.07338 7.29081 0 10.6897 0 14.0108V23.7146H3.14944V14.0108C3.14944 11.987 4.33048 10.1449 6.69256 10.1449C9.05463 10.1449 10.052 12.013 10.052 14.0368V23.7146H13.2014V14.0108C13.2014 11.987 14.3824 10.1449 16.7445 10.1449C19.1066 10.1449 20.1039 12.013 20.1039 14.0368V23.7146H23.2533ZM82.594 16.9168H79.3921C78.8672 19.4076 76.8988 21.1459 74.248 21.1459C70.8361 21.1459 68.8677 18.5254 68.8677 15.3341C68.8677 12.1427 70.8361 9.49622 74.248 9.49622C76.5838 9.49622 78.4997 10.8714 79.2608 13.1805H82.489C81.6229 9.23676 78.211 6.64216 74.248 6.64216C69.5238 6.64216 65.7183 10.1708 65.7183 15.3341C65.7183 20.4973 69.5238 24 74.248 24C78.2898 24 81.9379 21.2497 82.594 16.9168ZM104.561 16.6054L120.204 16.5016V13.8292H104.535L104.561 16.6054ZM120.151 18.5254H116.818C115.821 20.2378 114.22 21.1459 112.225 21.1459C108.813 21.1459 106.845 18.5254 106.845 15.3341C106.845 12.1427 108.813 9.49622 112.225 9.49622C115.637 9.49622 117.579 12.1427 117.579 15.3341L117.474 16.5276H120.65C120.702 16.1384 120.728 15.7751 120.728 15.3081C120.728 10.4043 116.923 6.64216 112.225 6.64216C107.501 6.64216 103.695 10.4303 103.695 15.3341C103.695 20.2378 107.501 24 112.225 24C116.031 24 119.022 21.5611 120.151 18.5254ZM88.368 23.7405V15.3341C88.368 12.1427 89.8377 9.49622 92.9347 9.49622C96.1103 9.49622 97.5276 12.1427 97.5276 15.3341V23.7405H100.677V15.3341C100.677 9.85946 97.4226 6.64216 93.1971 6.64216C90.2839 6.64216 87.9743 8.27676 87.0557 11.3124L88.368 11.3643V0H85.2185V23.7405H88.368Z"
            animate={{ fill: active?.darkBg ? "#FAFAFA" : "#411319" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.svg>
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
