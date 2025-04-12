import React from 'react'

export default function ProjectTag({name,onclick,isselected}) {
    const buttonstyles = isselected ? "text-white  border-cyan-500" : 
    "text-[#ADB7BE] hover:border-white hover:text-white"
  return (
    <button onClick={() => onclick(name)} className={`${buttonstyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}>{name}</button>
  )
}