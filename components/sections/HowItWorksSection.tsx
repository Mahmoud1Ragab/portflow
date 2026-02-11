export default function HowItWorksSection() {
  return (
    <section id="howitworks" className="relative">
      <div className="pointer-events-none absolute -left-8 -top-6 h-48 w-48 rounded-full border border-amber-400/30 bg-amber-400/10 blur-[2px]" />
      <div className="pointer-events-none absolute -right-12 top-40 h-64 w-64 rounded-full border border-sky-300/30 bg-sky-300/10 blur-[3px]" />
      <div className="pointer-events-none absolute left-24 -bottom-8 h-32 w-32 rounded-full border border-emerald-300/30 bg-emerald-300/10 blur-[1px]" />
      <div className="pointer-events-none absolute right-24 bottom-12 h-24 w-24 rotate-12 rounded-3xl border border-white/20 bg-white/5" />

      <div className="grid gap-6 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:items-stretch">
        <div className="relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-amber-400/10 blur-2xl" />
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300">How it works</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            Build a portfolio that feels custom in minutes.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-200/80">
            A tight, designer-first workflow with instant feedback. Everything snaps into place, then ships fast.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-zinc-300">
            <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1">No code</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Auto layout</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Instant publish</span>
          </div>
        </div>

        <div className="relative h-full min-h-[320px] rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-2xl">
          <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_35%,transparent_100%)]" />

          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Live preview</p>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">Auto-save</span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-amber-400/90" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Portfolio</p>
                <p className="text-lg font-semibold">Nour Elhady</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 w-5/6 rounded-full bg-white/70" />
              <div className="h-3 w-4/6 rounded-full bg-white/45" />
              <div className="h-3 w-3/6 rounded-full bg-white/30" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-xs text-zinc-400">Projects</p>
                <p className="text-lg font-semibold">24</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-xs text-zinc-400">Clients</p>
                <p className="text-lg font-semibold">18</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-xs text-zinc-400">Awards</p>
                <p className="text-lg font-semibold">6</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid h-full gap-4 sm:grid-cols-2">
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Step 01</p>
              <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-1 text-xs text-amber-200">Theme</span>
            </div>
            <h3 className="mt-3 text-base font-semibold">Pick a layout kit</h3>
            <p className="mt-2 text-sm text-zinc-300">
              Choose a visual direction, then swap fonts, colors, and spacing on the fly.
            </p>
          </div>
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-200">Step 02</p>
              <span className="rounded-full border border-sky-300/40 bg-sky-300/10 px-2.5 py-1 text-xs text-sky-200">Content</span>
            </div>
            <h3 className="mt-3 text-base font-semibold">Drop your best work</h3>
            <p className="mt-2 text-sm text-zinc-300">
              Import projects, write short case notes, and auto-crop images instantly.
            </p>
          </div>
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Step 03</p>
              <span className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-2.5 py-1 text-xs text-emerald-200">Polish</span>
            </div>
            <h3 className="mt-3 text-base font-semibold">Refine the details</h3>
            <p className="mt-2 text-sm text-zinc-300">
              Add micro-interactions, custom sections, and SEO previews in seconds.
            </p>
          </div>
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-purple-200">Step 04</p>
              <span className="rounded-full border border-purple-300/40 bg-purple-300/10 px-2.5 py-1 text-xs text-purple-200">Launch</span>
            </div>
            <h3 className="mt-3 text-base font-semibold">Publish and share</h3>
            <p className="mt-2 text-sm text-zinc-300">
              Connect a domain, go live, and keep track of visits with lightweight analytics.
            </p>
          </div>
        </div>

        <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">What you get</p>
          <ul className="mt-4 space-y-3 text-sm text-zinc-300">
            <li>Auto-optimized images and fonts</li>
            <li>Global CDN hosting included</li>
            <li>Custom domain setup in minutes</li>
            <li>Export to PDF and share privately</li>
          </ul>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-zinc-400">Setup time</p>
              <p className="text-lg font-semibold">12 min</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-zinc-400">Avg. views</p>
              <p className="text-lg font-semibold">2.4k</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
