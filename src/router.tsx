import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { DefaultLayout } from '@/pages/@layouts/DefaultLayout'
import { Home } from '@/pages/app/Home'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
