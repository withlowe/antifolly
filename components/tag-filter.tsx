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
    <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-gray-800">Filter by Tag</h3>
          {selectedTag && (
            <span className="px-2 py-1 bg-orange-500 text-white text-xs font-mono rounded">{selectedTag}</span>
          )}
        </div>
        <svg
          className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-6 py-4 bg-white border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-3 py-1.5 border border-gray-300 rounded text-xs font-mono transition-all duration-200 ${
                !selectedTag
                  ? "bg-orange-500 text-white border-orange-500 hover:bg-orange-600"
                  : "bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400"
              }`}
              onClick={() => onTagSelect(null)}
            >
              all ({postCounts.all})
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                className={`px-3 py-1.5 border border-gray-300 rounded text-xs font-mono transition-all duration-200 ${
                  selectedTag === tag
                    ? "bg-orange-500 text-white border-orange-500 hover:bg-orange-600"
                    : "bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                }`}
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
