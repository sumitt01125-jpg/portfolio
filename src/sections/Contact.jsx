import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const socials = [
  {
    name: "GitHub",
    href: "#",
    icon: "https://cdn.simpleicons.org/github/ffffff",
  },

  {
    name: "LinkedIn",
    href: "#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
  },

  {
    name: "Instagram",
    href: "#",
    icon: "https://cdn.simpleicons.org/instagram/ffffff",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const isDesktop =
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 1024px)").matches;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message || sending || sent) {
      return;
    }

    setSending(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setSending(false);
      setSent(true);

      setTimeout(() => {
        setSent(false);
      }, 1800);
    }, 700);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28 text-white sm:py-32 md:px-12 md:py-40"
    >
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= CONTACT CONTENT ================= */}

        <div className="grid gap-16 sm:gap-20 md:grid-cols-[0.9fr_1.1fr] md:items-start md:gap-24">

          {/* LEFT */}

          <motion.div
            initial={isDesktop ? { opacity: 0, x: -30 } : false}
            whileInView={isDesktop ? { opacity: 1, x: 0 } : undefined}
            viewport={isDesktop ? { once: true, amount: 0.3 } : undefined}
            transition={isDesktop ? { duration: 0.8 } : undefined}
            className="pt-2 md:pl-10 md:pt-8"
          >
            <div className="mb-7 inline-flex rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-2 shadow-[0_0_25px_rgba(139,92,246,0.08)] backdrop-blur-xl sm:mb-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-violet-300/80">
                Contact me
              </span>
            </div>

            <h2 className="max-w-xl text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              Let's get
              <br />
              <span className="text-white/25">in touch.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/35 sm:mt-8 sm:text-base">
              Have an idea, opportunity, or just want to say hello?
              I'd love to hear from you.
            </p>

            <p className="mt-7 text-sm text-white/35 sm:mt-8">
              Or reach out directly at{" "}
              <a
                href="mailto:your@email.com"
                className="text-violet-400 transition-colors duration-300 hover:text-violet-300"
              >
                sumitkr2755@email.com
              </a>
            </p>

            {/* SOCIAL ICONS */}

            <div className="mt-10 flex items-center gap-4 sm:mt-14">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/[0.08] hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]"
                >
                  <img
                    src={social.icon}
                    alt=""
                    className="h-[17px] w-[17px] opacity-45 transition-all duration-300 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT FORM */}

          <motion.form
            initial={isDesktop ? { opacity: 0, y: 35 } : false}
            whileInView={isDesktop ? { opacity: 1, y: 0 } : undefined}
            viewport={isDesktop ? { once: true, amount: 0.25 } : undefined}
            transition={
              isDesktop ? { duration: 0.8, delay: 0.15 } : undefined
            }
            onSubmit={handleSubmit}
            className="group relative mt-0 w-full max-w-lg space-y-6 sm:mt-2 md:ml-auto md:mt-24"
          >

            {/* FORM GLOW */}

            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-violet-600/[0.04] opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />

            <Field
              label="Your name"
              placeholder="Enter your name..."
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              isDesktop={isDesktop}
            />

            <Field
              label="Email address"
              placeholder="Enter your email..."
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isDesktop={isDesktop}
            />

            {/* MESSAGE */}

            <div>
              <label className="mb-3 block text-[11.5px] text-violet-400">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me a little about your idea..."
                rows="5"
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-3.5 text-sm text-white outline-none backdrop-blur-xl transition-all duration-500 placeholder:text-white/20 focus:border-violet-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_35px_rgba(139,92,246,0.1)]"
              />
            </div>

            {/* SUBMIT */}

            <div className="flex flex-col items-start gap-5 pt-1 sm:flex-row sm:items-center sm:justify-between">

              <p className="max-w-xs text-[10px] leading-5 text-white/25">
                I'll get back to you as soon as possible.
              </p>

              <motion.button
                whileHover={!sending && !sent ? { scale: 1.06, rotate: -1 } : {}}
                whileTap={!sending && !sent ? { scale: 0.94 } : {}}
                type="submit"
                disabled={sending || sent}
                className={`group/button relative flex h-[50px] min-w-[165px] shrink-0 items-center justify-center overflow-hidden rounded-full p-[1px] shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-shadow duration-500 ${
                  sent
                    ? "shadow-[0_0_55px_rgba(139,92,246,0.45)]"
                    : "hover:shadow-[0_0_55px_rgba(139,92,246,0.45)]"
                }`}
              >

                {/* ROTATING BORDER */}

                {!sending && !sent && (
                  <span className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_70deg,#8b5cf6_110deg,#c084fc_150deg,#60a5fa_190deg,transparent_230deg,transparent_360deg)] lg:animate-[spin_4s_linear_infinite]" />
                )}

                {/* INNER BUTTON */}

                <span
                  className={`relative flex h-full w-full items-center justify-center overflow-hidden rounded-full px-6 text-xs font-medium text-white transition-all duration-500 ${
                    sent ? "bg-violet-500/20" : "bg-[#100c1d]"
                  }`}
                >

                  {/* LIGHT SWEEP */}

                  {!sending && !sent && (
                    <span className="pointer-events-none absolute -left-12 top-0 h-full w-8 rotate-12 bg-white/50 blur-md transition-all duration-700 group-hover/button:left-[125%]" />
                  )}

                  <AnimatePresence mode="wait">

                    {/* NORMAL */}

                    {!sending && !sent && (
                      <motion.span
                        key="normal"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 flex items-center gap-4"
                      >
                        <span>Send message</span>

                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/20 text-violet-300 transition-all duration-500 group-hover/button:translate-x-1 group-hover/button:bg-violet-400 group-hover/button:text-white group-hover/button:shadow-[0_0_18px_rgba(139,92,246,0.7)]">
                          →
                        </span>
                      </motion.span>
                    )}

                    {/* SENDING */}

                    {sending && (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative z-10 flex items-center gap-3"
                      >
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 0.75,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="h-4 w-4 rounded-full border-2 border-violet-300/20 border-t-violet-300"
                        />

                        <span>Sending</span>

                        <motion.span
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                          }}
                        >
                          ...
                        </motion.span>
                      </motion.span>
                    )}

                    {/* SUCCESS */}

                    {sent && (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative z-10 flex items-center gap-3"
                      >
                        <motion.span
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            duration: 0.4,
                            type: "spring",
                            stiffness: 400,
                            damping: 15,
                          }}
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-400 text-[12px] font-bold text-white shadow-[0_0_22px_rgba(167,139,250,0.75)]"
                        >
                          ✓
                        </motion.span>

                        <motion.span
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          Message sent
                        </motion.span>
                      </motion.span>
                    )}

                  </AnimatePresence>
                </span>
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* ================= PREMIUM ENDING ================= */}

        <motion.div
          initial={isDesktop ? { opacity: 0, y: 25 } : false}
          whileInView={isDesktop ? { opacity: 1, y: 0 } : undefined}
          viewport={isDesktop ? { once: true } : undefined}
          transition={isDesktop ? { duration: 0.8, delay: 0.2 } : undefined}
          className="mt-32 sm:mt-40 md:mt-52"
        >

          {/* TOP LINE */}

          <div className="relative h-px w-full overflow-hidden bg-white/[0.08]">
            <motion.div
              initial={isDesktop ? { x: "-100%" } : false}
              whileInView={isDesktop ? { x: "100%" } : undefined}
              viewport={isDesktop ? { once: true } : undefined}
              transition={isDesktop ? { duration: 1.8, ease: "easeInOut" } : undefined}
              className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-violet-400/70 to-transparent"
            />
          </div>

          {/* TOP LABEL */}

          <div className="mt-7 sm:mt-8">
            <p className="text-[9px] uppercase tracking-[0.35em] text-violet-300/55">
              Thanks for visiting
            </p>
          </div>

          {/* MAIN NAME */}

          <div className="relative mt-10 overflow-hidden sm:mt-12">

            <motion.h3
              initial={isDesktop ? { opacity: 0, y: 60 } : false}
              whileInView={isDesktop ? { opacity: 1, y: 0 } : undefined}
              viewport={isDesktop ? { once: true } : undefined}
              transition={
                isDesktop
                  ? {
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }
                  : undefined
              }
              className="select-none text-[18vw] font-semibold leading-[0.75] tracking-[-0.08em] text-white/[0.055] md:text-[14vw]"
            >
              SUMIT
              <span className="text-violet-400/30">.</span>
            </motion.h3>

            {/* FOREGROUND NAME */}

            <motion.div
              initial={isDesktop ? { opacity: 0 } : false}
              whileInView={isDesktop ? { opacity: 1 } : undefined}
              viewport={isDesktop ? { once: true } : undefined}
              transition={
                isDesktop ? { duration: 1, delay: 0.25 } : undefined
              }
              className="pointer-events-none absolute inset-0 flex items-center"
            >
              <span className="text-3xl font-medium tracking-[-0.04em] text-white/90 sm:text-4xl md:text-5xl">
                SUMIT<span className="text-violet-400">.</span>
              </span>
            </motion.div>
          </div>

          {/* BOTTOM BAR */}

          <div className="mt-8 flex flex-col gap-6 border-t border-white/[0.07] pt-7 sm:mt-10 sm:gap-7 md:flex-row md:items-center md:justify-between">

            {/* COPYRIGHT */}

            <p className="text-[9px] uppercase tracking-[0.3em] text-violet-300/50">
              © 2026 Sumit Kumar
            </p>

            {/* SOCIAL ICONS */}

            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="group flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/35 hover:bg-violet-500/[0.08]"
                >
                  <img
                    src={social.icon}
                    alt=""
                    className="h-3.5 w-3.5 opacity-35 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>

            {/* AVAILABILITY */}

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]" />

              <span className="text-[9px] uppercase tracking-[0.25em] text-violet-300/50">
                Available for opportunities
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SUBTLE LOCAL ACCENT */}

      <div className="pointer-events-none absolute bottom-[-250px] left-1/2 hidden h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/[0.025] blur-[150px] lg:block" />
    </section>
  );
}

function Field({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
  isDesktop,
}) {
  return (
    <motion.div
      initial={isDesktop ? { opacity: 0, x: 15 } : false}
      whileInView={isDesktop ? { opacity: 1, x: 0 } : undefined}
      viewport={isDesktop ? { once: true } : undefined}
      transition={isDesktop ? { duration: 0.5 } : undefined}
    >
      <label className="mb-3 block text-[11.5px] text-violet-400">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-full border border-white/10 bg-white/[0.035] px-5 py-3.5 text-sm text-white outline-none backdrop-blur-xl transition-all duration-500 placeholder:text-white/20 focus:border-violet-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_35px_rgba(139,92,246,0.1)]"
      />
    </motion.div>
  );
}

export default Contact;