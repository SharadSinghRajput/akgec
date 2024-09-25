import React from 'react'
import { Bookmark } from "lucide-react"

const OurIdentity = () => {
    return (
        <section>
            <div className='border border-gray-300 flex items-center justify-center py-32'>
                <img className='w-96' src="/image/akg-logo.png" alt="Akg Logo" />
            </div>
            <div className="mt-10">
                <h1 className="text-4xl font-novaReg mb-6">Official Emblem</h1>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-gray-100 p-8 border-y border-x border-gray-300">
                        <div className="flex items-center mb-2">
                            <Bookmark className="text-blue-600 mr-3 flex-shrink-0" />
                            <h2 className="text-2xl font-novaReg">The Color Blue</h2>
                        </div>
                        <p className="ml-9 font-novaReg text-lg leading-6">
                            At AKGEC, blue symbolizes knowledge, stability, and trust. It reflects the university’s commitment to fostering a calm yet inspiring environment for learning.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-8 border-y border-r border-gray-300">
                        <div className="flex items-center mb-2">
                            <Bookmark className="text-blue-600 mr-3 flex-shrink-0" />
                            <h2 className="text-2xl font-novaReg">Globe</h2>
                        </div>
                        <p className="ml-9 font-novaReg text-lg leading-6">
                            AKGEC's global perspective in education is represented by the globe, symbolizing its focus on international collaboration, modern technological advancements, and the adoption of globally recognized academic standards.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-8 border-x border-b border-gray-300">
                        <div className="flex items-center mb-2">
                            <Bookmark className="text-blue-600 mr-3 flex-shrink-0" />
                            <h2 className="text-2xl font-novaReg">The Human Chain</h2>
                        </div>
                        <p className="ml-9 font-novaReg text-lg leading-6">
                            AKGEC promotes a strong sense of unity and collaboration through its diverse student body. The human chain symbolizes teamwork, respect for cultural diversity, and a commitment to national unity.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-8 border-r border-b border-gray-300">
                        <div className="flex items-center mb-2">
                            <Bookmark className="text-blue-600 mr-3 flex-shrink-0" />
                            <h2 className="text-2xl font-novaReg">The Color Yellow and Black</h2>
                        </div>
                        <p className="ml-9 font-novaReg text-lg leading-6">
                            The combination of yellow and black at AKGEC signifies balance between creativity and discipline. Yellow stands for optimism, innovation, and the bright future that education at AKGEC promises.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-4xl font-novaReg mt-10 mb-6">How to use the Official Emblem?</h1>
                <ul className="list-disc space-y-2 pl-5 font-novaReg text-lg">
                    <li>The official emblem may not be modified in any way. Its design must remain intact to preserve its significance and visual identity.</li>
                    <li>When the emblem is used alongside the university's name, the designated wordmark "AKGEC University" should be utilized in its standard format.</li>
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