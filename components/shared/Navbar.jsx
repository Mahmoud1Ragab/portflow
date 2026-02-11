"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const NAV_LINKS = [
  { href: "#howitworks", label: "How it works" },
  { href: "#sections", label: "Sections" },
  { href: "#examples", label: "Examples" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  return (
    <header
      className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-5xl backdrop-blur-xl rounded-full border border-white/10 bg-white/10 px-3 py-2 sm:px-5 sm:py-3 text-white"
    >
      <div className="flex items-center justify-between gap-3 sm:gap-6">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-1 sm:gap-2 flex-shrink-0"
        >
          <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/20 text-xs sm:text-sm font-semibold text-white border border-white/20">
            PF
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm sm:text-base font-semibold tracking-tight">
              Portflow
            </span>
            <span className="text-xs text-white/60">Build pro portfolios</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2 text-xs sm:text-sm">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-white/80 hover:text-white transition duration-200"
            >
              {item.label}
            </Link>
          ))}
          {/* CTA Button */}
          <Button
            asChild
            className="ml-auto lg:ml-0 text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full"
          >
            <Link href="#login">Log in</Link>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/95 text-white w-72 sm:w-80 rounded-l-2xl border-l border-white/10"
            >
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-3 text-sm">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full"
                >
                  <Link href="#login">Log in</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
