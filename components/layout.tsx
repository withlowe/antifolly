import type React from "react"
import Link from "next/link"

const name = "The Letter Service"
export const siteTitle = "The Letter Service"

interface LayoutProps {
  children: React.ReactNode
  home?: boolean
}

export default function Layout({ children, home }: LayoutProps) {
  return (
    <div>
      <header className="w-full p-3 text-center border-b border-gray-200 bg-white mb-6">
        <Link href="/" className="text-inherit no-underline border-none">
          <h1 className="text-3xl leading-tight font-bold tracking-normal my-2">Charter Blog</h1>
        </Link>
      </header>
      <main className="max-w-2xl px-4 mx-auto mb-12">{children}</main>
      {!home && (
        <div className="my-12 mx-auto max-w-2xl px-4">
          <Link href="/">Contents</Link>
        </div>
      )}
    </div>
  )
}
