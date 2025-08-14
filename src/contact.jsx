import React from 'react'
import { Link } from 'react-router'

export default function Contact() {
  return (
    <div className='w-[100%] flex flex-col items-center bg-gradient-to-b from-[#fada7a] to-[#f5f0cd]'>
      <h2 className="text-3xl md:text-4xl font-bold p-12">
        Get in Touch
      </h2>
      <section className="w-[100%] flex flex-col-reverse md:flex-row md:items-start items-center justify-around gap-10 md:gap-0 py-5 ">

        <div className="contact-div md:w-[40%] w-[90%] flex flex-col gap-5">

          <div className="flex items-center w-[100%] border-1 gap-5 py-2 rounded shadow-2xl hover:text-[#81bfda] cursor-pointer">
            <div className=" px-5">
              <i className="fa-solid fa-phone text-2xl"></i>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className='text-lg font-bold'>Call Me</h2>
              <Link to={'tel:+923353952759'}>
              +923353952759
              </Link>

            </div>
          </div>

          <div className="flex items-center w-[100%] border-1 gap-5 py-2 rounded shadow-2xl hover:text-[#81bfda] cursor-pointer">
            <div className="px-5">
              <i className="fa-solid fa-envelope text-2xl"></i>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className='text-lg font-bold'>Mail Me</h2>
              <Link to={"mailto:ayeshrf@gmail.com"}>
            ayeshrf@gmail.com
              </Link>

            </div>
          </div>

          <div className="flex items-center w-[100%] border-1 gap-5 py-2 rounded shadow-2xl hover:text-[#81bfda] cursor-pointer">
            <div className="px-5">
              <i className="fa-solid fa-location-dot text-2xl"></i>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className='text-lg font-bold'>Location</h2>
              <Link>Hyderabad, Sindh</Link>
            </div>
          </div>

        </div>

        <form autoComplete="off" className='md:w-[40%] w-[90%]  p-5 border-1 hover:border-[#81bfda]  rounded shadow-xl'>
          <p className="text-2xl text-center font-bold">Send Me Message</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Name</label>
            <input type="text" className='outline-1  p-2 rounded focus:outline-[#81bfda]' placeholder="Your Name" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Email</label>
            <input type="text" className='outline-1  p-2 rounded focus:outline-[#81bfda]' placeholder="Your Email" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Message</label>
            <textarea className='outline-1  p-2 rounded focus:outline-[#81bfda]' rows="5" placeholder="Enter Your Query ...." required></textarea>
          </div>
          <div className='flex items-center w-[100%] flex-col py-5'>
            <button type="submit" className='border-1 w-[100%] rounded hover:bg-[#b1f0f7] py-1 cursor-pointer '>Submit</button>
          </div>
        </form>
      </section>
      <section className="w-[100%] flex flex-col md:flex-row md:items-start items-center justify-around gap-10 md:gap-0 py-10 bg-gradient-to-t from-[#b1f0f7] to-[#81bfda] ">

<div className="w-[90%] md:w-[40%] md:h-[300px] flex justify-center flex-row items-center py-5">
          <p className="text-2xl text-center font-bold hover:text-[#fada7a]">Find Us On Map</p>


        </div>
        <div className="contact-div md:w-[40%] w-[90%] flex flex-col gap-5 rounded ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1060.2160594313116!2d68.35292657289256!3d25.356427358205384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1755159524127!5m2!1sen!2s"
            className="w-[100%] h-[300px]  rounded-lg border-1 shadow-2xl hover:border-[#fada7a]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </div>
      </section>
    </div>
  )
}
