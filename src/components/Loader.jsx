import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function DrawPath({ d, delay = 0, duration = 0.5, width = 6 }) {
  const [visible, setVisible] = useState(delay === 0);

  useEffect(() => {
    if (delay === 0) return;
    const t = setTimeout(() => setVisible(true), delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return null;

  return (
    <motion.path
      d={d}
      pathLength={1}
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-violet-400"
      initial={{ pathLength: 0.0001 }}
      animate={{ pathLength: 1 }}
      transition={{ duration, ease: "easeInOut" }}
    />
  );
}

function Loader({ onComplete }) {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComplete(true);
      // fade-out (0.45s) complete hone ke baad parent ko batao
      setTimeout(() => onComplete?.(), 450);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: complete ? 0 : 1 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#020207] transition-[pointer-events] ${
        complete ? "pointer-events-none" : ""
      }`}
    >
      <div className="relative w-[72%] max-w-[520px]">
        <div className="pointer-events-none absolute inset-0 rounded-full bg-violet-500/[0.08] blur-[90px]" />

        <svg viewBox="0 0 600 220" className="relative w-full" fill="none">
          <DrawPath
            d="M245 82 C218 58 174 66 171 94 C168 119 211 116 229 130 C248 145 232 171 204 174 C180 177 158 164 151 148"
            duration={0.45}
          />
          <DrawPath
            d="M245 112 C238 137 234 163 247 169 C261 175 276 143 283 119 C276 144 274 166 286 169 C298 172 310 150 318 131"
            delay={0.28}
            duration={0.38}
          />
          <DrawPath
            d="M312 168 C321 143 330 117 338 115 C347 113 339 146 337 158 C348 134 358 114 367 116 C377 118 367 147 366 157 C378 137 390 119 398 122 C407 126 397 157 405 166"
            delay={0.52}
            duration={0.48}
          />
          <DrawPath
            d="M414 132 C409 149 406 165 414 168 C422 171 431 158 437 147"
            delay={0.9}
            duration={0.28}
          />
          <DrawPath
            d="M455 94 C449 118 442 151 449 163 C456 175 470 162 478 150 M440 122 C456 120 474 119 488 120"
            delay={1.02}
            duration={0.38}
          />

          <motion.circle
            cx="426"
            cy="113"
            r="3"
            className="fill-violet-300"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15, delay: 1.35 }}
          />

          <DrawPath
            d="M153 176 C235 202 350 198 438 171 C492 155 535 129 551 96"
            delay={1.35}
            duration={0.5}
            width={3}
          />
        </svg>
      </div>
    </motion.div>
  );
}

export default Loader;