import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <div className='flex items-start justify-around bg-gradient-to-t from-[#b1f0f7] via-[#81bfda] via-[#f5f0cd] to-[#fada7a] p-10 gap-10 flex-wrap '>
      <div className='text-center'>

        <Link className="flex items-center " to={'/'}>
          <img src='/trip-unscreen.gif' className='h-[60px]' alt="Logo" />
          <p>Dreamly</p>
        </Link>
        © 2025
      </div>

      <div>
        <h2 className='text-center font-bold mb-3'>Contact</h2>
        <div className='flex flex-col items-left'>
          <span>
            <i className='fa-solid fa-phone text-black-500'></i>
            +923315826886
          </span>
          <span>
            <i className='fa-solid fa-envelope text-red-500'></i>
            contact@Dreamly.com
          </span>

        </div>
      </div>
      <div className=''>
        <h2 className='font-bold mb-3 text-center'>Social Media</h2>
        <div className='flex md:flex-col items-center gap-5 flex-wrap '>
          <i className='text-2xl  fa-brands fa-whatsapp text-green-500'></i>
          <i className='text-2xl  fa-brands fa-x text-black-500'></i>
          <i className='text-2xl  fa-brands fa-youtube text-red-500'></i>
          <i className='text-2xl  fa-brands fa-tiktok text-black-500'></i>
          <i className='text-2xl  fa-brands fa-instagram text-pink-500'></i>
        </div>
      </div>
    </div>
  )
}
