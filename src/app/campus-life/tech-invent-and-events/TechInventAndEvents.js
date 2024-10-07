import Card from "@/Components/Card";
import EventTabs from "@/Components/EventTabs";

const eventsData = [
    {
        img: '/image/campus-life/convocation.jpg',
        title: 'Master of Business Administration (MBA)',
        desc: 'A comprehensive program designed to develop business skills and leadership qualities.'
    },
    {
        img: '/image/campus-life/convocation.jpg',
        title: 'Master of Computer Applications (MCA)',
        desc: 'A postgraduate program focused on computer applications and software development.'
    },
    {
        img: '/image/campus-life/convocation.jpg',
        title: 'Bachelor of Technology (BTech)',
        desc: 'An undergraduate degree that provides a solid foundation in engineering principles.'
    },
    {
        img: '/image/campus-life/convocation.jpg',
        title: 'Master of Technology (MTech)',
        desc: 'An advanced degree focusing on specialized areas of technology and engineering.'
    },
    {
        img: '/image/campus-life/convocation.jpg',
        title: 'Post Graduate Diploma in Management',
        desc: 'A diploma program designed for students looking to enhance their managerial skills.'
    },
    {
        img: '/image/campus-life/convocation.jpg',
        title: 'Ph.D. in Engineering and Technology',
        desc: 'A research-oriented program for candidates pursuing a career in academia and research.'
    }
];

const TechInventAndEvents = () => {

    return (
        <>
            <section className="relative bg-BG30 bg-center bg-no-repeat bg-cover h-[90vh]">
                <div className="max-w-7xl mx-auto px-3">
                    <div className="absolute inset-0 flex">
                        <div className="w-1/2 h-full"></div>
                        <div className="w-1/2 bg-orange-300 opacity-90 h-full flex items-center justify-center flex-col">
                            <div className="max-w-xl">
                                <h2 className="text-6xl font-novaReg uppercase mb-3">Unleash <span className="font-semibold text-white">Innovation at</span> Tech Invent 2024</h2>
                                <h6 className="font-novaReg text-2xl border-y py-3 border-gray-600 text-center">Where Ideas Meet, and Futures are Created</h6>
                                <p className="mt-3 font-novaSemi text-center">Experience groundbreaking inventions and cutting-edge technologies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white">
                <div className="max-w-[1400px] mx-auto px-3 py-10">
                    <EventTabs />
                    <div className='max-w-[1400px] max-2xl:max-w-6xl max-xl:max-w-5xl max-lg:max-w-3xl mx-auto grid grid-cols-12 gap-8 py-10'>
                        {eventsData?.map((event, index) => (
                            <Card key={index} img={event.img} title={event.title} desc={event.desc} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TechInventAndEvents;
