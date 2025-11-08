import BlogCard from '@/components/blog/BlogCard'
import blogs from '@/data/blogs.json'
import React from 'react'
import { Link } from 'react-router-dom'

interface MediaBlogsPreviewProps {
  title?: string
  limit?: number
}

export const MediaBlogsPreview: React.FC<MediaBlogsPreviewProps> = ({ title = 'Blogs', limit = 3 }) => {
  const items = (blogs.posts as any[])?.slice(0, limit) ?? []

  if (!items.length) {
    return null
  }

  return (
    <section id="blogs" aria-labelledby="media-blogs-heading" className="bg-white">
      <div className="container mx-auto px-4 py-10 space-y-6">
        <div className="flex items-center justify-between">
          <h2 id="media-blogs-heading" className="text-2xl md:text-3xl font-semibold text-ww-gray-900">
            {title}
          </h2>
          <Link to="/media/blog" className="text-sm font-medium text-ww-blue-700 hover:underline">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <BlogCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              excerpt={p.excerpt}
              coverImage={p.coverImage}
              date={p.date}
              readingMinutes={p.readingMinutes}
              tags={p.tags}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaBlogsPreview


