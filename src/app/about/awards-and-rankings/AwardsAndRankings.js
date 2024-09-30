"use client"
const rank = [
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>QS I-Gauge overall<br />-2024</>,
        url: 'Click to Read More'
    },
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>QS I-Gauge Faculty Quality<br />-2024</>,
        url: 'Click to Read More'
    },
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>QS I-Gauge Governance & Structure<br />-2024</>,
        url: 'Click to Read More'
    },
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>QS I-Gauge Employability<br />-2024</>,
        url: 'Click to Read More'
    },
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>QS I-Gauge Academic Development<br />-2024</>,
        url: 'Click to Read More'
    },
    {
        img: '/image/awards-and-ranking/diamond-akg.webp',
        title: <>QS I-Gauge Teaching & Learning<br />-2024</>,
        url: 'Click to Read More'
    },
    
];

export default () => {
    return (
        <>
            <section className="bg-BG16 w-full bg-cover bg-no-repeat relative">
                <div className="absolute w-full h-full z-0 bg-gradient-to-r from-sky-700/70 from-10% via-sky-600/50 via-30% to-emerald-500/50 to-90%" />
                <div className="max-w-[1400px] mx-auto px-3 relative z-10 py-28 pb-40 ">
                    <div className="pt-40 w-full">
                        <div className="flex gap-2 w-fit mb-4">
                            {/* Rating Stars */}
                            {[...Array(5)].map((_, index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20" height="20" fill="orange">
                                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                            ))}
                        </div>
                        <div className="w-6/12">
                            <div className="w-full">
                                <h2 className="text-[42px] uppercase font-novaReg font-bold text-white leading-none">
                                    <span className="text-secondary">Ranked #18</span>
                                    <br />
                                    among The Best
                                    <br />
                                    Universities In India By
                                    <br />
                                    <span className="text-secondary">NIRF Rankings 2024</span>
                                </h2>
                                <p className="w-9/12 text-lg font-novaBold mt-5 text-white">
                                    AKG University has made a remarkable achievement by securing the 18th spot in the prestigious NIRF (National Institutional Ranking Framework) Rankings 2024, released by the Ministry of Education (MoE), Government of India.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="-mt-32">
                <div className="max-w-[1400px] mx-auto px-3">
                    <div className="flex w-full">
                        <div className="px-3 w-full">
                            <div className="flex items-center w-full">
                                <h3 className="text-3xl font-novaBold text-white items-center text-center w-full mb-6 uppercase">
                                    QS I-Gauge Ranking
                                </h3>
                            </div>
                            <div className="w-full mb-12">
                                <div className="flex w-full overflow-x-auto space-x-4 z-10">
                                    <div className="flex w-full space-x-4 py-4">
                                        {rank.slice(0, 3).map((item, index) => (
                                            <div key={index} className="flex flex-col w-full bg-white p-8 mx-4 mt-3 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] relative">
                                                {/* Adding the QS Asia Ranking Tag using ::before */}
                                                <div className="relative flex justify-center">
                                                    <span className="relative text-white font-novaBold text-sm uppercase px-4 py-1"
                                                        style={{
                                                            backgroundColor: '#D32F2F',
                                                            borderRadius: '10px 10px 10px 10px',
                                                            position: 'relative',
                                                            top: '-45px',
                                                            padding: '10px 20px',
                                                            zIndex: 10
                                                        }}>
                                                        QS I-Gauge Indian Ranking
                                                    </span>
                                                </div>
                                                <img src={item.img} alt={`Slide ${index + 1}`} className="w-44 object-cover rounded-md mb-8 -mt-3" />
                                                <h4 className="text-lg font-bold text-black mb-4">{item.title}</h4>
                                                <a href="#" className="text-sm hover:text-blue-700 mt-1">{item.url}</a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center w-full">
                                <h3 className="text-3xl font-novaBold text-black items-center text-center w-full mb-6 uppercase">
                                    Institution Rankings
                                </h3>
                            </div>
                            <div className="w-full mb-12">
                                <div className="flex w-full overflow-x-auto space-x-4 z-10">
                                    <div className="flex w-full space-x-4 py-4">
                                        {rank.slice(0, 3).map((item, index) => (
                                            <div key={index} className="flex flex-col w-full bg-white p-8 mx-4 mt-3 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] relative">
                                                {/* Adding the QS Asia Ranking Tag using ::before */}
                                                <div className="relative flex justify-center">
                                                    <span className="relative text-white font-novaBold text-sm uppercase px-4 py-1"
                                                        style={{
                                                            backgroundColor: '#D32F2F',
                                                            borderRadius: '10px 10px 10px 10px',
                                                            position: 'relative',
                                                            top: '-45px',
                                                            padding: '10px 20px',
                                                            zIndex: 10
                                                        }}>
                                                        QS Asia Rankings 2024
                                                    </span>
                                                </div>
                                                <img src={item.img} alt={`Slide ${index + 1}`} className="w-44 object-cover rounded-md mb-8 -mt-3" />
                                                <h4 className="text-lg font-bold text-black mb-4">{item.title}</h4>
                                                <a href="#" className="text-sm hover:text-blue-700 mt-1">{item.url}</a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center w-full">
                                <h3 className="text-3xl font-novaBold text-black items-center text-center w-full mb-6 uppercase">
                                    NAAC Rankings
                                </h3>
                            </div>
                            <div className="w-full mb-12">
                                <div className="flex w-full overflow-x-auto space-x-4 z-10">
                                    <div className="flex w-full space-x-4 py-4">
                                        {rank.slice(0, 3).map((item, index) => (
                                            <div key={index} className="flex flex-col w-full bg-white p-8 mx-4 mt-3 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] relative">
                                                {/* Adding the QS Asia Ranking Tag using ::before */}
                                                <div className="relative flex justify-center">
                                                    <span className="relative text-white font-novaBold text-sm uppercase px-4 py-1"
                                                        style={{
                                                            backgroundColor: '#D32F2F',
                                                            borderRadius: '10px 10px 10px 10px',
                                                            position: 'relative',
                                                            top: '-45px',
                                                            padding: '10px 20px',
                                                            zIndex: 10
                                                        }}>
                                                        QS Asia Rankings 2024
                                                    </span>
                                                </div>
                                                <img src={item.img} alt={`Slide ${index + 1}`} className="w-44 object-cover rounded-md mb-8 -mt-3" />
                                                <h4 className="text-lg font-bold text-black mb-4">{item.title}</h4>
                                                <a href="#" className="text-sm hover:text-blue-700 mt-1">{item.url}</a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-BG17 w-full bg-no-repeat bg-cover bg-center relative">
                <div className="absolute w-full h-full bg-gradient-to-r from-sky-600 from-10% via-sky-500 via-30% to-emerald-500/10 to-90%" />
                <div className="max-w-[1400px] mx-auto px-3 relative z-10">
                    <div className="py-36 w-6/12">
                        <div className="flex gap-2 w-fit mb-4">
                            {/* Rating Stars */}
                            {[...Array(5)].map((_, index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20" height="20" fill="orange">
                                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                            ))}
                        </div>
                        <h2 className="mb-2 text-[42px] font-novaBold text-white">Ranks <span className="text-secondary">#1</span> Among Top <br />Private Indian
                            Universities in<br /><span className="text-secondary">QS I-Gauge Indian Ranking 2024</span></h2>
                        <p className="text-lg font-novaBold text-white mt-5 w-11/12">AKG University Achieves 134th Overall Rank in Asia and Ranks #1 Among Private Universities in India in QS I-Gauge Indian University Rankings 2024</p>
                    </div>
                </div>
            </section>

            <section className="pt-24 pb-12">
                <div className="max-w-[1400px] mx-auto px-3">
                    <div className="flex w-full -mt-6 -mx-3">
                        <div className="w-8/12 mt-6 px-3">
                            <div className="flex items-center w-full">
                                <h3 className="text-3xl font-novaBold text-black items-center text-center w-full mb-6 uppercase">
                                    The Week Rankings
                                </h3>
                            </div>
                            <div className="w-full mb-12">
                                <div className="flex w-full overflow-x-auto space-x-4 z-10">
                                    <div className="flex w-full space-x-4 py-4">
                                        {rank.slice(0, 2).map((item, index) => (
                                            <div key={index} className="flex flex-col w-full bg-white p-8 mx-4 mt-3 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] relative">
                                                {/* Adding the QS Asia Ranking Tag using ::before */}
                                                <div className="relative flex justify-center">
                                                    <span className="relative text-white font-novaBold text-sm uppercase px-4 py-1"
                                                        style={{
                                                            backgroundColor: '#D32F2F',
                                                            borderRadius: '10px 10px 10px 10px',
                                                            position: 'relative',
                                                            top: '-45px',
                                                            padding: '10px 20px',
                                                            zIndex: 10
                                                        }}>
                                                        QS Asia Rankings 2024
                                                    </span>
                                                </div>
                                                <img src={item.img} alt={`Slide ${index + 1}`} className="w-44 object-cover rounded-md mb-8 -mt-3" />
                                                <h4 className="text-lg font-bold text-black mb-4">{item.title}</h4>
                                                <a href="#" className="text-sm hover:text-blue-700 mt-1">{item.url}</a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-4/12 mt-6 px-3">
                            <div className="flex items-center w-full">
                                <h3 className="text-3xl font-novaBold text-black items-center text-center w-full mb-6 uppercase">
                                    India Today Rankings
                                </h3>
                            </div>
                            <div className="w-full mb-12">
                                <div className="flex w-full overflow-x-auto space-x-4 z-10">
                                    <div className="flex w-full space-x-4 py-4">
                                        {rank.slice(0, 1).map((item, index) => (
                                            <div key={index} className="flex flex-col w-full bg-white p-8 mx-4 mt-3 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] relative">
                                                {/* Adding the QS Asia Ranking Tag using ::before */}
                                                <div className="relative flex justify-center">
                                                    <span className="relative text-white font-novaBold text-sm uppercase px-4 py-1"
                                                        style={{
                                                            backgroundColor: '#D32F2F',
                                                            borderRadius: '10px 10px 10px 10px',
                                                            position: 'relative',
                                                            top: '-45px',
                                                            padding: '10px 20px',
                                                            zIndex: 10
                                                        }}>
                                                        QS Asia Rankings 2024
                                                    </span>
                                                </div>
                                                <img src={item.img} alt={`Slide ${index + 1}`} className="w-44 object-cover rounded-md mb-8 -mt-3" />
                                                <h4 className="text-lg font-bold text-black mb-4">{item.title}</h4>
                                                <a href="#" className="text-sm hover:text-blue-700 mt-1">{item.url}</a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full -mt-6 -mx-3">
                        <div className="w-4/12 mt-6 px-3">
                            <div className="flex items-center w-full">
                                <h3 className="text-3xl font-novaBold text-black items-center text-center w-full mb-6 uppercase">
                                    NAAC Accreditation
                                </h3>
                            </div>
                            <div className="w-full mb-12">
                                <div className="flex w-full overflow-x-auto space-x-4 z-10">
                                    <div className="flex w-full space-x-4 py-4">
                                        {rank.slice(0, 1).map((item, index) => (
                                            <div key={index} className="flex flex-col w-full bg-white p-8 mx-4 mt-3 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] relative">
                                                {/* Adding the QS Asia Ranking Tag using ::before */}
                                                <div className="relative flex justify-center">
                                                    <span className="relative text-white font-novaBold text-sm uppercase px-4 py-1"
                                                        style={{
                                                            backgroundColor: '#D32F2F',
                                                            borderRadius: '10px 10px 10px 10px',
                                                            position: 'relative',
                                                            top: '-45px',
                                                            padding: '10px 20px',
                                                            zIndex: 10
                                                        }}>
                                                        QS Asia Rankings 2024
                                                    </span>
                                                </div>
                                                <img src={item.img} alt={`Slide ${index + 1}`} className="w-44 object-cover rounded-md mb-8 -mt-3" />
                                                <h4 className="text-lg font-bold text-black mb-4">{item.title}</h4>
                                                <a href="#" className="text-sm hover:text-blue-700 mt-1">{item.url}</a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-8/12 mt-6 px-3">
                            <div className="flex items-center w-full">
                                <h3 className="text-3xl font-novaBold text-black items-center text-center w-full mb-6 uppercase">
                                    QS I-GAUGE Ratings
                                </h3>
                            </div>
                            <div className="w-full mb-12">
                                <div className="flex w-full overflow-x-auto space-x-4 z-10">
                                    <div className="flex w-full space-x-4 py-4">
                                        {rank.slice(0, 2).map((item, index) => (
                                            <div key={index} className="flex flex-col w-full bg-white p-8 mx-4 mt-3 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] relative">
                                                {/* Adding the QS Asia Ranking Tag using ::before */}
                                                <div className="relative flex justify-center">
                                                    <span className="relative text-white font-novaBold text-sm uppercase px-4 py-1"
                                                        style={{
                                                            backgroundColor: '#D32F2F',
                                                            borderRadius: '10px 10px 10px 10px',
                                                            position: 'relative',
                                                            top: '-45px',
                                                            padding: '10px 20px',
                                                            zIndex: 10
                                                        }}>
                                                        QS Asia Rankings 2024
                                                    </span>
                                                </div>
                                                <img src={item.img} alt={`Slide ${index + 1}`} className="w-44 object-cover rounded-md mb-8 -mt-3" />
                                                <h4 className="text-lg font-bold text-black mb-4">{item.title}</h4>
                                                <a href="#" className="text-sm hover:text-blue-700 mt-1">{item.url}</a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

