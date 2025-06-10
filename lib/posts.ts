import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "posts")

export interface PostData {
  id: string
  title: string
  date: string
  tags?: string[]
  contentHtml?: string
}

export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "")
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      tags: matterResult.data.tags,
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    }
  })
}

export function getPostData(id: string): PostData {
  const fullPath = path.join(postsDirectory, `${id}.md`)

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${id}`)
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const matterResult = matter(fileContents)

  // Process markdown synchronously for now
  const processedContent = remark().use(html).processSync(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    tags: matterResult.data.tags,
  }
}

export function getAllTags(): string[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allTags = new Set<string>()

  fileNames.forEach((fileName) => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)

    if (matterResult.data.tags) {
      matterResult.data.tags.forEach((tag: string) => allTags.add(tag))
    }
  })

  return Array.from(allTags).sort()
}

export function getPostsByTag(tag: string): PostData[] {
  const allPosts = getSortedPostsData()
  return allPosts.filter((post) => post.tags && post.tags.includes(tag))
}
