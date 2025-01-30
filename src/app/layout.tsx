import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Nav } from "@/components/nav"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "Biobased Materials with Verdatica",
  description: "Exploring the future of sustainable materials",
  metadataBase: new URL("https://verdatica.io"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=axiforma@400,500,600,700,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-axiforma antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 