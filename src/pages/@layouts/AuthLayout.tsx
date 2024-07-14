import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className='min-h-screen grid grid-cols-2 p-2 bg-muted'>
      <div className='h-full bg-muted p-10 text-muted-foreground flex flex-col justify-between'>
        <h1 className='text-xl font-semibold text-foreground'>basic.</h1>
        <footer className='text-muted-foreground text-sm'>
          <p> All rights reserved {new Date().getFullYear()} &copy;.</p>
        </footer>
      </div>
      <Outlet />
    </div>
  )
}
