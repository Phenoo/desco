"use client"

import React from 'react'
import { motion } from 'framer-motion'

const Video = () => {
  return (
    <div>
      <div className="relative">
      <video autoPlay muted loop className="w-screen h-[85vh]  md:h-[65vh]">
          <source src="https://res.cloudinary.com/dnir0cslk/video/upload/v1686078878/pexels-free-videos-853919-1920x1080-25fps_dig3tb.mp4" type="video/mp4" />
        </video>
        <motion.div
            className="absolute inset-0 flex flex-col justify-center gap-8 items-center text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            <motion.h4 className="max-w-4xl text-xl sm:text-2xl md:text-4xl text-white font-bold mb-4" initial={{ y: -50 }} animate={{ y: 0 }} transition={{ delay: 1, duration: 1 }}>
              Transforming complex concepts into intuitive designs that communicate effectively and leave a lasting impact.
            </motion.h4>
            <motion.p
              className="text-base sm:text-lg text-white italic"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              &quot;The best websites aren&apos;t built with just code, but with creativity, passion, and a deep understanding of the user&apos;s needs.&quot; - Unknown
            </motion.p>
          </motion.div>

      </div>
    </div>
  )
}

export default Video