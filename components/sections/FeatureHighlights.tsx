import { LayoutTemplate, MousePointerClick, Rocket } from "lucide-react";

export default function FeatureHighlights() {
  return (
    <section className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
      <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Templates</p>
            <p className="mt-2 text-lg font-semibold text-white">Curated looks, zero effort</p>
          </div>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-amber-200" aria-hidden="true">
            <LayoutTemplate className="h-5 w-5" strokeWidth={1.6} />
          </span>
        </div>
        <p className="mt-4 text-sm text-zinc-300">
          Choose bold, editorial, or minimal layouts designed to stand out on any screen.
        </p>
        <div className="mt-auto pt-6 text-xs uppercase tracking-[0.3em] text-zinc-400">Layout system</div>
      </div>
      <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sky-200">Workflow</p>
            <p className="mt-2 text-lg font-semibold text-white">Drag, drop, publish</p>
          </div>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sky-200" aria-hidden="true">
            <MousePointerClick className="h-5 w-5" strokeWidth={1.6} />
          </span>
        </div>
        <p className="mt-4 text-sm text-zinc-300">
          Upload once, arrange blocks, and publish with a click. No designer needed.
        </p>
        <div className="mt-auto pt-6 text-xs uppercase tracking-[0.3em] text-zinc-400">One-click publish</div>
      </div>
      <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">Growth</p>
            <p className="mt-2 text-lg font-semibold text-white">Shareable and fast</p>
          </div>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-emerald-200" aria-hidden="true">
            <Rocket className="h-5 w-5" strokeWidth={1.6} />
          </span>
        </div>
        <p className="mt-4 text-sm text-zinc-300">
          Built-in SEO, custom domains, and analytics to help your work get discovered.
        </p>
        <div className="mt-auto pt-6 text-xs uppercase tracking-[0.3em] text-zinc-400">Analytics ready</div>
      </div>
    </section>
  );
}
