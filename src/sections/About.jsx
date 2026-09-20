import { motion } from "framer-motion";

const stats = [
  {
    value: "03+",
    label: "Projects",
  },

  {
    value: "02+",
    label: "Years Learning",
  },

  {
    value: "∞",
    label: "Curiosity",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 text-white sm:py-28 md:px-12 md:py-40"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-16">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="md:pl-10"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-violet-400 md:mb-5 md:text-base">
            About me
          </p>

          <h2 className="text-4xl font-semibold leading-[1] tracking-tight sm:text-5xl md:text-6xl">
            A little
            <br />
            <span className="mt-2 inline-block text-3xl font-medium text-white/25 sm:text-4xl md:mt-3 md:text-5xl">
              about me.
            </span>
          </h2>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="max-w-2xl"
        >
          <p className="text-lg leading-8 text-white/75 sm:text-xl sm:leading-9 md:text-2xl">
            I'm a{" "}
            <span className="text-violet-400">developer</span> who enjoys
            turning ideas into{" "}
            <span className="text-white">modern digital experiences</span>{" "}
            and useful products.
          </p>

          <p className="mt-6 text-sm leading-7 text-white/40 sm:text-base sm:leading-8 md:mt-7">
            I'm currently focused on building my skills in software
            development, creating SaaS products and understanding how
            real-world applications are designed, built and scaled.
          </p>

          <p className="mt-6 text-sm leading-7 text-white/40 sm:text-base sm:leading-8 md:mt-7">
            I care about clean interfaces, thoughtful user experiences
            and writing software that is reliable, maintainable and
            ready for production.
          </p>

          {/* STATS */}

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-7 sm:mt-12 sm:gap-8 sm:pt-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <p className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-[8px] uppercase tracking-[0.16em] text-white/30 sm:text-[10px] sm:tracking-[0.2em]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;