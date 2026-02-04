import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-2000 overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-cover bg-center bg-[url('/images/bg1.jpg')]" />
      <div className="absolute inset-0 -z-10 bg-[url('/images/bg3.png')] opacity-30" />

      <Navbar />

      <div className="relative mx-auto max-w-[100vw] px-4 pt-25 pb-16 sm:px-6 text-white">
        <h1 className="text-center lg:text-left text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight">
          <span className="text-amber-500">Portflow</span>,
          <br className="hidden sm:block" />
          Build your portfolio without code
        </h1>
      </div>
    </div>
  );
}
