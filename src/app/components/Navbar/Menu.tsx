'use client'

import { menuItems } from '@/app/data/data'
import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion' 
import TypewriterEffect from './Typewriter'
import Social from './Social'
import Yinyang from '../Yinyang'
import { useRouter } from 'next/navigation'
import { FaYinYang } from 'react-icons/fa'

interface MenuProps {
    toggle: () => void;
    isOpen: boolean
  }
  
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  const Menu: React.FC<MenuProps> = ({toggle}) => { 
        const router = useRouter() 
    return (
        <motion.div 
            className=' fixed inset-0 w-full z-20 h-full md:flex items-center' >
            <motion.div  
                initial={{transform: 'translateY(100%)'}}
                animate={{transform: 'translateY(0%)'}}
                exit={{transform: "translateY(100%)"}}
                transition={{duration: 0.5}}
                className='flex flex-col justify-center items-center gap-8 w-full bg-black text-white h-full px-4 md:px-8 py-8 relative' >
                <motion.div 
                  initial={{
                    opacity: 1,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{duration: 0.4}}
                  className='flex flex-col justify-center gap-8 w-full h-full px-4 md:px-8'
                  
                >

                {menuItems.map((item) => (

                    <Link href={item.link} key={item.label} onClick={toggle} className='w-full uppercase text-3xl md:text-5xl  transition-all p-4  hover:bg-white hover:text-black hover:pl-12'>
                        {item.label}
                    </Link>
                ))}
               
                </motion.div>
                <Social />

                <div className='absolute top-1/3 -right-14 block md:hidden'>
                  <FaYinYang className='text-neutral-600 animate-spin' size={100} />
                </div>

            </motion.div>
            <motion.div 
                initial={{transform: 'translateY(-100%)'}}
                animate={{transform: 'translateY(0%)'}}
                exit={{transform: "translateY(-100%)"}}
                transition={{duration: 0.5}}
                className='bg-[#333] w-full h-full hidden md:block'>

                <div className='flex flex-col gap-4 justify-center items-center h-full'>
                    <div className='w-96 h-80 rounded-lg p-4'>
                        <TypewriterEffect />
                    </div>
                </div>
                <Yinyang />
            </motion.div>
            <motion.div 
              initial={{
                opacity: 0,
                y: -40
              }}
              exit={{
                opacity: 0,
                y: -40
              }}
              animate={{
                opacity: 1,
                y: 20
              }}
              transition={{duration: 0.5}}
              className='absolute top-8 right-4 md:right-12 text-xl  capitalize cursor-pointer' role='button' onClick={toggle}>
                close
            </motion.div>
        </motion.div>
  )
}

export default Menu
