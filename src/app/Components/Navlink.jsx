import React from 'react'
import Link from 'next/link'
export default function Navlink(props) {
  return (
        <Link href={props.href} 
        className='text-base sm:text-lg lg:text-xl block py-2 pl-3 pr-4  rounded 
        md:p-0'>
        {props.title}
        </Link>
  )
}