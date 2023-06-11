'use client'

import React from 'react'
import Container from './Navbar/Container'
import Logo from './Navbar/Logo'
import { followus } from '../data/data'
import { BsSend } from 'react-icons/bs'
import Overflow from './Overflow'

const Contact = () => {
  return (
    <div className='py-8'>
        <Overflow />
        <Container >
            <h4 className='text-3xl md:text-6xl uppercase font-bold mt-24'>
                ready to work with us ?
            </h4>


            <div className='flex flex-col my-4 md:flex-row justify-between gap-8'>
                <div className='text-lg md:text-3xl flex items-center text-white/50'>
                    Feel free to connect with me... <span>send a message</span> 
                    <a href='mailto:descometusah@gmail.com'
                        target="_blank"
                        rel="noopener noreferrer" 
                        className='animate-bounce ml-2 text-red-500'><BsSend size={30} /></a>
                </div>
                <div className='flex gap-4'>
                    {followus.map((item, index) => (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" key={index} className='px-4 py-2 bg-[#333] rounded-3xl'>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

        </Container>
        <div className='flex items-center justify-center gap-3 uppercase mt-12'>
            made by <Logo />
        </div>
    </div>
  )
}

export default Contact