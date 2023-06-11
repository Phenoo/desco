'use client'

import { followus } from '@/app/data/data'
import React from 'react'

const Social = () => {
  return (
    <div className='flex flex-row gap-4'>
        {
            followus.map((item) => (
                <a  href={item.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    key={item.link} className='text-white text-2xl md:text-3xl hover:scale-105 hover:opacity-75 transition-all'>
                    {item.icon}
                </a>
            ))
        }
    </div>  )
}

export default Social