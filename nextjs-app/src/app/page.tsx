"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Composition } from 'remotion'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main>
      <h1 className='text-xl'>Test</h1>  
    </main>

    <div>
      {/* <Composition
            id="Movie" 
            width={640}
            height={480}
            fps={30}
            durationInFrames={240}
            component={Movie}
          /> */}
    </div>
    </>
  )
}
