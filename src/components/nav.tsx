"use client"

import Link from "next/link"
import { Home } from "lucide-react"

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#8CC63F]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-end h-[30px] gap-4">
          <Link
            href="/"
            className="text-[#1C3B31] hover:text-[#1C3B31]/70 transition-colors font-bold text-[10px] tracking-wider"
          >
            VERDATICA
          </Link>
          <Link
            href="/360"
            className="text-[#FF4A00] hover:text-[#1C3B31] transition-colors font-medium text-[10px] tracking-wider"
          >
            360°
          </Link>
          <Link
            href="/glossary"
            className="text-[#1C3B31] hover:text-[#FF4A00] transition-colors font-medium text-[10px] tracking-wider"
          >
            GLOSSARY
          </Link>
          <Link
            href="https://verdatica.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1C3B31] hover:text-[#FF4A00] transition-colors ml-2"
          >
            <Home className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </nav>
  )
} 