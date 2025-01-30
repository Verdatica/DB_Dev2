import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

export async function GET() {
  try {
    const postsDirectory = path.join(process.cwd(), "content/posts")
    const fileNames = fs.readdirSync(postsDirectory)

    const posts = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "")
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data } = matter(fileContents)

        return {
          slug,
          title: data.title,
          date: data.date,
          excerpt: data.excerpt || "",
        }
      })
      .sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any))

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error reading blog posts:", error)
    return NextResponse.json([], { status: 500 })
  }
} 