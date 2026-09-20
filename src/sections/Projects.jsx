import { useEffect, useRef } from "react";

import { motion } from "framer-motion";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Production Readiness Scanner",
    type: "Featured · SaaS",
    description:
      "A production engineering platform that analyzes applications for security, performance, scalability and reliability risks.",
    tags: ["React", "Next.js", "Prisma", "PostgreSQL"],
    image: "/projects/project-1.png",
  },

  {
    number: "02",
    title: "Project Two",
    type: "Web Experience",
    description:
      "A modern web experience focused on smooth interactions and a polished user experience.",
    tags: ["React", "JavaScript", "GSAP"],
    image: "/projects/project-2.png",
  },

  {
    number: "03",
    title: "Project Three",
    type: "Product",
    description:
      "A product concept built with a focus on simplicity, performance and scalable architecture.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/projects/project-3.png",
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || !cards.length) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        if (index === 0) return;

        gsap.fromTo(
          card,
          {
            y: 55,
          },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              end: "top 48%",
              scrub: 1,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative px-6 py-24 text-white md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 md:mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-7 bg-violet-400/60" />

            <p className="text-[9px] uppercase tracking-[0.4em] text-violet-400">
              Selected work
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
            <h2 className="text-4xl font-semibold leading-none tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Things I've{" "}
              <span className="text-white/25">built.</span>
            </h2>

            <p className="max-w-xs text-xs leading-6 text-white/25 md:pb-1">
              A few things I've built while learning, experimenting and
              creating.
            </p>
          </div>
        </motion.div>

        {/* PROJECT STACK */}

        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              cardRef={(element) => {
                cardsRef.current[index] = element;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, cardRef }) {
  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`sticky top-16 sm:top-20 lg:top-24 ${
        index === 0 ? "z-10" : index === 1 ? "z-20" : "z-30"
      }`}
    >
      <div
        className={`overflow-hidden rounded-3xl border bg-[#08080d]/95 backdrop-blur-xl ${
          index === 0
            ? "border-violet-400/20 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
            : "border-white/[0.08] shadow-[0_15px_50px_rgba(0,0,0,0.25)]"
        }`}
      >
        <div className="grid items-center gap-6 p-4 sm:gap-7 sm:p-5 md:grid-cols-[1.2fr_0.8fr] md:gap-10 md:p-7 lg:gap-12">

          {/* PREVIEW */}

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025]">
            {index === 0 && (
              <div className="absolute left-4 top-4 z-10 rounded-full border border-violet-400/20 bg-[#08080d]/75 px-3 py-1.5 backdrop-blur-md sm:left-5 sm:top-5">
                <span className="text-[8px] uppercase tracking-[0.3em] text-violet-300">
                  Featured
                </span>
              </div>
            )}

            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading={index === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/[0.02]" />
          </div>

          {/* CONTENT */}

          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[9px] uppercase tracking-[0.3em] text-violet-400">
                {project.type}
              </p>

              <span className="font-mono text-[9px] text-white/15">
                {project.number}
              </span>
            </div>

            <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl md:mt-4 md:text-4xl">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/35 sm:mt-4">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[8px] text-white/35"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-5 sm:mt-7 sm:gap-6">
              <a
                href="#"
                className="text-[9px] uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:text-violet-400"
              >
                Live Demo ↗
              </a>

              <a
                href="#"
                className="text-[9px] uppercase tracking-[0.25em] text-white/30 transition-colors duration-300 hover:text-white"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default Projects;