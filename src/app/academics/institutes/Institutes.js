import Link from "next/link";

const institute = [
    {
        img: "/image/institute/university-school-of-engineering.jpg",
        text: "University School of Engineering",
    },
    {
        img: "/image/institute/university-school-of-business.jpg",
        text: "University School of Business",
    },
    {
        img: "/image/institute/university-school-of-computing.jpg",
        text: "University School of Computing",
    },
    {
        img: "/image/institute/university-school-of-pharma-sciences.jpg",
        text: "University School of Pharma Sciences",
    },
    {
        img: "/image/institute/university-school-of-bio-technology.jpg",
        text: "University School of Bio Technology",
    },
    //images not done
    {
        img: "/image/institute/university-school-of-bio-technology.jpg",
        text: "University School of Architecture",
    },
    {
        img: "/image/institute/university-school-of-bio-technology.jpg",
        text: "University Institute of Liberal Arts & Humanities",
    },
    {
        img: "/image/institute/university-school-of-bio-technology.jpg",
        text: "University Institute of Film and Visual Arts",
    },
    {
        img: "/image/institute/university-school-of-bio-technology.jpg",
        text: "University Institute of Teacher Training And Research",
    },
    {
        img: "/image/institute/university-school-of-bio-technology.jpg",
        text: "University Institute of Legal Studies",
    },
    {
        img: "/image/institute/university-school-of-bio-technology.jpg",
        text: "University Institute of Media Studies",
    },
    {
        img: "/image/institute/university-school-of-bio-technology.jpg",
        text: "University Institute of Sciences",
    },
    {
        img: "/image/institute/university-school-of-bio-technology.jpg",
        text: "University Institute of Allied Health Sciences",
    },
    {
        img: "/image/institute/university-school-of-bio-technology.jpg",
        text: "University Institute of Design",
    },
    {
        img: "/image/institute/university-school-of-bio-technology.jpg",
        text: "University Institute of Tourism & Hospitality Management",
    },
    {
        img: "/image/institute/university-school-of-bio-technology.jpg",
        text: "Global School of Finance and Accounting",
    },
    {
        img: "/image/institute/university-school-of-bio-technology.jpg",
        text: "Centre for Advanced Studies in Social Science and Management",
    },
    {
        img: "/image/institute/university-school-of-bio-technology.jpg",
        text: "University Institute of Physical Education and Sports",
    },
];

const Institutes = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="mb-2.5 text-[42px] leading-none font-novaReg">Best University <br />in India</h1>
            <p className="mt-4 mb-5 text-lg font-novaReg leading-6">
                Established with a vision to empower students with the passion to learn and excel, Ajay Kumar Garg Engineering College (AKGEC) is a leading institution in India, offering an inspiring learning environment designed to prepare students for leadership in the professional world. From Engineering to Management, AKGEC provides a wide array of specialized courses and opportunities, ensuring students receive a comprehensive education that equips them to thrive in their chosen careers.
            </p>
            <p className="mt-2.5 mb-5 text-lg font-novaReg leading-6">
                Ajay Kumar Garg Engineering College (AKGEC) has earned prestigious recognition for its commitment to excellence in education.
                <Link href="../akgec-accreditation" className="text-red-500 hover:underline transition duration-300 ease-in-out">
                    Accredited by the National Board of Accreditation (NBA)
                </Link>,
                AKGEC is one of the few private engineering institutions in Uttar Pradesh to receive this honor. The college’s dedication to maintaining high academic standards has set it apart as a leader in engineering education.
            </p>

            <p className="mt-2.5 mb-5 text-lg font-novaReg leading-6">
                AKGEC is ranked among the top engineering colleges in North India, known for its state-of-the-art infrastructure and strong industry connections that provide students with unparalleled opportunities. The college boasts outstanding placement records, with top companies from various industries conducting recruitment drives. AKGEC’s dedication to academic and technical excellence is reflected in its recognition and awards over the years.
            </p>
            <p className="mt-2.5 mb-5 text-lg font-novaReg leading-6">
                As one of the best engineering colleges in India, AKGEC offers a wide range of programs that integrate hands-on learning, industry exposure, and cutting-edge research. The institution is home to various centers of excellence and professional societies that foster innovation and practical knowledge. AKGEC’s rigorous academic structure, global partnerships, and exceptional placement record make it a leader in engineering education. Students benefit from an interdisciplinary approach, technical expertise, and the professional mindset necessary for excelling in the global market.
            </p>
            <div className="mt-6">
                <h3 className="text-[42px] font-novaReg mb-3">Our Institutes</h3>
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
