import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/query.ts'
import { RouterProvider } from 'react-router'
import './global.css'
import { router } from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Helmet titleTemplate='%s | basic.' />
      <RouterProvider router={router} />
    </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
