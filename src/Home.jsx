import React from 'react'
import Slider from './Slider'


const location=[
  {
    name: "Santorini, Greece",
      description: `Whitewashed houses, deep blue waters, and breathtaking 
      sunsets over the Aegean Sea make Santorini a dream escape for romantics and adventurers alike.`,
      image:"/greece.jpg"
},
  {
    name:"Machu Picchu, Peru",
    description:`An awe-inspiring ancient Incan citadel perched high in the Andes, surrounded by mystical mountain scenery.`,
    image:"/Machu.jpg"

},
  {
    name:"Maldives",
    description:`Overwater villas, turquoise lagoons, and world-class diving make the Maldives the ultimate luxury getaway.`,
    image:"/maldive.jpg"
},
];
const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "This trip was absolutely amazing! The itinerary was well-planned and the accommodations were perfect."
  },
  {
    name: "Michael Smith",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "A wonderful experience from start to finish. I’ll definitely book my next vacation with them."
  },
  {
    name: "Emma Williams",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "The destinations were breathtaking and the service was top-notch. Highly recommend!"
  }
];

export default function Home() {
  return (
    <div className='bg-gradient-to-t from-[#b1f0f7] to-[#81bfda]'>
      <section className="h-[600px] relative flex items-center">
        <img
          src="/p1.jpg"
          alt="banner"
          className="w-full h-[600px] object-cover"
        />
        <p className="absolute top-2/3 md:left-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-2xl md:text-5xl text-[#b1f0f7] text-shadow-lg-30 text-center italic font-sans">
          "Explore the World with Us"
        </p>
      </section>

      <section className='flex flex-col items-center py-10 '>
        <h2 className='text-3xl md:text-4xl  font-semibold text-center mb-8'>Explore Top Destinations</h2>

        <div className=' w-[90%] grid lg:grid-cols-3 md:grid-cols-1  gap-10 justify-around items-start  p-5'>

{ location.length>0?(
  
  location.map((item, key)=>(

  
  <div key={key} className='grid sm:grid-cols-2 lg:grid-cols-1  lg:w-[300px]  sm:gap-10 lg:gap-0 bg-gradient-to-b from-[#f5f0cd] to-[#fada7a] rounded-lg shadow-lg '>
            <img src={item.image} className='w-[100%] rounded' alt="" />
            <div className='bg-gradient-to-b from-[#f5f0cd] to-[#fada7a]'>
              <h2 className='text-lg md:text-xl font-medium py-2 p-2'>{item.name}</h2>
              <p className='p-2'>{item.description}</p>
            <div className='flex items-center w-[100%] flex-col py-5'>
            <button className='border-2 w-[90%] rounded hover:bg-[#b1f0f7] py-1 cursor-pointer '>Details</button>
            </div>
            </div>
          </div>
  )) 
        ):(
          <p className='text-3xl md:text-4xl font-bold font-serif text-center mb-8'>No destinations available.</p>
        )}
        </div>
      </section>

<section className="py-12 bg-gradient-to-b from-[#fada7a] to-[#f5f0cd]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl  font-semibold text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className=" p-6 rounded-lg shadow-lg text-center bg-gradient-to-t from-[#b1f0f7] to-[#81bfda]"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4">
                "{testimonial.review}"
              </p>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>


    </div>
  )
}
