"use client"

import { useState } from "react"

interface TagFilterProps {
  tags: string[]
  selectedTag: string | null
  onTagSelect: (tag: string | null) => void
  postCounts: Record<string, number>
}

export default function TagFilter({ tags, selectedTag, onTagSelect, postCounts }: TagFilterProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
      <button
        className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Filter by Tag</h3>
          {selectedTag && (
            <span
              className="px-2 py-1 text-white text-xs font-mono rounded shadow-sm"
              style={{ backgroundColor: "#FA3546" }}
            >
              {selectedTag}
            </span>
          )}
        </div>
        <svg
          className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-6 py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-3 py-1.5 border rounded text-xs font-mono transition-all duration-200 shadow-sm ${
                !selectedTag
                  ? "text-white hover:opacity-90"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
              }`}
              style={!selectedTag ? { backgroundColor: "#FA3546", borderColor: "#FA3546" } : {}}
              onClick={() => onTagSelect(null)}
            >
              all ({postCounts.all})
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                className={`px-3 py-1.5 border rounded text-xs font-mono transition-all duration-200 shadow-sm ${
                  selectedTag === tag
                    ? "text-white hover:opacity-90"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                }`}
                style={selectedTag === tag ? { backgroundColor: "#FA3546", borderColor: "#FA3546" } : {}}
                onClick={() => onTagSelect(tag)}
              >
                {tag} ({postCounts[tag] || 0})
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
