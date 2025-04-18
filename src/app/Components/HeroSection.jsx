"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
export default function HeroSection() {
    const arr = [
        'Krish Dua', 2000,
        'a Passionate Problem Solver', 2000,
        'a Machine Learning Explorer', 2000,
        'a DSA Enthusiast', 2000,
        'a Full Stack Web Developer', 2000,
        'a Software Engineering Student at DTU', 2000,
        'an Aspiring Software Engineer', 2000,
      ];
  return (
    <section id='home' className="py-12 px-4 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-10">
        <div className="lg:col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 tracking-wide">
            
            <span >Hello, I'm </span>
            <br />
            <TypeAnimation
            sequence={arr}
                wrapper="span"
                speed={50}
                className='text-2xl sm:text-3xl lg:text-4xl inline-block text-transparent bg-clip-text 
                bg-cyan-500 font-extrabold'
                repeat={Infinity}
    />
          </h1>
          <p className="text-white text-base sm:text-lg lg:text-xl mb-6 max-w-xl mx-auto lg:mx-0">
          Combining code, creativity, and curiosity to engineer better solutions.
          </p>
          <div className="flex flex-col w-full sm:w-fit sm:flex-row justify-center lg:justify-start gap-4">
            {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full 
            bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 
            hover:from-blue-700 hover:via-purple-700 hover:to-pink-800 
            text-white font-semibold shadow-lg transition duration-300">
            Hire Me
            </button> */}
            {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full 
            bg-cyan-500 hover:bg-cyan-600
            text-white font-semibold shadow-lg transition duration-300"> */}
            <a
              className="px-6 py-3 w-full sm:w-fit rounded-full 
              bg-cyan-500 hover:bg-cyan-600
              text-white font-semibold shadow-lg transition duration-300"
              href="https://drive.google.com/file/d/1g7-KoHBcSOUKU60r1gJJ6W5gHs1vdqgr/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            {/* </button> */}
          </div>
        </div>
        <div className="lg:col-span-5 flex justify-center mt-4 lg:mt-0">
          <Image 
            src="/icon3.jpeg"
            alt="Krish Dua"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
