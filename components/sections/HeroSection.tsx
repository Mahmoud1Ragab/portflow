export default function HeroSection() {
  return (
    <main className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div className="space-y-7">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.25em] text-zinc-200">
          Launch-ready portfolio
        </div>
        <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          <span className="text-amber-400">Portflow</span> turns your work into a brand, fast.
        </h1>
        <p className="max-w-xl text-base text-zinc-300 sm:text-lg">
          Build a premium portfolio with zero code. Pick a style, drop your work, and ship a site that looks handcrafted.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <button className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
            Start free
          </button>
          <button className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10">
            See templates
          </button>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-zinc-300">
          <div>
            <p className="text-2xl font-semibold text-white">1.2k+</p>
            <p className="text-zinc-400">portfolios shipped</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">12 min</p>
            <p className="text-zinc-400">average setup</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">4.9/5</p>
            <p className="text-zinc-400">creator rating</p>
          </div>
        </div>
      </div>
    </main>
  );
}
