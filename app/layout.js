import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <main className="min-h-screen flex justify-start items-start">
      <Navbar/>
      <div className='w-[85%]  h-full'>
        <div className='w-full z-20 shadow-lg shadow-gray-300 h-12'></div>
      <div className=' w-full h-full'>
        {children}
      </div>
      </div>
    </main> */}
    {children}
      </body>
    </html>
  )
}
