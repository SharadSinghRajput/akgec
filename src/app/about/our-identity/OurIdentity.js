import React from 'react'
import { Bookmark } from "lucide-react"

const OurIdentity = () => {
    return (
        <section>
            {/* <div className="px-3">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
                    <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition duration-300">
                        <h2 className="text-3xl font-novaBold mb-6 text-indigo-600 border-b-2 border-indigo-200 pb-2">Our Mission</h2>
                        <p className="text-gray-700 font-novaReg">
                            To foster a culture of innovation and excellence, empowering students to become leaders in their chosen fields and contribute positively to society. We strive to create an environment that nurtures creativity, critical thinking, and a passion for lifelong learning.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 bg-indigo-600 p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition duration-300">
                        <h2 className="text-3xl font-novaBold mb-6 text-white border-b-2 border-indigo-400 pb-2">Our Vision</h2>
                        <p className="text-white font-novaReg">
                            To be a globally recognized institution that nurtures talent, promotes cutting-edge research, and drives technological advancements for a sustainable future. We aim to create a community of thinkers, innovators, and leaders who will shape the world of tomorrow.
                        </p>
                    </div>
                </div>
            </div> */}
            <h1 className="text-4xl max-sm:text-3xl font-novaReg">Official Emblem</h1>
            <div className="max-w-7xl mx-auto px-3 py-5 max-md:space-y-3">
                <div className="relative">
                    <img className="h-60 w-[90%] max-md:w-full object-cover object-top rounded-xl" src="/image/building/building7.webp" alt="Building" />
                    <div className="absolute w-[90%] max-sm:w-full inset-0 bg-gradient-to-r from-blue-600 to-transparent bg-opacity-70 text-white rounded-l-xl" >
                        <div className="flex items-start h-full justify-center flex-col leading-none px-5 w-2/4 max-md:w-2/3 max-sm:w-full">
                            <div className="flex items-center gap-1 mb-2">
                                <Bookmark strokeWidth={1.5} size={30} />
                                <h2 className="text-2xl max-[400px]:text-xl font-novaSemi">The Color Blue</h2>
                            </div>
                            <h3 className="text-lg max-md:text-base leading-snug font-novaReg text-justify">At AKGU, blue symbolizes knowledge, stability, and trust. It reflects the university’s commitment to fostering a calm yet inspiring environment for learning.</h3>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end relative">
                    <img className="h-60 w-[90%] max-md:w-full object-cover rounded-xl" src="/image/building/building3.webp" alt="Student" />
                    <div className="absolute h-full w-[90%] max-sm:w-full bg-gradient-to-l from-indigo-600 to-transparent bg-opacity-95 text-white rounded-r-xl flex justify-end">
                        <div className="flex items-start h-full justify-center flex-col leading-none px-5 w-2/4 max-md:w-2/3 max-sm:w-full">
                            <div className="flex items-center gap-1 mb-2">
                                <Bookmark strokeWidth={1.5} size={30} />
                                <h2 className="text-2xl max-[400px]:text-xl font-novaSemi">Globe</h2>
                            </div>
                            <h3 className="text-lg max-md:text-base leading-snug font-novaReg text-justify">AKGU's global perspective in education is represented by the globe, symbolizing its focus on international collaboration, modern technological advancements, and the adoption of globally recognized academic standards.</h3>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-60 w-[90%] max-md:w-full object-cover object-center rounded-xl" src="/image/building/building2.webp" alt="Student" />
                    <div className="absolute w-[90%] max-sm:w-full inset-0 bg-gradient-to-r from-gray-800 to-transparent bg-opacity-70 text-white rounded-l-xl">
                        <div className="flex items-start h-full justify-center flex-col leading-none px-5 w-2/4 max-md:w-2/3 max-sm:w-full">
                            <div className="flex items-center gap-1 mb-2">
                                <Bookmark strokeWidth={1.5} size={30} />
                                <h2 className="text-2xl max-[400px]:text-xl font-novaSemi">The Human Chain</h2>
                            </div>
                            <h3 className="text-lg max-md:text-base leading-snug font-novaReg text-justify">AKGU promotes a strong sense of unity and collaboration through its diverse student body. The human chain symbolizes teamwork, respect for cultural diversity, and a commitment to national unity.</h3>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end relative">
                    <img className="h-60 w-[90%] max-md:w-full object-cover rounded-xl" src="/image/building/building5.webp" alt="Student" />
                    <div className="absolute h-full w-[90%] max-sm:w-full bg-gradient-to-l from-amber-800 to-transparent bg-opacity-95 text-white rounded-r-xl flex justify-end">
                        <div className="flex items-start h-full justify-center flex-col leading-none px-5 w-2/4 max-md:w-2/3 max-sm:w-full">
                            <div className="flex items-center gap-1 mb-2">
                                <Bookmark strokeWidth={1.5} size={30} />
                                <h2 className="text-2xl max-[400px]:text-xl font-novaSemi">The Color Yellow and Black</h2>
                            </div>
                            <h3 className="text-lg max-md:text-base leading-snug font-novaReg text-justify">The combination of yellow and black at AKGU signifies balance between creativity and discipline. Yellow stands for optimism, innovation, and the bright future that education at AKGU promises.</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-2'>
                <h1 className="text-4xl max-sm:text-3xl font-novaReg mt-10 mb-6">How to use the Official Emblem?</h1>
                <ul className="list-disc space-y-2 pl-5 font-novaReg text-justify">
                    <li>The official emblem may not be modified in any way. Its design must remain intact to preserve its significance and visual identity.</li>
                    <li>When the emblem is used alongside the university's name, the designated wordmark "AKGU University" should be utilized in its standard format.</li>
                    <li>The emblem should appear only in the official university colors—Blue, Yellow, and Black—maintaining a consistent and professional appearance.</li>
                    <li>Do not crop or rotate the emblem. It must always be displayed in its original orientation.</li>
                    <li>The emblem should never be reduced to a size smaller than ½ inch in diameter, ensuring that all details are visible and legible.</li>
                    <li>Other images or graphics must not be placed on or around the emblem. The emblem should always be presented clearly and without interference from other visual elements.</li>
                </ul>
            </div>
        </section>
    )
}

export default OurIdentity