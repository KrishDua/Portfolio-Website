import React from 'react'
import Navlink from './Navlink'

export default function MenuOverlay({links,onLinkClick}) {
  return (
    <div className="
    fixed top-1/4 right-0 w-1/4 h-1/2 
    text-white 
    z-50 p-6 
    shadow-lg 
    transform transition-transform duration-500 ease-in-out 
    animate-slideIn 
    md:hidden 
    flex flex-col items-center justify-center gap-4">
    <ul  
    className='flex flex-col py-4 items-center md:hidden'
    >
{
    links.map((link, index) => (
        <li key={index} onClick={onLinkClick}
        className='h-full my-2 text-white pl-3 pr-4  
        md:p-0 
        rounded-full 
        bg-gradient-to-br bg-cyan-500
            hover:bg-cyan-600
            transition duration-300 
        w-full text-center'
        >
          <Navlink href={link.href} title={link.title} />
        </li>
    ))
}
    </ul>
    </div>
  )
}