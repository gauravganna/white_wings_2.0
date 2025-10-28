import BlogCard from '@/components/blog/BlogCard'
import { Footer } from '@/components/footer'
import { Header } from '@/components/layout'
import blogs from '@/data/blogs.json'
import footerData from '@/data/footer.json'
import headerData from '@/data/header.json'
import React from 'react'

const BlogListPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ww-gray-50 flex flex-col">
      <Header data={headerData} />
      <main className="flex-1 container mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-ww-gray-900">{blogs.title}</h1>
          <p className="text-ww-gray-700 mt-2">{blogs.description}</p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.posts.map((p) => (
            <BlogCard key={p.slug} slug={p.slug} title={p.title} excerpt={p.excerpt} coverImage={p.coverImage} date={p.date} readingMinutes={p.readingMinutes} tags={p.tags} />
          ))}
        </section>
      </main>
      <Footer data={footerData} onNewsletterSubscribe={async () => {}} />
    </div>
  )
}

export default BlogListPage


