import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const navItems = ["About", "Skills", "Education", "Projects"];

function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean);

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 30);

      /* NAVBAR VISIBILITY */

      if (currentScrollY <= 20) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
        setMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      }

      lastScrollY = currentScrollY;

      /* ACTIVE SECTION */

      const position = currentScrollY + window.innerHeight * 0.35;
      let current = "about";

      sections.forEach((section) => {
        if (position >= section.offsetTop) {
          current = section.id;
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (event, id) => {
    event.preventDefault();

    const target = document.getElementById(id);

    if (!target) return;

    setMenuOpen(false);

    const lenis = window.__lenis;

    if (lenis) {
      lenis.scrollTo(target, {
        duration: 1.2,
        offset: 0,
      });

      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -100,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-1/2 top-4 z-50 w-[92%] max-w-5xl -translate-x-1/2 sm:top-5"
    >
      <div
        className={`relative rounded-full border px-2 py-2 backdrop-blur-2xl transition-all duration-500 sm:px-3 ${
          scrolled
            ? "border-white/15 bg-[#08080d]/75 shadow-2xl shadow-black/40"
            : "border-white/10 bg-white/[0.06]"
        }`}
      >
        {/* MAIN NAVBAR */}

        <div className="flex items-center justify-between">

          {/* LOGO */}

          <a
            href="#home"
            onClick={(event) => handleNavigation(event, "home")}
            className="group px-3 text-lg font-semibold tracking-tight text-white sm:px-4"
          >
            SUMIT
            <span className="text-violet-400 transition-colors duration-200 group-hover:text-violet-300">
              .
            </span>
          </a>

          {/* DESKTOP LINKS */}

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = active === id;

              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={(event) => handleNavigation(event, id)}
                  className="group relative rounded-full px-4 py-2 text-sm"
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full border border-violet-400/25 bg-violet-500/15 shadow-[0_0_20px_rgba(139,92,246,0.18)]"
                      transition={{
                        type: "spring",
                        stiffness: 1400,
                        damping: 70,
                        mass: 0.2,
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 transition-colors duration-150 ${
                      isActive
                        ? "text-white"
                        : "text-white/45 group-hover:text-white/90"
                    }`}
                  >
                    {item}
                  </span>
                </a>
              );
            })}
          </div>

          {/* DESKTOP CTA */}

          <motion.a
            href="#contact"
            onClick={(event) => handleNavigation(event, "contact")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group relative hidden overflow-hidden rounded-full border border-white/20 bg-white px-5 py-2 text-sm font-medium text-black md:block"
          >
            <span className="relative z-10">Let's Talk</span>

            <span className="absolute -left-10 top-0 h-full w-8 rotate-12 bg-white/70 blur-md transition-all duration-500 group-hover:left-[120%]" />
          </motion.a>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] md:hidden"
          >
            <div className="relative flex h-4 w-4 items-center justify-center">
              <motion.span
                animate={{
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 0 : -3,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute h-px w-4 rounded-full bg-white/80"
              />

              <motion.span
                animate={{
                  opacity: menuOpen ? 0 : 1,
                  scaleX: menuOpen ? 0 : 1,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="absolute h-px w-4 rounded-full bg-white/80"
              />

              <motion.span
                animate={{
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? 0 : 3,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute h-px w-4 rounded-full bg-white/80"
              />
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -5 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -5 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden md:hidden"
            >
              <div className="mx-2 mb-2 mt-3 border-t border-white/[0.08] pt-3">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => {
                    const id = item.toLowerCase();
                    const isActive = active === id;

                    return (
                      <a
                        key={item}
                        href={`#${id}`}
                        onClick={(event) => handleNavigation(event, id)}
                        className={`rounded-2xl px-4 py-3 text-sm transition-colors duration-200 ${
                          isActive
                            ? "bg-violet-500/10 text-white"
                            : "text-white/45 hover:bg-white/[0.04] hover:text-white"
                        }`}
                      >
                        {item}
                      </a>
                    );
                  })}

                  <a
                    href="#contact"
                    onClick={(event) => handleNavigation(event, "contact")}
                    className="mt-2 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-medium text-black"
                  >
                    <span>Let's Talk</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;