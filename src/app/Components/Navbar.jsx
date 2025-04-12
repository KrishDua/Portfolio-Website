"use client"
import React from 'react'
import Link from 'next/link'
import Navlink from './Navlink'
import Image from 'next/image'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
export default function Navbar() {
    const navlinks = [
        {
            title : "About",
            href : "#about"
        },
        {
            title : "Skills",
            href : "#skills"
        },
        {
            title : "Projects",
            href : "#projects"
        },
        {
            title : "Contact",
            href : "#contact"
        },
        {
            title : "Work Experience",
            href : "#work"
        }
    ]
    const [navbar,setnavbar] = React.useState(false)
    function handleclick(){
        setnavbar(navbar => !navbar);
    }
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-blend-hue bg-opacity-90 md:bg-[#0f172a]">
        <div className='flex flex-wrap items-center justify-between mx-auto p-8' >
            {/* <Link href="/" className='text-2xl md:text-5xl font-semibold text-white'>Krish Dua</Link> */}
            <Link href="#home">
                <Image 
                src="/favicon.ico"
                alt="Krish Dua"
                width={50}
                height={50}
                className="rounded-xl shadow-lg"
            />
            </Link>
            <div className='mobile-menu block md:hidden'>
                {
                    navbar ?  
                    <button 
                    onClick={handleclick}
                    className='flex items-center px-3 py-2 border rounded
                     border-white text-white
                      hover:text-cyan-500 hover:border-cyan-500' 
                    >
                      <XMarkIcon className='h-5 w-5' />
                    </button> : 
                    <button 
                    onClick={handleclick}
                    className='flex items-center px-3 py-2 border rounded
                     border-white text-white
                      hover:text-cyan-500 hover:border-cyan-500'
                    >
                    <Bars3Icon className='h-5 w-5' />
                    </button> 
                }
            </div>
            <div className="menu hidden md:block md:w-auto" id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 gap-8 text-white'>
                    {navlinks.map((link, index) => (
                        <li key={index} className='hover:text-cyan-500 transition duration-300' >
                        <Navlink key={index} href={link.href} title={link.title}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
       {
        navbar ?  <MenuOverlay links = {navlinks}  onLinkClick = {handleclick} /> : null
       }
    </nav>
  )
}