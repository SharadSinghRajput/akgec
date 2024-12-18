'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function EligibilityCriteriaUnique() {
    const [activeTab, setActiveTab] = useState('eligibility')

    return (
        <div className="bg-gradient-to-br from-purple-200 to-blue-100 py-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-[42px] text-center font-novaReg max-lg:text-4xl max-md:text-3xl max-sm:px-4 text-gray-700">
                    Admission{" "}
                    <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent animate-gradient">
                        Criteria
                    </span>
                </h1>
                <div className="mt-5 bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        {/* Navigation Sidebar */}
                        <nav className="md:w-1/3 bg-gradient-to-b from-blue-600 to-indigo-700 text-white p-6">
                            <div className="space-y-4">
                                {['eligibility', 'selection'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${activeTab === tab
                                            ? 'bg-white text-indigo-700 shadow-lg'
                                            : 'hover:bg-white/10 border border-gray-400'
                                            }`}
                                    >
                                        <span className="text-xl max-sm:text-base font-semibold capitalize">{tab}</span>
                                    </button>
                                ))}
                            </div>
                        </nav>
                        <div className="md:w-2/3 p-6">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                {activeTab === 'eligibility' && (
                                    <>
                                        <h2 className="text-3xl max-sm:text-2xl font-novaSemi text-gray-800 mb-4">Eligibility Criteria</h2>
                                        <div className="space-y-6">
                                            <CriteriaCard title="Domestic Students">
                                                <ul className="list-disc pl-5 space-y-2">
                                                    <li>
                                                        Passed XII standard from any recognised Education Board with Physics
                                                        and Mathematics & any other third subject with minimum{' '}
                                                        <span className="font-novaSemi text-indigo-600">65% marks</span>
                                                    </li>
                                                    <li>
                                                        <span className="font-novaSemi">OR</span> IB Board with minimum score of 24 credits,
                                                        3 Higher level and 3 standard level subjects
                                                    </li>
                                                </ul>
                                            </CriteriaCard>
                                            <CriteriaCard title="NRI Students">
                                                <p>
                                                    Pass with <span className="font-semibold text-indigo-600">60% aggregate marks</span>{' '}
                                                    in grade 12th/ A level or equivalent (with physics & mathematics)
                                                    and English language requirement (ELR)
                                                </p>
                                            </CriteriaCard>
                                        </div>
                                    </>
                                )}
                                {activeTab === 'selection' && (
                                    <>
                                        <h2 className="text-3xl max-sm:text-2xl font-novaSemi text-gray-800 mb-4">Selection Process</h2>
                                        <CriteriaCard title="Merit-based Selection">
                                            <p>
                                                Selection will be based on merit of Class XII Best of 3 subjects score
                                                (comprising of Physics and Maths as compulsory subjects and any other
                                                third subject with highest score)
                                            </p>
                                        </CriteriaCard>
                                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                                            <p className="text-sm text-yellow-700">
                                                <span className="font-semibold">Note:</span> Third subject should not be vocational-
                                                Music, Dance, Painting, Home Science, Arts, etc
                                            </p>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CriteriaCard({ title, children }) {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-novaSemi text-gray-800 mb-3">{title}</h3>
            <div className="text-gray-600">{children}</div>
        </div>
    )
}