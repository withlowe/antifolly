import { getSortedPostsData, getAllTags } from "@/lib/posts"
import BlogHome from "@/components/blog-home"
import Layout from "@/components/layout"

export default function Home() {
  const allPostsData = getSortedPostsData()
  const allTags = getAllTags()

  return (
    <Layout home>
      <BlogHome allPostsData={allPostsData} allTags={allTags} />
    </Layout>
  )
}
