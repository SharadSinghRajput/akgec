const scholar = [
    {
        img: '/image/scholars/photo-1.jpg',
        name: 'Alice Joe',
        desi: 'Co-founder of Microsoft'
    },
    {
        img: '/image/scholars/photo-2.jpg',
        name: 'Zordan Roy',
        desi: 'Co-founder of Facebook'
    },
    {
        img: '/image/scholars/photo-3.jpg',
        name: 'Ede Fork',
        desi: 'CEO of SpaceX and Tesla'
    },
    {
        img: '/image/scholars/photo-4.jpg',
        name: 'Minus Joe',
        desi: 'Co-founder of Microsoft'
    },
    {
        img: '/image/scholars/photo-2.jpg',
        name: 'Risu Roy',
        desi: 'CEO of SpaceX and Tesla'
    },
    {
        img: '/image/scholars/photo-1.jpg',
        name: 'Visu Fork',
        desi: 'Co-founder of Facebook'
    },
];

const red = [
    {
        title: 'CU-TBI',
        desc: 'Opportunity to incubate at CU-TBI'
    },
    {
        title: 'INR 500K',
        desc: 'Seed Money'
    },
    {
        title: '50+',
        desc: 'Investors'
    },
    {
        title: 'Banks',
        desc: 'Showcase your business idea in front of private & national banks'
    }
];

const VisitingScholars = () => {
    return (
        <>
            <section className="relative bg-BG30 h-[70vh] bg-no-repeat bg-cover bg-top">
                <div className="w-1/2 bg-gray-300 opacity-90 h-full flex items-center justify-center flex-col">
                    <div className="max-w-2xl">
                        <h2 className="text-6xl font-novaReg uppercase mb-3">Discover <span className="font-semibold text-white">Opportunities as a</span> Visiting Scholar</h2>
                        <h6 className="font-novaReg text-2xl border-y py-3 border-gray-600 text-center">Engage in Collaborative Research and Professional Development</h6>
                        <p className="mt-3 font-novaSemi text-center">Enhance your expertise through a dynamic, scholarly experience.</p>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-3">
                <div className="grid grid-cols-3 gap-6 mb-8 py-32">
                    {scholar.map((scholarData, i) => (
                        <div key={i} className="relative">
                            <img
                                src={scholarData.img}
                                alt={`Picture of ${scholarData.name}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 bg-opacity-75 p-1">
                                <p className="text-3xl text-start font-novaBold -rotate-90 -translate-y-20 translate-x-56 transform text-white">{scholarData.name}</p>
                                <p className="text-secondary text-start -rotate-90 -translate-y-28 translate-x-64 transform">{scholarData.desi}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full bg-primary text-center">
                <div className="max-w-7xl mx-auto px-3">
                    <div className="grid grid-cols-4 gap-4 mb-8 px-4">
                        {red.map((item, i) => (
                            <div
                                key={i}
                                className={`text-white pt-8 px-4 text-center ${i % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}
                            >
                                <h3 className="text-4xl font-novaBold mb-2">{item.title}</h3>
                                <p className="text-sm font-novaReg mb-8">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container mx-auto px-4 pt-8 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img
                                src="/image/placement/4.png"
                                alt="Business man holding a folder"
                                className="rounded-lg w-full object-cover "
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-8">
                            <h2 className="text-4xl font-novaLight mb-2">CU-Technology Business</h2>
                            <h1 className="text-4xl font-novaBold mb-4">Incubator</h1>
                            <p className="mb-6 text-lg font-novaReg text-gray-600">
                                Chandigarh University focuses and promotes the culture of 'Creating Jobs'. It stimulates and nurtures inquisitive minds to shape their ideas in actual businesses.
                            </p>
                            <ul className="list-disc pl-4 text-gray-600">
                                <li className="text-sm mb-2.5">Technology Business Incubator (Govt. Supported and Recognized)</li>
                                <li className="text-sm mb-2.5">Innovation and Entrepreneurship Development Cell (Govt. Supported)</li>
                                <li className="text-sm mb-2.5">120+ Startups and 22 Startups Graduated</li>
                            </ul>
                            <br />
                            <br />
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-lg px-6 rounded">
                                Apply Today
                            </button>
                            <h2 className="text-3xl font-novaBold mt-8 mb-4">Contact Us</h2>
                            <ul className="list-disc text-gray-600 pl-3 mb-5">
                                <li className="font-novaReg">
                                    <a className="mb-2.5">tbi@cumail.in</a></li>
                                <li className="font-novaReg">
                                    <a className="mb-2.5">iic@cumail.in</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VisitingScholars;
