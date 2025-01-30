"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { formatDate, truncateText } from "@/lib/utils"

interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  categories: string[]
  tags: string[]
  excerpt: string
  image?: string
  readingTime: string
}

export function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts")
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error("Error fetching posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-[#1C3B31] rounded-lg p-6 animate-pulse"
          >
            <div className="h-48 w-full bg-[#2A4C40] mb-4 rounded" />
            <div className="h-6 w-3/4 bg-[#2A4C40] mb-4 rounded" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-[#2A4C40] rounded" />
              <div className="h-4 w-full bg-[#2A4C40] rounded" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="block group"
        >
          <article className="bg-[#1C3B31] rounded-lg overflow-hidden">
            {post.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-[#A3B8B0] mb-2">
                <span>{post.readingTime}</span>
                <span>•</span>
                <span>{formatDate(post.date)}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#8CC63F] transition-colors">
                {post.title}
              </h3>
              <p className="text-[#A3B8B0] text-[11px] leading-relaxed mb-4">
                {truncateText(post.excerpt, 120)}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[#8CC63F] text-sm font-medium">
                  Read More »
                </span>
                <span className="text-[#A3B8B0] text-sm">
                  By {post.author}
                </span>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
} 