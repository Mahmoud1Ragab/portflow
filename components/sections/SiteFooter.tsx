export default function SiteFooter() {
  return (
    <footer className="relative z-20 border-t border-white/10 bg-black/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 text-sm text-zinc-300 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Portflow</p>
          <p className="mt-2 max-w-sm text-zinc-400">
            Turn your work into a portfolio that feels premium, fast.
          </p>
        </div>
        <div className="flex flex-wrap gap-6">
          <a className="transition hover:text-white" href="#">Templates</a>
          <a className="transition hover:text-white" href="#">Pricing</a>
          <a className="transition hover:text-white" href="#">Support</a>
          <a className="transition hover:text-white" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
