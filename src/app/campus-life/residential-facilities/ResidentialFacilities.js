import Image from "next/image";

const hostels = [
    {
        img: "/image/infrastructure/building-1.webp",
        title: "Elysium Residence",
        desc: "Elysium Residence offers a nurturing environment for students, with spacious rooms and communal spaces that foster friendships and collaboration.",
    },
    {
        img: "/image/infrastructure/building-2.webp",
        title: "Harmony Hostel",
        desc: "Harmony Hostel combines modern design with comfort, featuring well-equipped facilities and a vibrant community atmosphere for all residents.",
    },
    {
        img: "/image/infrastructure/building-3.webp",
        title: "Tranquil Stay",
        desc: "Tranquil Stay provides a serene ambiance for students looking for a peaceful living environment, complete with study lounges and recreational areas.",
    },
    {
        img: "/image/infrastructure/building-4.webp",
        title: "Safe Haven Hostel",
        desc: "Safe Haven Hostel prioritizes security and comfort, offering round-the-clock support and amenities to ensure a worry-free stay for students.",
    },
    {
        img: "/image/infrastructure/building-5.webp",
        title: "Unity House",
        desc: "Unity House is designed for students to thrive, featuring collaborative workspaces and leisure activities that promote teamwork and bonding.",
    },
    {
        img: "/image/infrastructure/building-6.webp",
        title: "Explorer's Lodge",
        desc: "Explorer's Lodge caters to adventurous spirits, providing a dynamic living experience with various events and outings to explore the surroundings.",
    },
];

const ResidentialFacilities = () => {
    return (
        <div className="w-full max-w-[1400px] mx-auto     py-8">
            <div className="mb-4 flex justify-between">
                <h1 className="text-4xl font-novaReg  my-auto">Residential Facilities</h1>
                <button className="bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700 border-red-200 py-3 px-6 rounded-3xl">
                    Hostel Manual 2024
                </button>
            </div>
            <p className="mb-4 text-gray-600">
            AKGEC University offers on-campus accommodation to students, fostering a supportive and inclusive residential community. Hostels are available on a first-come, first-served basis and provide comfortable lodging and dining facilities for both male and female students. Each hostel is managed by dedicated wardens and faculty supervisors who prioritize the well-being and safety of residents, ensuring a well-rounded living experience with all necessary amenities to support students' academic and personal growth.
            </p>
            <p className="mb-6 text-gray-600">
            AKGEC University organizes a diverse array of cultural, athletic, and social events to enrich students' campus life. Beyond the various interactive spaces on campus, each hostel features well-equipped common rooms where students can gather for daily interactions, fostering camaraderie and a sense of community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hostels.map((hostel, index) => (
                    <div key={index} className="bg-white flex flex-col justify-between shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <img
                            src={hostel.img}
                            alt={hostel.title}
                            className="w-full h-48 object-cover object-center mb-6 "
                        />
                        <div className="px-4">
                            <h2 className="text-lg font-semibold mb-2 hover:text-red-500">{hostel.title}</h2>
                            <div className="w-24 h-1 bg-red-300 mb-2"></div>
                        </div>
                        <p className="text-sm p-4">{hostel.desc}</p>
                        <div className="flex justify-between p-4">
                            <button className="hover:text-blue-400">Read More</button>
                            <button className="border border-blue-400 py-2.5 px-5 rounded-3xl hover:bg-blue-500">Book Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResidentialFacilities;
