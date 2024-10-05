import React from 'react';
import Image from 'next/image';

const plant = [
  {
    img: '/image/environment-protection/garbage.webp',
    title: 'Mission Haryali (Green Initiative)',
    desc: 'Mission Haryali is an environmental initiative by AKGEC University focused on increasing the green cover in Uttar Pradesh. Every student is encouraged to plant trees and care for them, fostering a sense of environmental responsibility. The project aims to support sustainable development in the region without adding financial strain on local communities.'
  },
  {
    img: '/image/environment-protection/nature-girl.webp',
    title: 'Tree Plantation Drives',
    desc: 'AKGEC University organizes frequent tree plantation drives on campus and in neighboring areas, in collaboration with environmental groups and NGOs. These efforts contribute towards reforestation, addressing the urgent need to restore lost forest areas and enhance the local ecosystem.'
  },
  {
    img: '/image/environment-protection/save-earth.webp',
    title: 'Clean Campus Movement',
    desc: 'To promote cleanliness and environmental hygiene, AKGEC University regularly hosts Clean Campus Movements. Students actively participate in cleaning the campus and nearby communities, reinforcing the importance of maintaining a clean and healthy environment.'
  },
  {
    img: '/image/environment-protection/waste-paper.webp',
    title: 'Sustainable Recycling Program',
    desc: 'AKGEC University’s Recycling Program is aimed at educating students on waste segregation and recycling practices. Through this program, the university fosters a culture of sustainability, ensuring proper waste management and minimizing environmental impact.'
  }
];


function EnvironmentProtection() {
  return (
    <section className='pt-10'>
      <div className='max-w-[1400px] mx-auto px-4'>
        <h1 className="text-4xl font-novaReg mb-1">Environment Protection</h1>
        <p className="">
          AKGU University has launched ‘Save Me- My Environment, My Earth’ Campaign in collaboration with National Green Tribunal (NGT)
        </p>
      </div>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-5 px-4">
        {plant.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-3 border border-blue-500 border-dashed">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-novaReg mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-green-600 text-white py-10 text-center">
        <h2 className="text-2xl font-montserrat font-bold">Join Us in Making a Difference !</h2>
        <button className="mt-4 text-sm uppercase font-novaBold inline-block bg-white text-green-600 py-2 px-4 rounded-lg transition duration-300">
          Learn More
        </button>
      </div>
      <div className="max-w-7xl mx-auto p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 text-white rounded-lg overflow-hidden flex flex-col justify-between">
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">SMART Scholars Initiative</h2>
              <p className="text-sm">
                The SMART Scholars Initiative at AKGEC University is dedicated to nurturing young talent by providing school students with valuable skills and a dynamic platform to demonstrate their potential. This initiative empowers students to explore their creativity, develop critical thinking, and prepare for future academic and career success through engaging activities and practical learning experiences.
              </p>
              <p className="text-sm">
                The primary goal of this program is to inspire children to confidently unlock and express their inherent abilities, ultimately enabling them to contribute meaningfully to the progress and development of Indian society.
              </p>
              <button className="bg-yellow-500 uppercase px-2 py-1 font-novaSemi rounded-md hover:bg-yellow-600 text-black">SEE OUR PROGRAM</button>
            </div>
            <Image
              src="/image/environment-protection/garbage.webp"
              alt="SMART Junior Program"
              width={400}
              height={200}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="space-y-4">
            <div className="bg-cyan-600 text-white rounded-lg p-6 space-y-4">
              <h2 className="text-2xl font-bold">Local Schools Partnership Program</h2>
              <p className="text-sm">
                Knowledge plays a pivotal role in shaping and empowering the youth. In line with this belief, AKGEC University runs the Local Schools Partnership Program, which hosts a variety of competitions, including quizzes, problem-solving challenges, music, dance, and more. This initiative aims to engage students from local schools, fostering intellectual and creative development in a fun and competitive environment.
              </p>
              <h3 className="text-xl font-semibold">» Knowledge Challenge</h3>
              <p className="text-sm">
                The goal of this initiative is to inspire students to go beyond textbook knowledge and bridge the gap between theoretical concepts and practical learning. By engaging in hands-on activities and real-world challenges, students develop a deeper understanding and appreciation of the subjects they study.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/image/environment-protection/nature-girl.webp"
                  alt="Quiz Competition 1"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover"
                />
                <Image
                  src="/image/environment-protection/save-earth.webp"
                  alt="Quiz Competition 2"
                  width={200}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="bg-yellow-500 uppercase px-2 py-1 font-novaSemi rounded-md hover:bg-yellow-600 text-black">Discover Our Program</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-BG29 bg-cover bg-center bg-zinc-800 bg-blend-multiply opacity-90 py-20 ">
        <div className='max-w-7xl mx-auto text-white'>
          <div className="flex items-center mb-4">
            <h2 className="text-4xl font-novaReg mr-2">Why Is Environmental Protection Important ?</h2>
            <span className="text-green-600 text-4xl">&#8594;</span>
          </div>
          <div className="flex items-center mb-4 justify-center">
            <p className="mb-4">
              Environmental protection is essential for maintaining the health of our planet and ensuring a sustainable future for generations to come. Here are some key reasons why it matters:
            </p>
          </div>
          <ul className="list-disc list-inside mb-6 pl-4">
            <li>Preserves natural resources for future generations.</li>
            <li>Reduces pollution and improves air and water quality.</li>
            <li>Helps combat climate change and its effects.</li>
            <li>Protects biodiversity and habitats.</li>
          </ul>
          <h3 className="text-3xl font-novaReg text-center mb-4">Get Involved!</h3>
          <p className=" text-center mb-6 px-4">
            You can make a difference by participating in local clean-up events, reducing waste, recycling, and spreading awareness about environmental issues.
          </p>
        </div>
      </div>

    </section>
  );
}

export default EnvironmentProtection;
