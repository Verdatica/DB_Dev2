import Link from "next/link"
import Image from "next/image"
import { HeroSection } from "@/components/hero-section"
import { BlogList } from "@/components/blog-list"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1C3B31]">
      <HeroSection />
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <BlogList />
          </div>
          <div className="lg:col-span-1">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#8CC63F] mb-4">360º vision</h2>
              <div className="text-[#A3B8B0] space-y-4">
                <p>
                  "The amount of plastic produced in a year is roughly the same as the entire weight of humanity."
                </p>
                <p>
                  There just aren't enough elephants in the world for a comparison, so we'll stick with 7 billion humans for now. The truth is, if we want to achieve a sustainable future, we've a long way to go. But there are optimistic signs everywhere, green shoots that will change this planet for the better. Join us as we delve deep into a brave, new postplastic world.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#8CC63F] mb-4">Latest</h3>
              <div className="space-y-4">
                <Link href="/blog/cirqulor-20in30-podcast" className="block group">
                  <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/podcast-cover.jpg"
                      alt="CirQulor 20in30 Podcast"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-white group-hover:text-[#8CC63F] transition-colors block font-medium">
                    CirQulor 20in30 – Podcast
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 