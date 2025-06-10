import { getAllPostIds, getPostData } from "@/lib/posts"
import Layout from "@/components/layout"
import Date from "@/components/date"
import PostTags from "@/components/post-tags"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  const posts = getAllPostIds()
  return posts.map((post) => ({
    id: post.params.id,
  }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  try {
    const postData = getPostData(params.id)
    return {
      title: postData.title,
    }
  } catch (error) {
    return {
      title: "Post Not Found",
    }
  }
}

export default function Post({ params }: { params: { id: string } }) {
  let postData

  try {
    postData = getPostData(params.id)
  } catch (error) {
    notFound()
  }

  return (
    <Layout>
      <article>
        <h1 className="text-3xl font-medium leading-tight mb-2">{postData.title}</h1>
        <PostTags tags={postData.tags} />
        <div className="text-gray-600 mb-6">
          <Date dateString={postData.date} />
        </div>
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
