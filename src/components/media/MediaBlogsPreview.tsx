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
      <div className="container mx-auto px-4 pt-6 md:pt-24 space-y-6">
        <div className="flex items-center justify-between">
          <div className="inline-block">
            <h2 id="media-blogs-heading" className="text-2xl md:text-3xl text-ww-gray-900 pl-4">
              {title}
            </h2>
            <div className="mt-1 flex items-center gap-1" aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-ww-gray-400" />
              <span className="h-px w-[50%] md:w-64 bg-ww-gray-400" />
            </div>
          </div>
        </div>

        {/* Mobile list with gradient MORE if > 3 */}
        <div className="relative block md:hidden">
          <div className="grid grid-cols-1 gap-4">
            {(items.slice(0, 3)).map((p) => (
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
          {items.length > 1 && (
            <>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white to-transparent" />
              <Link
                to="/media/blog"
                className="absolute bottom-3 left-1/2 -translate-x-1/2 text-2xl font-semibold text-ww-blue-700 text-center"
              >
                More
              </Link>
            </>
          )}
        </div>

        {/* Desktop/full list */}
        <div className="hidden md:block space-y-6">
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
          <div className="flex justify-end">
            <Link to="/media/blog" className="inline-flex items-center group">
              <span className="text-sm font-medium text-ww-gray-800 group-hover:text-ww-blue-700 transition-colors">
                View All
              </span>
              <span className="ml-4 h-px w-40 bg-ww-gray-500 group-hover:bg-ww-blue-700 transition-colors" />
              <span className="ml-[-1.25rem] h-12 w-12 rounded-full border border-ww-gray-500 group-hover:border-ww-blue-700 relative transition-colors">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-ww-gray-700 group-hover:bg-ww-blue-700" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaBlogsPreview


