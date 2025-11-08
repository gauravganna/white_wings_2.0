import BlogContent from '@/components/blog/BlogContent'
import { Footer } from '@/components/footer'
import { Header } from '@/components/layout'
import blogs from '@/data/blogs.json'
import footerData from '@/data/footer.json'
import headerData from '@/data/header.json'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams()
  const post = (blogs.posts as any[]).find((p) => p.slug === slug)

  return (
    <div className="min-h-screen bg-ww-gray-50 flex flex-col">
      <Header data={headerData} />
      <main className="flex-1">
        {!post ? (
          <div className="container mx-auto px-4 py-12">
            <p className="text-ww-gray-700">Post not found.</p>
            <Link to="/media/blog" className="text-ww-blue-700 underline">Back to media blog</Link>
          </div>
        ) : (
          <article className="bg-white">
            <header className="container mx-auto px-4 pt-10 pb-6">
              <div className="text-xs text-ww-gray-600 mb-2">
                {new Date(post.date).toLocaleDateString()} {post.readingMinutes ? `• ${post.readingMinutes} min read` : ''}
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold text-ww-gray-900">{post.title}</h1>
              {post.subtitle && <p className="text-ww-gray-700 mt-2">{post.subtitle}</p>}
              {post.tags && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((t: string, i: number) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-ww-gray-200 text-ww-gray-800">{t}</span>
                  ))}
                </div>
              )}
            </header>
            {post.coverImage && (
              <div className="relative w-full max-h-[440px] overflow-hidden">
                <img src={post.coverImage} alt="" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="container mx-auto px-4 py-10">
              <BlogContent blocks={post.content as any} />
            </div>
          </article>
        )}
      </main>
      <Footer data={footerData} onNewsletterSubscribe={async () => {}} />
    </div>
  )
}

export default BlogDetailPage


