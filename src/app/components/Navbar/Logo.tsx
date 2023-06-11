import Image from 'next/image'
import React from 'react'

import Img1 from '@/app/components/Navbar/yin-yang.png'
import Link from 'next/link'
import { BsYinYang } from 'react-icons/bs'

const Logo = () => {
  return (
    <Link href='/' className='glass p-2 rounded-lg'>
      <div className='flex flex-row text-white gap-1 items-center uppercase'>
          <div className='text-2xl'>desc</div>
          <div>
              <BsYinYang size={24} className='animate-spin' />
          </div>
      </div>
    </Link>

  )
}

export default Logo