function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#030308]">
      {/* MAIN AURORA */}
      <div className="absolute left-1/2 top-[-25%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/[0.09] blur-[140px]" />

      {/* LEFT ATMOSPHERE */}
      <div className="absolute -left-[20%] top-[18%] h-[600px] w-[600px] rounded-full bg-indigo-600/[0.055] blur-[150px]" />

      {/* RIGHT ATMOSPHERE */}
      <div className="absolute -right-[20%] top-[42%] h-[650px] w-[650px] rounded-full bg-violet-500/[0.055] blur-[160px]" />

      {/* LOWER GLOW */}
      <div className="absolute bottom-[-25%] left-[25%] h-[600px] w-[700px] rounded-full bg-purple-700/[0.06] blur-[160px]" />

      {/* VERY SUBTLE CENTER LIGHT */}
      <div className="absolute left-1/2 top-[45%] h-[280px] w-[500px] -translate-x-1/2 rounded-full bg-violet-400/[0.025] blur-[120px]" />

      {/* VIGNETTE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,3,8,0.2)_55%,rgba(3,3,8,0.75)_100%)]" />
    </div>
  );
}

export default Background;