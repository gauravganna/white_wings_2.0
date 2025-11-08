import React from 'react'
import { Link } from 'react-router-dom'

const BLOG_BASE_PATH = '/media/blog'

export interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  date: string
  readingMinutes?: number
  tags?: string[]
}

export const BlogCard: React.FC<BlogCardProps> = ({ slug, title, excerpt, coverImage, date, readingMinutes, tags }) => {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
      <Link to={`${BLOG_BASE_PATH}/${slug}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img src={coverImage} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <div className="text-xs text-ww-gray-600 mb-1">
          {new Date(date).toLocaleDateString()} {readingMinutes ? `• ${readingMinutes} min read` : ''}
        </div>
        <h3 className="text-lg font-semibold text-ww-gray-900">
          <Link to={`${BLOG_BASE_PATH}/${slug}`}>{title}</Link>
        </h3>
        <p className="text-ww-gray-700 text-sm mt-2 line-clamp-3">{excerpt}</p>
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-ww-gray-200 text-ww-gray-800">{t}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  )}

export default BlogCard


