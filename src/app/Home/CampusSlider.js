import { Fragment } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const product = {
    name: 'Application UI Icon Pack',
    version: { name: '1.0', date: 'June 5, 2021', datetime: '2021-06-05' },
    price: '$220',
    description:
        'The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.',
    highlights: [
        '200+ SVG icons in 3 unique styles',
        'Compatible with Figma, Sketch, and Adobe XD',
        'Drawn on 24 x 24 pixel grid',
    ],
    imageSrc: '/image/banner3.jpg',
    imageAlt: 'Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.',
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const CartData = [
    {
        title: "Research-Driven Excellence",
        description: "At Ajay Kumar Garg Engineering College, we foster big dreams—whether it's leading cutting-edge research, launching successful startups, excelling in competitive exams, or achieving global recognition in sports. We cultivate a passion for innovation and success."
    },
    {
        title: "Unmatched Industry Support",
        description: "Ajay Kumar Garg Engineering College benefits from the backing of industry leaders like Microsoft, IBM, and others. This strong industry collaboration, coupled with state-of-the-art infrastructure, drives technology-focused learning and continuous improvement."
    },
    {
        title: "Cutting-Edge Learning Approach",
        description: "At Ajay Kumar Garg Engineering College, we combine interactivity, technology, and innovation to foster adaptability and collaboration. Our modern learning dynamics provide personalized education, preparing students to meet the evolving demands of the future."
    }
]

export default function Example() {
    return (
        <div className="bg-white py-8">
            <div className="">
                <div className='max-w-4xl mx-auto relative z-10 max-lg:px-5'>
                    <h2 className="text-lg font-extralight text-center tracking-tight text-gray-900 sm:text-4xl">
                        Uniting Students & Faculty from Every Corner of India and Around the World!
                    </h2>
                    <p className="mt-2 mb-6 text-sm sm:text-xl text-gray-600 px-6 sm:px-20 text-center font-extralight">
                        Bringing together students from around the world, our platform creates a dynamic network with unparalleled learning opportunities and experiences.
                    </p>
                </div>
                <div className='max-w-6xl mx-auto relative z-10'>
                    <div className="lg:col-span-4 lg:row-end-1 relative">
                        <img
                            alt={product.imageAlt}
                            src={product.imageSrc}
                            className="object-cover object-center h-full rounded-lg max-lg:rounded-none w-full"
                        />
                        <div className="absolute max-lg:relative max-lg:bg-white max-lg:rounded-none inset-0 pb-8 pl-10 flex flex-col items-start justify-end bg-black bg-opacity-50 rounded-lg p-4">
                            <h2 className="text-white max-lg:text-gray-800 text-lg md:text-2xl lg:text-3xl font-light mb-2">
                                World-Class Campus
                            </h2>
                            <p className="text-white max-lg:text-gray-800 text-sm md:text-base lg:text-base font-light mb-2 w-full ">
                                AKGEC's global student body fosters personal growth through diverse cultural interactions, spanning regions across India and beyond.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='bg-BG3 pt-64 pb-16 w-full -mt-52 max-lg:-mt-20 max-lg:pt-16'>
                    <div className='max-w-[1350px] mx-auto max-lg:p-10'>
                        <div className='grid grid-cols-3'>
                            <div className='col-span-2 max-lg:col-span-3'>
                                <h3 className='text-[50px] max-md:text-2xl leading-[1] font-extralight text-white mb-5'>
                                    Innovate and Inspire<br />
                                    Be a Future Innovator
                                </h3>
                                <p className='text-white text-base font-extralight'>At Ajay Kumar Garg Engineering College, we empower students to aim high—whether it's advancing in engineering research, launching successful startups, excelling in competitive exams, or pursuing a global career. We inspire dreams and nurture leaders for tomorrow's challenges.</p>
                            </div>
                            <div className='col-span-1 max-lg:col-span-3'>
                                <div class="flex justify-start space-x-4 z-10 mt-10">
                                    <button class="bg-yellow-500  text-white text-xs font-semibold px-6 py-2 rounded-md">APPLY TODAY</button>
                                    <button class="border border-white text-white text-xs font-semibold px-6 py-2 rounded-md">VIEW PLACEMENTS</button>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 mt-10'>
                            {CartData.map((item, index) => (
                                <div className='col-span-1 max-lg:col-span-3 mr-10 ' key={index}>
                                    <div className='grid grid-cols-3'>
                                        <h3 className='col-span-2 text-white text-xl font-semibold'>{item.title}</h3>
                                        <span className='text-white/50 col-span-1 flex justify-end'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></span>
                                    </div>
                                    <p className='text-white text-sm mt-5 font-extralight'>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
