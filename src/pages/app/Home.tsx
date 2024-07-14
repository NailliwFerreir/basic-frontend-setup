import { Button } from '@/components/ui/button'
import { Helmet } from 'react-helmet-async'

export function Home() {
  return (
    <>
      <Helmet title='Home'/>
      <div className="w-full h-screen items-center justify-center bg-gray-300 p-4">
        <Button>Home!</Button>
      </div>
    </>
  )
}
