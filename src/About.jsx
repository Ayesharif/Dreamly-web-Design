import React from 'react'

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Travel Blogger & Photographer",
    image: "/team1.jpg",
    bio: "Alex has explored over 30 countries and loves sharing hidden gems with fellow travelers."
  },
  {
    name: "David Kim",
    role: "Adventure Tour Guide",
    image: "/team3.jpg",
    bio: "David specializes in organizing hiking and adventure tours in the most scenic destinations."
  },
  {
    name: "Emily Carter",
    role: "Cultural Experience Curator",
    image: "/team2.jpg",
    bio: "Emily creates unique travel experiences that connect visitors with local traditions and history."
  }
];

export default function About() {
  return (
    <div>
       <section className="bg-gradient-to-t from-[#b1f0f7] to-[#81bfda] py-10 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center ">
        <h2 className="text-3xl md:text-4xl font-bold  mb-15">About Dreamly</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          At <strong>Dreamly</strong>, we believe that travel is more than just visiting places — 
          it’s about creating unforgettable memories and discovering the beauty of the world, 
          one destination at a time. Whether you’re chasing sunsets on a tropical beach, exploring 
          ancient cities, or seeking thrilling adventures in the mountains, 
          <strong> Dreamly</strong> is your trusted companion.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          We bring you inspiring travel guides, curated experiences, and helpful tips to make 
          your journey smooth, exciting, and unforgettable. Our mission is simple: 
          <em> to turn your travel dreams into reality.</em>
        </p>
        <p className="text-gray-600 leading-relaxed">
          With a passion for exploration and a commitment to quality, 
          <strong> Dreamly</strong> connects you to destinations, cultures, and experiences 
          that will stay with you forever.
        </p>
      </div>
    </section>

      <section className="py-12 bg-gradient-to-b from-[#fada7a] to-[#f5f0cd]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold  mb-15 text-center">
          Team Member
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((teamMember, index) => (
            <div
              key={index}
              className=" p-6 rounded-lg shadow-lg text-center bg-gradient-to-t from-[#b1f0f7] to-[#81bfda]"
            >
              <h3 className="text-lg font-semibold mb-5">{teamMember.role}</h3>
              <img
                src={teamMember.image}
                alt={teamMember.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4">
                "{teamMember.bio}"
              </p>
              <h3 className="text-lg font-semibold">{teamMember.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
 <section className="py-12 bg-gradient-to-t from-[#b1f0f7] to-[#81bfda] text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold  mb-6">
        Our Mission & Vision
      </h2>

      {/* Mission */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold ">Our Mission</h3>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          At <span className="font-bold ">Dreamly</span>, our mission is to inspire and enable travelers to
          explore the world with ease, comfort, and joy. We aim to create unforgettable journeys that blend adventure,
          culture, and relaxation — making every trip a dream come true.
        </p>
      </div>

      {/* Vision */}
      <div>
        <h3 className="text-2xl font-semibold ">Our Vision</h3>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Our vision is to become the world’s most trusted and loved travel companion, offering exceptional experiences
          that connect people to new destinations, cultures, and unforgettable memories.
        </p>
      </div>
    </section>
      
    </div>
  )
}
