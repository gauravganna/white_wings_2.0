import MediaPage from '@/routes/MediaPage'
import NotFoundPage from '@/routes/NotFoundPage'
import PhotoGalleryPage from '@/routes/PhotoGalleryPage'
import PropertiesIndexPage from '@/routes/PropertiesIndexPage'
import PropertyDetailPage from '@/routes/PropertyDetailPage'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/photos', element: <PhotoGalleryPage /> },
  { path: '/media', element: <MediaPage /> },
  { path: '/properties', element: <PropertiesIndexPage /> },
  { path: '/property/:slug', element: <PropertyDetailPage /> },
  { path: '*', element: <NotFoundPage /> }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
