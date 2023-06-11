import Contact from './components/Contact'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Desco',
  description: 'Desco portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Cursor /> */}
        <Navbar />
        {children}
        <Contact />
      </body>
    </html>
  )
}
