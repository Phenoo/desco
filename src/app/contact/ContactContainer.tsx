'use client'

import React, { useRef, useState } from 'react'
import { contactItems } from '../data/data';
import Social from '../components/Navbar/Social';
import { useForm } from 'react-hook-form'
import Image from 'next/image';
import emailjs from '@emailjs/browser'


import { motion } from 'framer-motion';

const ContactContainer = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

    


  

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//      setIsLoading(true);

//      // Simulate an asynchronous operation
//      setTimeout(() => {
//        // After 2 seconds, hide the spinner and reset the form
//        setIsLoading(false);
//      }, 2000);
//   };


  return (
    <div className='my-8'>
        <motion.div 
            initial={{ x: 20}}
            animate={{ x: 0}}
            transition={{ duration: 0.4}}
            className='text-left flex justify-end items-end'>
            <Image src='https://sdk.bitmoji.com/me/sticker/IpzCRMKWnghYxodIdYxheCATyVeig0bGqzyNqTVZDdcGdEq9ZenXVA/20039916.png?p=dD1zO2w9ZW5fR0I.v1&size=thumbnail'
             alt='contact' width={200} height={200} />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div>
                <h4 className='text-2xl md:text-5xl font-bold'>
                    Contact Information
                </h4>
                <br />

                <div className='flex flex-col gap-8 justify-between'>

                    <p className="text-lg my-4">
                        Thank you for visiting my portfolio! If you have any questions, project inquiries, or just want to say hello, please feel free to get in touch with me using the form below. I would love to hear from you!
                    </p>
                    <div>
                        {
                            contactItems.map((item) => (
                                <div key={item.link} className='flex items-center gap-4 md:gap-8 my-4'>
                                    <div className='text-2xl'>{item.icon}</div>
                                    <div className='text-xl md:text-2xl'>{item.link}</div>
                                </div>
                            ))      
                        }
                    </div>
                    <Social />
                </div>

            </div>
            {/* <div>
            <form className="pt-6 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                <label className="block text-white text-lg md:text-xl font-bold mb-2" htmlFor="name">
                    Name <span className='text-red-500'>*</span>
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                </div>
                <div className="mb-4">
                <label className="block text-white text-lg md:text-xl font-bold mb-2" htmlFor="email">
                    Email <span className='text-red-500'>*</span>
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>
                <div className="mb-4">
                <label className="block text-white text-lg md:text-xl font-bold mb-2" htmlFor="message">
                    Message <span className='text-red-500'>*</span>
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full h-[200px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                </div>
                <div className="flex items-center justify-between">
                <button
                    className="bg-red-500 hover:bg-red-700 text-white text-lg md:text-xl font-bold py-2 px-8 md:py-4 rounded-3xl focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? (
                    <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        ></circle>
                        <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647z"
                        ></path>
                    </svg>
                    ) : (
                    'Send'
                    )}
                </button>
                </div>
            </form>
            </div> */}

        </div>
    </div>

  );
};



export default ContactContainer