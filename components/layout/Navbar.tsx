// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { BoltIcon } from "@/components/ui/Icons";

interface NavbarProps {
  /** Show full nav links + CTA (landing page) or minimal logo only (form/dashboard) */
  variant?: "full" | "minimal";
}

export default function Navbar({ variant = "full" }: NavbarProps) {
  return (
    <nav className="relative z-20 flex items-center justify-between px-8 md:px-12 py-[18px] border-b border-navy-400">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 select-none">
        <BoltIcon />
        <span className="text-white font-extrabold text-[18px] tracking-[0.08em]">
          GENESIS
        </span>
      </Link>

      {variant === "full" && (
        <>
          {/* Nav links */}
          <div className="hidden md:flex items-center gap-9">
            {["Fitur", "Cara Kerja", "Impact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-label text-[14px] hover:text-white transition-colors duration-150"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/input"
            className="bg-cyan text-navy-900 px-[22px] py-[10px] rounded-lg font-bold text-[14px]
                       hover:bg-cyan-400 transition-colors duration-150"
          >
            Cek Kelayakan
          </Link>
        </>
      )}
    </nav>
  );
}
