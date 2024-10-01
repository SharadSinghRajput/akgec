"use client";


const advtdata = [
    {
        title: "Innovative Curriculum and Modern Pedagogy:",
        desc: "AKG University provides students with exceptional learning opportunities through meticulously crafted programs and a commitment to educational excellence. The institution boasts a forward-thinking curriculum that integrates the latest developments across various fields, equipping students to tackle real-world challenges with confidence."
    },
    {
        title: "Strategic Industry Partnerships and Infrastructure: ",
        desc: "AKG University maintains strong collaborations with leading multinational corporations, offering students valuable industry exposure, internships, and job placement opportunities to enhance their employability. The campus features state-of-the-art facilities, enabling students to work with cutting-edge technologies."
    },
    {
        title: "Global Perspective and Collaborations:",
        desc: "With partnerships established with top-ranked universities worldwide, AKG University fosters an extensive global network. Renowned scholars and experts from different countries contribute their insights, enriching the educational experience and providing students with a truly global outlook."
    },
    {
        title: "Diverse Cultural Environment:",
        desc: "AKG University hosts students from all over India and various countries, creating a vibrant multicultural atmosphere that celebrates diversity, various ethnicities, and rich traditions from around the world."
    },
    {
        title: "Research and Innovation Ecosystem:",
        desc: "AKG University encourages research and innovation by providing students with opportunities to engage in impactful research projects. The university's supportive ecosystem nurtures entrepreneurial growth with access to resources and incubation facilities."
    },
    {
        title: "Dynamic Campus Life:",
        desc: "At AKG University, student life goes beyond academics. The campus hosts a variety of engaging events that promote holistic development and allow students to discover and nurture their inherent talents."
    },
    {
        title: "Scholarships and Financial Support:",
        desc: "To ensure that quality education is accessible to deserving students, AKG University offers a range of scholarship programs and financial assistance options."
    },
    {
        title: "Strong Return on Investment (ROI):",
        desc: "With an affordable fee structure and excellent starting salary packages, AKG University offers a promising return on investment, making it a smart choice for aspiring students."
    }
];



const AkgAdvantages = () => {

    return (
        <>
            <div className="px-3">
                <h2 className="text-4xl font-novaReg mb-9">Own the Edge: <br /> Study at AKG University</h2>
                {advtdata.map((advantage, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-3xl font-novaReg mb-2">{advantage.title}</h3>
                        <p className="mb-4 font-novaReg">{advantage.desc}</p>
                    </div>
                ))}
            </div> 
        </>
    );
}

export default AkgAdvantages;
