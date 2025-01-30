import React from 'react'

const eventTabs = [
    {
        label: 'Convocations',
        href: '/campus-life/convocations'
    },
    {
        label: 'Innovations & Events',
        href: '/campus-life/innovations-and-events'
    },
    {
        label: 'Extra-Curricular Societies',
        href: '/campus-life/extra-curricular-societies'
    },
];

const EventTabs = () => {
    return (
        <>
            <div className="mb-7">
                <div className="w-full text-left">
                    <h3 className="text-3xl font-novaReg mb-2">Explore Our Event Archives</h3>
                    <p className="text-base font-novaReg text-gray-400">Life at India's Most Vibrant Campus</p>
                </div>
            </div>
            <div className="py-3">
                <ul className="mt-4 flex flex-wrap justify-start space-x-2 gap-y-6 cursor-pointer">
                    {eventTabs.map((tab, index) => (
                        <li key={index} className="hover:translate-y-[-3px] transform transition-transform duration-200">
                            <a
                                href={tab.href}
                                className="py-2 px-5 bg-btn-gradient animate-gradient font-novaReg text-white rounded-2xl shadow-xl"
                            >
                                {tab.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default EventTabs