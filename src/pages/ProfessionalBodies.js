import React from 'react'
import Image from 'next/image'

const data = [
    {
      logoImg: '/image/company-logos/logo1.jpg',
      title: "Leading Solar Technology Innovators",
      members: "17+"
    },
    {
      logoImg: '/image/company-logos/logo2.jpg',
      title: "Experts in Pneumatic Solutions",
      members: "34+"
    },
    {
      logoImg: '/image/company-logos/logo3.jpg',
      title: "Robotics and Automation Specialists",
      members: "52+"
    },
    {
      logoImg: '/image/company-logos/logo4.jpg',
      title: "Global Leaders in Industrial Gases",
      members: "45+"
    },
    {
      logoImg: '/image/company-logos/logo5.jpg',
      title: "Advanced Electrical and Automation Solutions",
      members: "78+"
    },
    {
      logoImg: '/image/company-logos/logo6.jpg',
      title: "Precision Motion Control Systems",
      members: "625+"
    },
    {
      logoImg: '/image/company-logos/logo7.jpg',
      title: "World-Class Clamping and Gripping Technology",
      members: "45+"
    }
  ]

function ProfessionalBodies() {
    return (
        <>
            <section className='relative bg-BG12 bg-fixed bg-top bg-cover h-[85vh]'>
                <div className='absolute inset-0 bg-[#000] opacity-40'></div>
                <div className='absolute z-20 bottom-0 right-0 w-1/2 bg-[#db1e46] flex flex-col gap-5 p-24 max-2xl:p-16 text-white'>
                    <h1 className='text-7xl max-2xl:text-6xl max-xl:text-5xl font-novaSemi max-w-2xl'>Professional Bodies at Ajay Kumar Garg University</h1>
                    <p className='text-[17px] max-w-md'>The Professional Bodies at AKG University are organisations designed to advance their members' intellectual capabilities through an open exchange of information.</p>
                    <button className='bg-white w-fit text-xs py-2.5 px-6 tracking-widest text-black uppercase font-novaBold rounded-xl'>Know More</button>
                </div>
            </section>
            <section className='max-w-7xl mx-auto text-center py-20'>
                <h3 className='text-xs text-[#939393] font-novaReg uppercase'>What are the Professional Bodies at AKG?</h3>
                <p className='mt-2 text-2xl font-novaLight max-w-4xl mx-auto'>They can comprise <strong>student and professional members</strong> who come together to understand how to comprehend solutions to real-world problems. These bodies help in empowering people through the power of knowledge and organise lessons revolving around <strong>value-added courses</strong>, and various kinds of learning series and competitions.</p>
            </section>
            <section className='relative bg-BG11 bg-cover bg-center'>
                <div className='absolute inset-0 w-[75%] ' style={{ background: 'linear-gradient(to right, #172646 55%, rgba(256, 256, 256, 0.0))' }}></div>
                <div className='relative max-w-7xl mx-auto py-32 px-6'>
                    <h1 className="text-3xl md:text-4xl font-novaBold max-w-sm mb-6 text-white leading-none">
                        Why are these Professional Bodies important?
                    </h1>
                    <p className="text-[15px] max-w-lg text-white">
                        These Professional Bodies are important as they help in contributing to the
                        overall growth of their members. They help students and professionals to
                        build a bigger network and advance their careers through knowledge
                        sharing and awareness. They also enable students to learn how to adapt to
                        the ever-changing industrial needs and competitive business environments.
                        Some of these bodies are sincerely dedicated to working towards women's
                        empowerment and building strong leaders for the future.
                    </p>
                </div>
            </section>
            <section className='bg-BG13 bg-cover h-screen'>
                <div className='max-w-[1300px] mx-auto h-96 flex justify-end'>
                    <div className='p-10'>
                        <div className="container mx-auto px-4 py-10">
                        <h2 className='text-4xl font-novaSemi mb-5'>Our Esteemed Partners</h2>
                            <table className="min-w-full bg-white border border-gray-300">
                                <thead>
                                    <tr className="bg-[#333643]">
                                        <th className="px-6 py-2 text-left text-sm font-novaBold text-white uppercase">
                                            NAME OF PROFESSIONAL BODY
                                        </th>
                                        <th className="px-6 py-2 text-left text-sm font-novaBold text-white uppercase">
                                            NO. OF MEMBERS
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y border border-gray-500 divide-gray-200">
                                    {data.map((item, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap border border-gray-500">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-12 w-24 ">
                                                        <Image src={item.logoImg} alt={item.title} width={100} height={50} className="object-contain" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{item.title}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm border border-gray-500 text-gray-500">
                                                {item.members}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfessionalBodies