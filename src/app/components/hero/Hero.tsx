'use client'

import React from 'react'
import { BsArrowUpRightCircleFill, BsCloudDownload} from 'react-icons/bs'
import BackgroundAnimation from '../BackgroundAnimation'
import Yinyang from '../Yinyang'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="w-full h-screen  max-h-screen relative  bg-[url('https://cdn.pixabay.com/photo/2017/01/19/19/24/chess-1993141_640.jpg')] bg-no-repeat bg-cover">
      <div className={`w-full h-full flex flex-col gap-4 justify-center relative bg-black/70`}>
          <div className="w-full">
            <BackgroundAnimation />
          </div>
          <div className='absolute top-4 flex flex-col justify-center  gap-4 max-w-4xl w-full h-full xl:px-20 md:px-10 sm:px-2 px-4'>
              <motion.h1 
                className='text-3xl md:text-5xl font-bold overflow-hidden relative'>
                <motion.span
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, easing: 'ease'}}>
                      Hello — I am Paschal.</motion.span> <br />
                <motion.span
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, easing: 'ease'}}
                >
                    A   <span className="before:mt-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-50 relative inline-block">
                    <span className="relative text-black">Passionate</span>
                  </span> Frontend Developer.
                </motion.span>

              </motion.h1>
              <motion.div 
                initial={{opacity: 0, transform: 'translateX(-100%)'}}
                animate={{opacity: 1, transform: 'translateY(0%)'}}
                transition={{duration: 0.3, easing: 'ease'}}
                className='text-lg md:text-2xl overflow-hidden'>
                I help brands create unique and thoughtful  digital experiences within the modern web. Currently living in Nigeria. 
              </motion.div>
              <motion.div
                  initial={{opacity: 0, transform: 'translateX(-100%)'}}
                  animate={{opacity: 1, transform: 'translateY(0%)'}}
                  transition={{duration: 0.3, easing: 'ease'}}
                  className='flex gap-4 items-center' 
              >
                <button className='bg-white text-black px-8 py-3 rounded-3xl capitalize flex items-center gap-2'>contact <BsArrowUpRightCircleFill /> </button>
                <a href="https://docs.google.com/document/d/1pdfmXCl4jyry6mkY97ASPMw44VhVh0O9/edit?usp=sharing&ouid=109790532587241320784&rtpof=true&sd=true" download='ezepaschalcv' className='capitalize px-8 py-3 rounded-3xl  flex items-center gap-2 bg-red-500 text-white'>get my cv <BsCloudDownload /></a>
              </motion.div>
            </div>

      </div> 
      <Yinyang />   
    </div>
  )
}

export default Hero