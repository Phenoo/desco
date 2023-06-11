'use client'

import React from 'react'
import { FaYinYang } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Yinyang = () => {
  return (
    <motion.div 
      initial={{
        x: 20,
        opacity: 0
      }}
      exit={{
        x: -20,
        opacity: 0
      }}
      animate={{
        x: 0,
        opacity: 1
      }}
      transition={{ duration: 0.7}}
      className='absolute bottom-4 right-4 md:right-8'>
        <FaYinYang  className='animate-spin text-3xl sm:text-4xl md:text-[80px]' />
    </motion.div>
  )
}

export default Yinyang