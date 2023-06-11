'use client'

import React, { useState } from 'react'
import Logo from './Logo'
import MenuButton from './MenuButton';
import Container from './Container';
import Menu from './Menu';

import { AnimatePresence } from "framer-motion";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className='fixed top-0 z-30 w-full'>
        <Container>
            <div className="flex justify-between items-center w-full py-4">
                <Logo />
                <AnimatePresence>
                    {
                        isOpen && (
                        <Menu toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                        )
                    }
                 </AnimatePresence>
                <MenuButton toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            </div>
        </Container>
    </div>
    </>

  )
}

export default Navbar