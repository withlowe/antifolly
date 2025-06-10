"use client"
import styles from "./tag-filter.module.css"

export default function TagFilter({ tags, selectedTag, onTagSelect, postCounts }) {
  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.filterTitle}>Filter by Tag</h3>
      <div className={styles.tagList}>
        <button className={`${styles.tag} ${!selectedTag ? styles.active : ""}`} onClick={() => onTagSelect(null)}>
          All ({postCounts.all})
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`${styles.tag} ${selectedTag === tag ? styles.active : ""}`}
            onClick={() => onTagSelect(tag)}
          >
            {tag} ({postCounts[tag] || 0})
          </button>
        ))}
      </div>
    </div>
  )
}
