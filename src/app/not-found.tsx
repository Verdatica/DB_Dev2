import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-32 text-center">
      <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-xl text-muted-foreground mb-8">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
      >
        Return Home
      </Link>
    </div>
  )
} 