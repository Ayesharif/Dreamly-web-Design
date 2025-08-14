import React, { useState } from 'react'
import { Link } from 'react-router'

export default function Navbar() {

  const [showbar, setShowbar]= useState(false);
  return (
<nav className="flex flex-row items-center justify-between px-2 p-2 transition delay-100 duration-100  bg-gradient-to-t from-[#b1f0f7] via-[#81bfda] via-[#f5f0cd] to-[#fada7a]  rounded-t-2xl">
<div className='md:w-[30%] flex justify-center'>
    <Link className="flex items-center" to={'/'}>

 <img src='/public/trip-unscreen.gif' className='h-[60px]' alt="Logo"  />
<p>Dreamly</p>
    </Link>

</div>



    <button className="md:hidden" type="button" 
    onClick={() => setShowbar(showbar==true ? false:true)}
    >
    <i className='fa-solid fa-bars'></i>
    </button>

    
<ul
  className={`flex md:w-[70%] md:flex w-full md:flex-row flex-col md:static absolute justify-around top-[4.5rem] left-0 md:bg-transparent bg-[#b1f0f7] 
    transition-all duration-300 ease-in-out overflow-hidden transform gap-2 md:py-0 py-4
    ${showbar ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4 md:max-h-none md:opacity-100 md:translate-y-0"}
  z-2
    `}
      // onMouseLeave={()=>{setShowbar(false)}}
      >
          <Link className="rounded px-2 md:bg-transparent font-serif  hover:bg-[#fada7a]" to={'/'}  >Home</Link>
          <Link className="rounded px-2 md:bg-transparent font-serif  hover:bg-[#fada7a]" to={'/about'}  >About</Link>
          <Link className="rounded px-2 md:bg-transparent font-serif  hover:bg-[#fada7a]" to={'/contact'}  >Contact</Link>
          <Link className="rounded px-2 md:bg-transparent font-serif  hover:bg-[#fada7a]" to={'/policy'}  >Policies</Link>
      </ul>


</nav>
  )
}
