'use client'
import Typewriter from 'typewriter-effect';


import React from 'react'

const TypewriterEffect = () => {
  return (
    <h1 className='uppercase text-2xl font-bold'>
        <Typewriter
           onInit={(typewriter) => {
            typewriter.typeString("<h4>My name is Eze Paschal, This is just the beginning!. What do you have for me, amigo?</h4>")
            .callFunction(() => {
              console.log("What do you have for me")
            })
            .pauseFor(1000)
            .deleteAll()
            .callFunction(() => {
              console.log("What do you have for me")
            })
            .start();
          }}
            />
    </h1>
  )
}


export default TypewriterEffect
