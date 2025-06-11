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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="w-full p-3 text-center border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 mb-6">
        <Link
          href="/"
          className="text-inherit no-underline border-none hover:text-red-500 dark:hover:text-red-300 transition-colors"
          style={{ borderBottom: "none" }}
        >
          <h1 className="text-3xl leading-tight font-bold tracking-normal my-2 text-gray-900 dark:text-gray-100">
            Charter Blog
          </h1>
        </Link>
      </header>
      <main className="max-w-2xl px-4 mx-auto mb-12">{children}</main>
      {!home && (
        <div className="my-12 mx-auto max-w-2xl px-4">
          <Link
            href="/"
            className="text-red-500 dark:text-red-300 hover:text-red-600 dark:hover:text-red-200 transition-colors"
          >
            Contents
          </Link>
        </div>
      )}
    </div>
  )
}
