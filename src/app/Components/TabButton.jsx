import React from 'react'

export default function TabButton({active,selecttab,children}) {
    const buttonclasses = active ? 
    'text-white border-b border-cyan-500' : 'text-[#ADB7BE]'
  return (
    <button 
    onClick={selecttab}
     >
        <p 
    className= {`mr-3 font-semibold ${buttonclasses}`}
        >
        {children}
        </p>
    </button>
  )
}
