import React from 'react';

const placementData = [
    {
        title: "600+",
        comp: 'COMPANIES',
        description: "Total number of companies participated in campus recruitment.",
    },
    {
        title: "150+",
        comp: 'MNCs TILL DATE',
        description: "Total number of MNCs till date that have recruited students.",
    },
    {
        img: "/image/company-logos/AirForce.webp",
        description: "Nodal Center for the Indian Air Force for Fast Track Selections.",
    },
    {
        img: "/image/company-logos/IndianArmy.webp",
        description: "Recruitment partner for the Indian Army.",
    },
    {
        img: "/image/company-logos/IndianNavy.webp",
        description: "Nodal Center for Indian Navy for Campus Recruitment.",
    },
    {
        img: "/image/company-logos/tcs.webp",
        description: "TCS - Top recruiter among IT companies.",
    },
    {
        img: "/image/company-logos/infosys.webp",
        description: "Infosys - Offers 100% placement opportunities for MBA graduates.",
    },
    {
        img: "/image/company-logos/adobe.webp",
        description: "Adobe - Renowned for innovative digital solutions.",
    },
    {
        img: "/image/company-logos/google.webp",
        description: "Google - Offers career opportunities in various domains.",
    },
    {
        img: "/image/company-logos/amazon.webp",
        description: "Amazon - A top recruiter in technology and operations.",
    },
    {
        img: "/image/company-logos/microsoft.webp",
        description: "Microsoft - Leading tech giant hiring fresh talent.",
    }
];

const PlacementHighlights = () => {
    return (
        <section>
            <h2 className="text-4xl font-novaReg mb-3">Career Success Highlights</h2>
            <p className='font-novaReg'>Our university takes pride in its exceptional placement records, consistently achieving impressive success rates year after year. With dedicated training and strong industry partnerships, our students are well-prepared to embark on fulfilling career journeys. From leading multinational corporations to fast-growing startups, graduates secure roles in various industries, showcasing their talent and skills. The continuous efforts of our career development team, along with focused career preparation programs, have resulted in placements across top-tier organizations, giving our students a competitive edge in today’s job market.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 mb-5">
                {placementData.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 border bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 min-h-60 flex flex-col justify-between"
                    >
                        {item.title ? (
                            <>
                                <div>
                                    <h3 className="text-5xl font-semibold text-center text-cyan-700">{item.title}</h3>
                                    <h3 className="text-2xl font-semibold text-center text-cyan-700 mb-5">{item.comp}</h3>
                                </div>
                                <p className="font-novaReg">{item.description}</p>
                            </>
                        ) : (
                            <>
                                <img src={item.img} alt={item.description} className="mx-auto w-32" />
                                <p className="font-novaReg">{item.description}</p>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PlacementHighlights;
