import Link from "next/link";

const institute = [
    {
        img: "/image/institute/university-school-of-engineering.jpg",
        text: "School of Computer Science & Engineering",
    },
    {
        img: "/image/institute/university-school-of-business.jpg",
        text: "School of Engineering & Applied Science",
    },
    {
        img: "/image/institute/university-school-of-computing.jpg",
        text: "School of Business Studies",
    },
    // {
    //     img: "/image/institute/university-school-of-pharma-sciences.jpg",
    //     text: "University School of Pharma Sciences",
    // },
    // {
    //     img: "/image/institute/university-school-of-bio-technology.jpg",
    //     text: "University School of Bio Technology",
    // },
    //images not done
    // {
    //     img: "/image/institute/university-school-of-bio-technology.jpg",
    //     text: "University School of Architecture",
    // },
    // {
    //     img: "/image/institute/university-school-of-bio-technology.jpg",
    //     text: "University Institute of Liberal Arts & Humanities",
    // },
    // {
    //     img: "/image/institute/university-school-of-bio-technology.jpg",
    //     text: "University Institute of Film and Visual Arts",
    // },
    // {
    //     img: "/image/institute/university-school-of-bio-technology.jpg",
    //     text: "University Institute of Teacher Training And Research",
    // },
    // {
    //     img: "/image/institute/university-school-of-bio-technology.jpg",
    //     text: "University Institute of Legal Studies",
    // },
    // {
    //     img: "/image/institute/university-school-of-bio-technology.jpg",
    //     text: "University Institute of Media Studies",
    // },
    // {
    //     img: "/image/institute/university-school-of-bio-technology.jpg",
    //     text: "University Institute of Sciences",
    // },
    // {
    //     img: "/image/institute/university-school-of-bio-technology.jpg",
    //     text: "University Institute of Allied Health Sciences",
    // },
    // {
    //     img: "/image/institute/university-school-of-bio-technology.jpg",
    //     text: "University Institute of Design",
    // },
    // {
    //     img: "/image/institute/university-school-of-bio-technology.jpg",
    //     text: "University Institute of Tourism & Hospitality Management",
    // },
    // {
    //     img: "/image/institute/university-school-of-bio-technology.jpg",
    //     text: "Global School of Finance and Accounting",
    // },
    // {
    //     img: "/image/institute/university-school-of-bio-technology.jpg",
    //     text: "Centre for Advanced Studies in Social Science and Management",
    // },
    // {
    //     img: "/image/institute/university-school-of-bio-technology.jpg",
    //     text: "University Institute of Physical Education and Sports",
    // },
];

const Institutes = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="mb-2.5 text-[42px] leading-none font-novaReg">Best University <br />in India</h1>
            <p className="mt-4 mb-5 text-lg font-novaLight leading-6 text-justify">
            Founded with the goal of inspiring students to engage in learning and achieve success, AKG Engineering College stands as a prominent institution in the country, offering a motivating educational atmosphere aimed at preparing students for leadership roles in their careers. From technology to business, AKG Engineering College provides a diverse range of specialized programs and opportunities, ensuring students receive a well-rounded education that empowers them to excel in their selected fields.
            <br />
            <br />
AKG Engineering College has gained esteemed recognition for its dedication to educational excellence. Accredited by the National Accreditation Board, it is among the select private engineering colleges in the region to achieve this status. The institution’s commitment to upholding high academic standards distinguishes it as a frontrunner in engineering education.
<br />
<br />
Ranked among the leading engineering colleges in the northern part of the country, AKG Engineering College is noted for its advanced facilities and robust connections with industry partners that offer students unmatched opportunities. The college boasts impressive placement statistics, with top organizations across various sectors conducting recruitment events. Its commitment to both academic and technical superiority is evident in the accolades and honors received over the years.
<br />
<br />
As one of the premier engineering institutions, AKG Engineering College presents a broad spectrum of programs that emphasize practical learning, industry involvement, and innovative research. The college hosts numerous centers of excellence and professional organizations that promote creativity and applied knowledge. With its rigorous academic framework, global collaborations, and outstanding placement outcomes, AKG Engineering College is a leader in the field of engineering education. Students gain from an interdisciplinary perspective, technical skills, and the professional outlook essential for thriving in the global marketplace.
            </p>
         
            <div className="mt-6">
                <h3 className="text-[42px] font-novaLight mb-3">Our Institutes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {institute?.map((inst, index) => (
                        <div key={index} className="relative overflow-hidden shadow-lg bg-zinc-700 group">
                            <img src={inst.img} alt={inst.text} className="w-full h-full object-cover opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-indigo-950 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                <span className="text-lg font-novaBold text-center px-5 mb-4">{inst.text}</span>
                                <button className="rounded-md uppercase bg-secondary px-5 py-2.5 text-base font-novaBold tracking-wider hover:text-white text-black shadow-sm hover:bg-blue-400">Know More ➜</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    );
};

export default Institutes;
