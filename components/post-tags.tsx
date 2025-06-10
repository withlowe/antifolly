interface PostTagsProps {
  tags?: string[]
}

export default function PostTags({ tags }: PostTagsProps) {
  if (!tags || tags.length === 0) return null

  return (
    <div className="flex flex-wrap gap-1.5 my-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs font-mono border border-gray-200"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
