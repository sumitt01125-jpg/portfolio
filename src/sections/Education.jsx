import { useEffect, useRef } from "react";

import { motion } from "framer-motion";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    number: "01",
    period: "2020 — 2021",
    level: "Secondary Education",
    title: "Class 1 — 10th",
    institution: "Maan Singh High School",
    location: "Bahadurgarh, Haryana",
  },

  {
    number: "02",
    period: "2022 — 2023",
    level: "Higher Secondary",
    title: "Class 11 — 12th",
    institution: "GSSS Government School",
    location: "Bahadurgarh, Haryana",
  },

  {
    number: "03",
    period: "2023 — Present",
    level: "Undergraduate",
    title: "B.Tech",
    institution: "World College of Technology and Management",
    location: "Gurugram, Haryana",
  },
];

function Education() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const nodesRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    const nodes = nodesRef.current.filter(Boolean);

    if (!section || !line) return;

    const ctx = gsap.context(() => {

      /* Timeline progress */

      gsap.fromTo(
        line,
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 55%",
            end: "bottom 65%",
            scrub: 1,
          },
        }
      );

      /* Node activation */

      nodes.forEach((node) => {
        gsap.to(node, {
          scale: 1.12,
          boxShadow: "0 0 28px rgba(139,92,246,0.65)",
          borderColor: "rgba(167,139,250,0.75)",
          scrollTrigger: {
            trigger: node,
            start: "top 62%",
            end: "top 42%",
            scrub: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative overflow-hidden px-6 py-24 text-white sm:py-28 md:px-12 md:py-32"
    >
      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.035] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 sm:mb-20 md:mb-24 md:pl-10"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-400/60" />

            <p className="text-[9px] uppercase tracking-[0.4em] text-violet-400">
              Education
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl font-semibold leading-none tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Learning by{" "}
              <span className="text-white/25">building.</span>
            </h2>

            <p className="max-w-sm text-xs leading-6 text-white/30 md:pb-1">
              The milestones that shaped my journey into technology.
            </p>
          </div>
        </motion.div>

        {/* TIMELINE */}

        <div className="relative">

          {/* BASE LINE */}

          <div className="absolute left-[18px] top-0 h-full w-px bg-white/[0.08] md:left-1/2 md:-translate-x-1/2" />

          {/* ACTIVE LINE */}

          <div
            ref={lineRef}
            className="absolute left-[18px] top-0 h-full w-px origin-top bg-gradient-to-b from-violet-400 via-violet-500 to-violet-400/20 shadow-[0_0_14px_rgba(139,92,246,0.45)] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {education.map((item, index) => (
              <TimelineItem
                key={item.number}
                item={item}
                index={index}
                nodeRef={(element) => {
                  nodesRef.current[index] = element;
                }}
              />
            ))}
          </div>
        </div>

        {/* END */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />

          <p className="text-[8px] uppercase tracking-[0.35em] text-white/20">
            Still learning · Still building
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index, nodeRef }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative min-h-[190px] sm:min-h-[210px]">

      {/* NODE */}

      <div
        ref={nodeRef}
        className="absolute left-[18px] top-7 z-20 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-violet-400/30 bg-[#07060d] text-[9px] font-medium text-violet-300 shadow-[0_0_12px_rgba(139,92,246,0.18)] transition-colors duration-300 md:left-1/2"
      >
        {item.number}
      </div>

      {/* CARD */}

      <motion.article
        initial={{
          opacity: 0,
          x: isLeft ? -45 : 45,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`ml-12 w-[calc(100%-3rem)] sm:w-auto md:ml-0 md:w-[40%] ${
          isLeft ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-white/[0.04] sm:p-6 md:p-7">

          {/* TOP META */}

          <div className="flex items-center justify-between gap-4">
            <p className="text-[9px] uppercase tracking-[0.3em] text-violet-400">
              {item.period}
            </p>

            <span className="text-[9px] font-mono text-white/15">
              {item.number}
            </span>
          </div>

          {/* LEVEL */}

          <p className="mt-4 text-xs text-white/35 sm:mt-5">
            {item.level}
          </p>

          {/* TITLE */}

          <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-3xl">
            {item.title}
          </h3>

          {/* INSTITUTION */}

          <p className="mt-3 text-sm leading-6 text-white/55">
            {item.institution}
          </p>

          {/* LOCATION */}

          <div className="mt-4 flex items-center gap-2 sm:mt-5">
            <span className="h-1 w-1 rounded-full bg-violet-400/70" />

            <span className="text-[9px] uppercase tracking-[0.18em] text-white/25 sm:text-[10px] sm:tracking-[0.2em]">
              {item.location}
            </span>
          </div>

          {/* BOTTOM LINE */}

          <div className="mt-5 h-px w-full bg-white/[0.07] sm:mt-6">
            <div className="h-px w-0 bg-violet-400 transition-all duration-700 group-hover:w-full" />
          </div>

          {/* CARD SHINE */}

          <div className="pointer-events-none absolute -left-24 top-0 h-full w-16 rotate-[15deg] bg-violet-400/[0.06] blur-xl transition-all duration-1000 group-hover:left-[120%]" />
        </div>
      </motion.article>
    </div>
  );
}

export default Education;