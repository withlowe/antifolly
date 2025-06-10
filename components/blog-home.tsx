"use client"

import { useState, useMemo } from "react"
import TagFilter from "./tag-filter"
import PostTags from "./post-tags"
import Date from "./date"
import Link from "next/link"

interface Post {
  id: string
  title: string
  date: string
  tags?: string[]
}

interface BlogHomeProps {
  allPostsData: Post[]
  allTags: string[]
}

export default function BlogHome({ allPostsData, allTags }: BlogHomeProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return allPostsData
    return allPostsData.filter((post) => post.tags && post.tags.includes(selectedTag))
  }, [allPostsData, selectedTag])

  const postCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allPostsData.length }
    allTags.forEach((tag) => {
      counts[tag] = allPostsData.filter((post) => post.tags && post.tags.includes(tag)).length
    })
    return counts
  }, [allPostsData, allTags])

  return (
    <>
      <section className="text-lg leading-relaxed mb-8">
        <p>
          Lorem ipsum dolor sit ame. Ut enim ad minim ves nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </section>

      {allTags.length > 0 && (
        <TagFilter tags={allTags} selectedTag={selectedTag} onTagSelect={setSelectedTag} postCounts={postCounts} />
      )}

      <section className="pt-1">
        <h2 className="text-2xl font-medium leading-snug mb-4">Contents {selectedTag && `(${selectedTag})`}</h2>
        <ul className="list-none p-0 m-0">
          {filteredPosts.map(({ id, date, title, tags }) => (
            <li key={id} className="mb-5">
              <Link href={`/posts/${id}`} className="text-xl font-medium">
                {title}
              </Link>
              <PostTags tags={tags} />
              <br />
              <small className="text-gray-600">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        {filteredPosts.length === 0 && selectedTag && (
          <p className="text-gray-600">No posts found with the tag "{selectedTag}".</p>
        )}
      </section>
    </>
  )
}
