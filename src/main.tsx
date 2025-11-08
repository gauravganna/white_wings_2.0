import BlogDetailPage from '@/routes/BlogDetailPage'
import BlogListPage from '@/routes/BlogListPage'
import CareerPage from '@/routes/CareerPage'
import ContactPage from '@/routes/ContactPage'
import MediaLandingPage from '@/routes/MediaLandingPage'
import { MediaPhotoPage, MediaVideoPage } from '@/routes/MediaPage'
import NotFoundPage from '@/routes/NotFoundPage'
import PropertiesIndexPage from '@/routes/PropertiesIndexPage'
import PropertyDetailPage from '@/routes/PropertyDetailPage'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/media', element: <MediaLandingPage /> },
  { path: '/media/photo', element: <MediaPhotoPage /> },
  { path: '/media/video', element: <MediaVideoPage /> },
  { path: '/media/blog', element: <BlogListPage /> },
  { path: '/media/blog/:slug', element: <BlogDetailPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/career', element: <CareerPage /> },
  { path: '/properties', element: <PropertiesIndexPage /> },
  { path: '/property/:slug', element: <PropertyDetailPage /> },
  { path: '*', element: <NotFoundPage /> }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
