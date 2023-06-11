'use client'

import React from 'react'
import { motion } from 'framer-motion' 


const Loader = () => {
  return (
    <motion.div
    className="fixed inset-0 h-screen w-screen z-50 bg-white"
    >

    <div className='flex justify-center items-center h-full w-full'>
      <div className="flex justify-center items-center h-full">
        <h4 className='text-xl md:text-3xl text-black'>
          desco
        </h4>
      </div>
    </div>
    </motion.div>

  )
}

export default Loader