import { useEffect } from "react";
import Lenis from "lenis";

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    window.__lenis = lenis;

    let animationFrame;

    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
}

export default SmoothScroll;