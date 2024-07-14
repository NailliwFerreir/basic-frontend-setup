import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { DefaultLayout } from '@/pages/@layouts/DefaultLayout'
import { Home } from '@/pages/app/Home'
import { AuthLayout } from './pages/@layouts/AuthLayout'
import { SignIn } from '@/pages/auth/SignIn'

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
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
