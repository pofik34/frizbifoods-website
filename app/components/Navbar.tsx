"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "#lezzet", label: "Lezzet" },
  { href: "#surec", label: "Süreç" },
  { href: "#bayilik", label: "Bayilik" },
  { href: "#iletisim", label: "İletişim" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-orange-100/80 bg-white/85 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3 font-[var(--font-display)] text-2xl font-bold tracking-tight">
          <Image
            src="/images/original/logos-240x160.png"
            alt="FrizbiFoods logo"
            width={58}
            height={40}
            className="h-11 w-auto"
          />
          <span>
            <span className="text-red-600">frizbi</span>
            <span className="text-green-600">foods</span>
          </span>
        </a>
        <button
          type="button"
          className="rounded-full border border-orange-200 px-4 py-2 text-sm font-medium md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Menüyü aç veya kapat"
        >
          Menü
        </button>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-orange-600">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      {open && (
        <nav className="section-shell flex flex-col gap-3 pb-4 text-sm font-medium md:hidden">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl border border-orange-100 bg-white px-4 py-2"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
