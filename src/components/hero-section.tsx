import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="relative bg-[#1C3B31] pt-[40px]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start justify-center py-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#8CC63F]">
            360° – a global view of the<br />
            biobased materials revolution.
          </h1>
        </div>
      </div>
    </div>
  )
} 