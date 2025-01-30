import { BlogList } from "@/components/blog-list"

export const metadata = {
  title: "Blog | Biobased Materials with Verdatica",
  description: "Read our latest articles about biobased materials and sustainability.",
}

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Discover insights and innovations in biobased materials
        </p>
      </header>
      <BlogList />
    </main>
  )
} 