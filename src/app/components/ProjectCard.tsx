'use client'

import Image from 'next/image';
import React, { useState } from 'react'


import { motion } from 'framer-motion';

export interface PostProps{
    post: {
    _id: string;
    github: string;
    imageUrl: string;
    title: string;
    desc: string;
    stacks: Array<string>;
    live: string;
    }
    index: number 
}

const ProjectCard:React.FC<PostProps> = ({post, index}) => {
    const [clicked, setClicked] = useState(false)
  return (
    <motion.div
        initial={{opacity: 0, transform: 'translateX(-100%)'}}
        whileInView={{opacity: 1, transform: 'translateX(0%)'}}
        transition={{duration: 0.9}}
        viewport={{ once: true }}
        className='my-14'
        >
        <span className='text-4xl md:text-7xl'>0{index + 1}</span>

        <div className='p-4 md:p-20 bg-[#333333] rounded-2xl mt-4 flex-col md:fl flex gap-4 w-full grid-container--element'>
            <Image src={post.imageUrl} alt='project-pic' width="700" height="700"  className='object-contain w-full cursor-pointer' />
        </div>

            <motion.div 
                initial={{height: '0%'}}
                animate={{height: '100%'}}
                transition={{duration: 1.8}}
                className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-between mt-4'>
                <h4 className='text-xl md:text-5xl font-bold'>
                    {post.title}
                </h4>
                <div>
                    <div className='text-[#6d6d6d] font-bold'>{post.desc}</div>
                        <div className='flex flex-row gap-3 flex-wrap mt-4'>
                        {
                            post.stacks.map((item, index) => (
                                <div className='bg-[#333] py-2 px-4 rounded-3xl' key={index}>{item}</div>
                            ))
                        }
                        </div>

                    </div>

                <div className='flex items-center gap-4 md:justify-end relative mt-8'>
                            <div className='w-40 flex flex-row gap-4'>
                            <a href={post.github} target="_blank" rel="noopener"  className='px-4 py-2 rounded-3xl bg-[#fff] text-black hover:scale-95 transition-all hover:opacity-70'>Github</a>
                            <a href={post.live} target="_blank"  rel="noopener" className='px-4 py-2 rounded-3xl bg-[#333] border-2 hover:scale-95 transition-all hover:opacity-70'>Website</a>
                        </div>
                        
                       
                </div>
            </motion.div>
    </motion.div>
  )
}

export default ProjectCard