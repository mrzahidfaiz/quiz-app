'use client'
import Button from './components/Button'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();
  return (
    <main className='flex justify-center items-center h-screen'>
      <div>
        <Button text="Start Quiz" onClik={() => router.push('/quiz')} />
      </div>
    </main>
  )
}
