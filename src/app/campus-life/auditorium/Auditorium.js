import React from 'react'

const auditoriumData = [
  {
    name: 'Saraswati Auditorium',
    image: '/image/auditorium/Auditorium-1.jpg',
    description: 'With its excellent technical facilities and theatre-style seating...',
  },
  {
    name: 'Vidyut Auditorium',
    image: '/image/auditorium/Auditorium-2.jpg',
    description: 'With its amphitheatre design and a vast stage, Visvesvaraya Auditorium is a hub for all the...',
  },
  {
    name: 'Samriddhi Auditorium',
    image: '/image/auditorium/Auditorium-3.jpg',
    description: 'With its excellent technical facilities and theatre style seating capacity, the visually stunning...',
  },
]

export default function Auditorium() {
  return (
    <>
      <div className="" >
        <h1 className="text-4xl font-novaReg mb-4">Auditorium</h1>
        <div className="space-y-4 mb-8">
          <p className="text-gray-900 font-novaReg">
            AKG University  features three spacious auditoriums, ideal for hosting a variety of international, national, and institutional events, such as conferences, workshops, seminars, meetings, placement sessions, and cultural activities. Each auditorium is well-furnished, air-conditioned, and equipped with advanced projection systems, audio setups, and internet access.
          </p>
          <p className="text-gray-900 font-novaReg">
            The auditoriums are designed with fixed theatre-style seating, a raised stage, adjustable lighting, a quality sound system, and large screens for presentations. Their layout ensures a clear view of the stage from every seat, providing an optimal experience for all attendees.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {auditoriumData?.map((auditorium) => (
          <div key={auditorium.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={auditorium.image}
              alt={auditorium.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 ">
              <h2 className="text-xl font-novaSemi mb-2">{auditorium.name}</h2>
              <div className="w-16 h-0.5 bg-red-500 mb-4 "></div>
              <p className="text-gray-600 font-novaReg">{auditorium.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}