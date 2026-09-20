import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden text-white">
      <div className="relative z-10 mx-auto min-h-screen max-w-7xl">

        {/* LEFT — NAME */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [-8, 8, -8],
          }}
          transition={{
            opacity: {
              duration: 0.8,
              ease: "easeOut",
            },
            x: {
              duration: 0.8,
              ease: "easeOut",
            },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute left-[7%] top-[17%] md:left-[6%] md:top-[25%] lg:left-[7%] lg:top-[31%]"
        >
          <p className="mb-1 text-lg text-violet-400 md:text-xl lg:text-2xl">
            Hello, I'm
          </p>

          <h1 className="text-[clamp(3rem,13vw,4rem)] font-bold leading-[0.9] tracking-tight md:text-6xl lg:text-7xl">
            Sumit
            <br />
            <span className="text-white/90">Kumar</span>
          </h1>
        </motion.div>

        {/* RIGHT — ROLE */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [-7, 7, -7],
          }}
          transition={{
            opacity: {
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            },
            x: {
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            },
            y: {
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute bottom-[14%] right-[7%] z-20 md:right-[6%] md:top-[25%] md:z-auto lg:right-[7%] lg:top-[31%]"
        >
          <p className="mb-1 text-[clamp(1rem,5vw,1.5rem)] text-violet-400 md:text-xl lg:text-2xl">
            Creative
          </p>

          <h2 className="text-[clamp(2.15rem,10vw,3rem)] font-bold leading-[0.9] md:text-5xl lg:text-6xl">
            <span className="text-violet-500">Developer</span>
            <br />
            <span>& Designer</span>
          </h2>
        </motion.div>

        {/* CENTER — HERO IMAGE */}

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute bottom-[31%] left-1/2 z-10 h-[34%] w-[78%] -translate-x-1/2 md:bottom-0 md:h-[58%] md:w-[58%] lg:h-[68%] lg:w-[42%]"
        >
          <div className="absolute inset-0 flex items-end justify-center">
            <img
              src="/hero.webp"
              alt="Sumit"
              className="h-full w-full object-contain object-bottom"
            />
          </div>
        </motion.div>

        {/* SOCIAL LINKS */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.6,
            ease: "easeOut",
          }}
          className="absolute bottom-8 left-[7%] z-30 flex flex-row gap-5 text-sm text-white/50 md:bottom-10 md:left-[6%] md:z-auto md:flex-col md:gap-4 lg:bottom-14 lg:left-[7%] lg:gap-5"
        >
          <a
            href="#"
            className="shrink-0 transition-colors duration-200 hover:text-white"
          >
            in
          </a>

          <a
            href="#"
            className="shrink-0 transition-colors duration-200 hover:text-white"
          >
            gh
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="shrink-0 transition-opacity duration-200 hover:opacity-100"
          >
            <img
              src="https://cdn.simpleicons.org/instagram"
              alt=""
              className="h-4 w-4 opacity-60"
            />
          </a>
        </motion.div>

        {/* RESUME */}

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.8,
            ease: "easeOut",
          }}
          href="#"
          className="absolute bottom-9 right-[7%] z-30 shrink-0 whitespace-nowrap text-[10px] font-medium uppercase tracking-widest text-violet-300 transition-colors duration-200 hover:text-white md:bottom-11 md:right-[6%] md:z-auto md:text-xs lg:bottom-16 lg:right-[8%]"
        >
          Resume ↗
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;