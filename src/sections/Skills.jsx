import { useEffect, useRef } from "react";

import { motion } from "framer-motion";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },

  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },

  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },

  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },

  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },

  {
    name: "Vite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },

  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },

  {
    name: "GSAP",
    custom: true,
  },

  {
    name: "Lenis",
    short: "LN",
  },

  {
    name: "Framer Motion",
    short: "FM",
  },

  {
    name: "Three.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",
  },

  {
    name: "React Three Fiber",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },

  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },

  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },

  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },

  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  },

  {
    name: "BullMQ",
    short: "BQ",
  },
];

function Skills() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const items = itemsRef.current.filter(Boolean);

    if (!section || !items.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 30,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.to(".skills-orb", {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden px-6 py-24 text-white md:px-12 md:py-28"
    >
      {/* AMBIENT GLOW */}

      <div className="skills-orb pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.055] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="md:pl-10"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-7 bg-violet-400/70" />

            <p className="text-[9px] uppercase tracking-[0.38em] text-violet-400">
              Tech stack
            </p>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
            <h2 className="text-4xl font-semibold leading-none tracking-[-0.04em] md:text-5xl">
              What I <span className="text-white/25">build with.</span>
            </h2>

            <p className="max-w-sm text-xs leading-6 text-white/30 md:pb-1">
              Technologies I use to create modern, interactive and scalable
              experiences.
            </p>
          </div>
        </motion.div>

        {/* SKILLS */}

        <div className="mx-auto mt-12 max-w-6xl sm:mt-14 md:mt-16">

          {/* MOBILE / TABLET — 6 / 5 / 3 / 2 */}

          <div className="flex flex-col items-center gap-7 sm:gap-8 lg:hidden">

            {/* ROW 1 — 6 */}

            <div className="flex w-fit flex-nowrap justify-center gap-x-2 sm:gap-x-3">
              {skills.slice(0, 6).map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  itemsRef={itemsRef}
                />
              ))}
            </div>

            {/* ROW 2 — 5 */}

            <div className="flex w-fit flex-nowrap justify-center gap-x-2 sm:gap-x-3">
              {skills.slice(6, 11).map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index + 6}
                  itemsRef={itemsRef}
                />
              ))}
            </div>

            {/* ROW 3 — 3 */}

            <div className="flex w-fit flex-nowrap justify-center gap-x-2 sm:gap-x-3">
              {skills.slice(11, 14).map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index + 11}
                  itemsRef={itemsRef}
                />
              ))}
            </div>

            {/* ROW 4 — 2 */}

            <div className="flex w-fit flex-nowrap justify-center gap-x-2 sm:gap-x-3">
              {skills.slice(14, 16).map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index + 14}
                  itemsRef={itemsRef}
                />
              ))}
            </div>
          </div>

          {/* DESKTOP — ORIGINAL 8 / 6 / 3 */}

          <div className="hidden flex-col items-center gap-7 sm:gap-8 lg:flex">

            {/* ROW 1 — 8 */}

            <div className="flex w-full flex-nowrap justify-center gap-x-5">
              {skills.slice(0, 8).map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  itemsRef={itemsRef}
                />
              ))}
            </div>

            {/* ROW 2 — 6 */}

            <div className="flex w-full flex-nowrap justify-center gap-x-5">
              {skills.slice(8, 14).map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index + 8}
                  itemsRef={itemsRef}
                />
              ))}
            </div>

            {/* ROW 3 — 3 */}

            <div className="flex w-full flex-nowrap justify-center gap-x-5">
              {skills.slice(14, 17).map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index + 14}
                  itemsRef={itemsRef}
                />
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="mt-10 flex items-center justify-center gap-3 sm:mt-12"
        >
          <span className="h-px w-6 bg-violet-400/30" />

          <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">
            Always evolving
          </span>

          <span className="h-px w-6 bg-violet-400/30" />
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index, itemsRef }) {
  return (
    <div
      ref={(element) => {
        itemsRef.current[index] = element;
      }}
      className="group flex w-[42px] min-w-0 cursor-default flex-col items-center gap-2 sm:w-[52px] lg:w-[76px] lg:shrink-0 lg:gap-3"
    >
      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          y: {
            duration: 3.2 + (index % 4) * 0.4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: index * 0.12,
          },
        }}
        className="flex flex-col items-center gap-2 lg:gap-3"
      >

        {/* CARD */}

        <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.025] transition-all duration-300 group-hover:scale-110 group-hover:border-violet-400 group-hover:bg-violet-500/[0.18] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5),0_0_50px_rgba(139,92,246,0.2)] sm:h-[52px] sm:w-[52px] lg:h-[68px] lg:w-[68px]">

          {/* INNER GLOW */}

          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-violet-400/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />

          {/* TOP SHINE */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(167,139,250,0.9)] transition-all duration-300 group-hover:w-10" />

          {/* ICON */}

          {skill.custom ? (
            <span className="relative z-10 text-[9px] font-black italic tracking-[-0.08em] text-white/60 transition-all duration-300 group-hover:scale-125 group-hover:text-[#88ce02] sm:text-[11px] lg:text-[14px]">
              GSAP
            </span>
          ) : skill.icon ? (
            <img
              src={skill.icon}
              alt={skill.name}
              loading="lazy"
              className="relative z-10 h-5 w-5 opacity-65 grayscale transition-all duration-300 group-hover:scale-125 group-hover:opacity-100 group-hover:grayscale-0 group-hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.65)] sm:h-6 sm:w-6 lg:h-7 lg:w-7"
            />
          ) : (
            <span className="relative z-10 text-[10px] font-semibold tracking-[-0.04em] text-white/45 transition-all duration-300 group-hover:scale-125 group-hover:text-violet-300 sm:text-xs lg:text-sm">
              {skill.short}
            </span>
          )}
        </div>

        {/* NAME */}

        <span className="max-w-full text-center text-[7px] leading-tight text-white/30 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(167,139,250,0.45)] sm:text-[8px] lg:whitespace-nowrap lg:text-[9px]">
          {skill.name}
        </span>
      </motion.div>
    </div>
  );
}

export default Skills;