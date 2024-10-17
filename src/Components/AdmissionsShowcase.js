import { BookHeart, GraduationCap, Landmark, MapPinned } from 'lucide-react'
import React from 'react'

const AdmissionsShowcase = () => {
    return (
        <section className="w-full bg-gray-100" >
            <div className="max-w-7xl mx-auto px-3 py-10">
                <div className="relative">
                    <img className="h-60 w-4/5 object-cover rounded-xl" src="/image/national-admission/photo-1.jpeg" alt="Student" />
                    <div className="absolute inset-0 w-1/4 bg-[#F9FF42] bg-opacity-80 text-black rounded-l-xl">
                        <div className="flex items-start h-full justify-center flex-col leading-none pl-5">
                            <GraduationCap strokeWidth={1.25} size={40} />
                            <span className="mt-3">Trusted by</span>
                            <h2 className="mt-2 text-6xl font-novaBold">2.45<span className="text-3xl">Lakh+</span></h2>
                            <h3 className="text-2xl font-novaBold">Learners</h3>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end relative">
                    <img className="h-60 w-4/5 object-cover rounded-xl" src="/image/national-admission/photo-2.jpeg" alt="Student" />
                    <div className="absolute right-0 h-full w-1/4 bg-[#00007D] bg-opacity-80 text-white rounded-r-xl">
                        <div className="flex items-start h-full justify-center flex-col leading-none pl-5">
                            <MapPinned strokeWidth={1.25} size={40} />
                            <span className="mt-3">Representing students from</span>
                            <h2 className="mt-2 text-2xl font-novaBold leading-5">Over 50 Countries <br /> Across 6 <br /> Continents</h2>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-60 w-4/5 object-cover rounded-xl" src="/image/national-admission/photo-3.jpeg" alt="Student" />
                    <div className="absolute inset-0 w-1/4 bg-[#42FFF9] bg-opacity-80 text-black rounded-l-xl">
                        <div className="flex items-start h-full justify-center flex-col leading-none pl-5">
                            <BookHeart strokeWidth={1.25} size={40} />
                            <span className="mt-3">Promoting</span>
                            <h3 className="mt-2 text-2xl font-novaBold leading-5">Diversity <br /> and Unity</h3>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end relative">
                    <img className="h-60 w-4/5 object-cover rounded-xl" src="/image/national-admission/photo-4.jpeg" alt="Student" />
                    <div className="absolute right-0 h-full w-1/4 bg-[#930084] bg-opacity-80 text-white rounded-r-xl">
                        <div className="flex items-start h-full justify-center flex-col leading-none pl-5">
                            <Landmark strokeWidth={1.25} size={48} />
                            <span className="mt-3">Symbol of Scholarly</span>
                            <h3 className="mt-2 text-2xl font-novaBold leading-5">Achievement <br /> and Growth</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdmissionsShowcase