"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaYinYang } from 'react-icons/fa'

const PageWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    
    <motion.div
    >
      <motion.div 
       className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-white flex justify-center items-center' 
       initial={{ x: "100%", width: "100%"}}
       animate={{x: "0%", width: "0%"}}
       exit={{ x: ["0%", "100%"], width: ["0%", "100%"]}}
       transition={{duration: 0.5, ease: "easeInOut"}}>
          <div className="flex justify-center items-center h-full w-full">
            <FaYinYang  className='animate-spin text-3xl sm:text-4xl md:text-[80px] flex justify-center items-center' />
          </div>
    </motion.div>
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration: 0.5, delay: 0.5}}        
    >
        {children}
    </motion.div>
    </motion.div>
  )
}


export default PageWrapper