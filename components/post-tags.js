import styles from "./post-tags.module.css"

export default function PostTags({ tags }) {
  if (!tags || tags.length === 0) return null

  return (
    <div className={styles.tagsContainer}>
      {tags.map((tag) => (
        <span key={tag} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}
