"use client"

import React from 'react'
import { skills } from '../data/data'

const Stacks = () => {
  return (
    <div className='my-8'>
        <div className='font-bold text-xl md:text-3xl mt-4 capitalize'>stacks</div>
        <div className='flex flex-row flex-wrap gap-3  p-4'>
            {
                skills.map((item) => (
                    <div key={item.value} className='rounded-3xl border flex flex-row gap-2 py-2 px-5'>
                        <div style={{ color: item.color}} className='text-2xl'>
                            {item.icon}
                        </div>
                        <div className='text-white'> 
                            {item.value}
                        </div>

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Stacks