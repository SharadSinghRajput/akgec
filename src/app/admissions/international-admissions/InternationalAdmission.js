"use client";

import "swiper/css";
import "swiper/css/pagination";
import { LogoSlider, MilestonesSection } from "@/Components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AdmissionsShowcase from "@/Components/AdmissionsShowcase";
import ScholarshipHighlight from "@/Components/ScholarshipHighlight";
import HighlightPlacement from "@/Components/HighlightPlacement";
import OurOffice from "@/Components/OurOffice";
import ResearchFaciliy from "@/Components/ResearchFaciliy";
import SpotlightHighlight from "@/Components/SpotlightHighlight";


const cards = [
    {
        count: "120+",
        title: "Accredited Programs",
        description: (
            <>
                Offering a wide range of accredited programs
                <br />
                across various fields of study.
            </>
        ),
    },
    {
        count: "3000+",
        title: "Students Enrolled",
        description: (
            <>
                A vibrant community of over 3000 students
                <br />
                from diverse backgrounds.
            </>
        ),
    },
    {
        count: "150+",
        title: "Qualified Faculty",
        description: (
            <>
                Home to more than 150 qualified faculty members
                <br />
                dedicated to student success.
            </>
        ),
    },
    {
        count: "50+",
        title: "International Collaborations",
        description: (
            <>
                Partnered with 50+ international universities
                <br />
                for exchange programs and research.
            </>
        ),
    },
    {
        count: "200+",
        title: "Research Projects",
        description: (
            <>
                Involved in over 200 research projects
                <br />
                contributing to various fields of innovation.
            </>
        ),
    },
];

const globalData = [
    {
        id: 1,
        title: "A Global Learning Community",
        content:
            "AKG University embraces a worldwide vision for higher education, reflecting this ethos in every facet of our internationalization strategy. We attract esteemed educators with diverse academic backgrounds who prioritize experiential learning. This commitment ensures that you graduate with a truly global perspective—an attribute highly sought after by employers.",
    },
    {
        id: 2,
        title: "First University with 300+ Partnerships Across 50+ Countries!",
        content:
            "AKG University holds a prominent position in national rankings, evaluating the quality of education, research excellence, affordability, and student achievements. It is the first in its region to establish over 300 global partnerships across more than 50 countries. These collaborations provide students with an international perspective, making them competitive candidates for global job markets.",
    },
    {
        id: 3,
        title: "Exceptional Industry Connections",
        content:
            "Our partnerships with renowned multinational corporations guarantee that you will have continuous professional development and unique opportunities to engage with leading organizations and industry leaders. You will gain exposure to a professional learning environment, state-of-the-art infrastructure, and corporate mentors committed to enhancing your educational experience.",
    },
    {
        id: 4,
        title: "Fostering Growth Through Diversity",
        content:
            "We acknowledge the significant contributions of individuals from various backgrounds. Our diverse student population—comprising students from across India and 30+ countries—promises a culturally enriching experience. You will be encouraged to challenge your perspectives and grow personally and academically. Cultural diversity enhances our student life, academic programs, and campus events.",
    },
    {
        id: 5,
        title: "Innovating Future Education",
        content:
            "In keeping with advanced technological trends and ensuring seamless learning during unprecedented times, AKG University has implemented a state-of-the-art Learning Management System (LMS). This cutting-edge platform not only facilitates engaging and efficient learning experiences for students but also offers a wide array of interactive tools and resources designed to enhance the educational journey.",
    },
];

const InternationalAdmission = () => {

    return (
        <>
            <section className="h-screen w-full bg-BG20 bg-no-repeat bg-cover bg-center bg-indigo-950 bg-blend-multiply bg-opacity-60">
                <div className="flex px-1 md:px-12 lg:px-24">
                    <div className="container max-w-7xl mx-auto flex justify-end max-xl:flex-col-reverse gap-10">
                        <div className="w-full h-screen flex justify-center items-center">
                            <div className="max-w-4xl">
                                <h3 className="text-7xl font-novaBold text-white uppercase text-center mb-4">
                                    Welcome to AKG University
                                </h3>
                                <p className="text-xl font-novaReg text-white text-center mb-7">
                                    AKG University is where innovation meets excellence. From cutting-edge research to a student-centered learning environment, we equip you with the skills and knowledge to excel in a global landscape. Explore our diverse programs and vibrant campus life, where your aspirations become reality.
                                </p>
                                <div className="w-full flex justify-center items-center">
                                    <a href="#" className="flex bg-secondary px-6 py-3 rounded-xl uppercase gap-3 ml-3">
                                        Discover More
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative w-full h-full bg-transparent -mt-[150px]">
                <div className="flex justify-between h-full">
                    {cards.map((card, index) => (
                        <div key={index} className="pl-16 py-5 w-full h-full border-r border-t text-white">
                            <span className="text-4xl font-novaBold">{card.count}</span>
                            <h5 className="text-xl font-novaSemi">{card.title}</h5>
                            <p className={index === 4 ? "text-xs font-novaReg" : "text-sm font-novaReg"}>{card.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <AdmissionsShowcase />
            <LogoSlider />

            <section className="bg-BG28 bg-cover bg-no-repeat bg-top h-[85vh] pt-24 pb-36">
                <div className="max-w-[1400px] mx-auto px-3 scale-x-2">
                    <div className="flex justify-center items-center text-center w-full">
                        <div className="w-7/12">
                            <h2 className="text-4xl font-novaBold text-white mb-4">
                                AKG University - Connecting
                                <br /> to a Global Network!
                            </h2>
                            <p className="text-lg font-novaReg mb-5 text-white">Discover Your Future Today!</p>
                        </div>
                    </div>
                </div>
                <Swiper slidesPerView={4} centeredSlides={true} spaceBetween={20} modules={[Pagination]} className="mySwiper">
                    {globalData.map((door) => (
                        <SwiperSlide key={door.id}>
                            <div className="bg-[#e6e6e6] rounded-2xl overflow-hidden cursor-grab ">
                                <div className="bg-indigo-950 p-2 h-20 flex items-center justify-center">
                                    <h3 className="leading-none text-white text-xl font-novaSemi text-center selection-transparent">{door.title}</h3>
                                </div>
                                <p className="px-10 py-5 text-black mt-4 font-novaLight selection-transparent">{door.content}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="px-3">
                <div className="max-w-4xl mx-auto p-8 text-center">
                    <h1 className="text-2xl font-bold mb-2">AKG UNIVERSITY</h1>
                    <h2 className="text-4xl font-extrabold mb-6">
                        INTERNATIONAL SCHOLARSHIPS
                        <br />
                        (FOR 2024 ADMISSION)
                    </h2>
                    <p className="text-sm leading-relaxed">
                        AKG University offers a range of international scholarships aimed at supporting outstanding students from around the globe. These scholarships are designed to recognize academic excellence and promote cultural
                        diversity within our campus community. Eligibility for these scholarships is based on academic performance, standardized test scores, and the date of admission.
                    </p>
                </div>
                <ScholarshipHighlight heading={"Global Talent"} subheading={"Scholarship"} desc={"For International Students for the Academic"} ugSub={"B.Tech [For International Students]"} pgSub={"MCA [For International Students]"} />
            </section>

            <MilestonesSection />
            <HighlightPlacement />
            <OurOffice />
            <ResearchFaciliy />
            <SpotlightHighlight />
        </>
    );
};

export default InternationalAdmission;
