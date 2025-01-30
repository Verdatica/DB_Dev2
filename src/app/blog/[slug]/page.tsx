import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import { notFound } from "next/navigation"
import { formatDate } from "@/lib/utils"

interface BlogPostProps {
  params: {
    slug: string
  }
}

async function getPostData(slug: string) {
  const postsDirectory = path.join(process.cwd(), "content/posts")
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)
    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      contentHtml,
      title: data.title,
      date: data.date,
    }
  } catch (error) {
    return null
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPostData(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <time className="text-muted-foreground">
          {formatDate(post.date)}
        </time>
      </header>
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  )
} 