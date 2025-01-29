import { CircleArrowRight } from "lucide-react";

const membersData = [
    {
        name: "Dr. Nitisha Shrivastava",
        role: "Dean, Students Welfare",
        image: "/image/Faculty/Dr. Nitisha Shrivastava.jpg",
    },
    {
        name: "Dr. J. G. Yadav",
        role: "Director, Sports",
        image: "/image/Faculty/Dr. J. G. Yadav.jpg",
    },
    {
        name: "Prof. V.K. Parashar",
        role: "Director, BCA",
        image: "/image/Faculty/Prof. V.K. Parashar.jpg",
    },
];

export default function StudentWelfare() {
    return (
        <div className="px-4 py-3 max-sm:px-2 max-sm:py-2">
            <h2 className="text-4xl font-novaReg text-gray-900 mb-6 max-md:text-2xl max-md:mb-4 max-sm:text-xl max-sm:mb-3 max-sm:font-novaSemi">University Frameworks for Quality Learning</h2>
            <div className="mt-8 max-md:mt-5 max-sm:mt-3">
                <h3 className="text-xl font-novaSemi text-gray-900 mb-6 max-md:mb-4 max-sm:text-lg max-sm:mb-3">Members</h3>
                <div className="grid grid-cols-3 gap-6 max-xl:grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-4 max-sm:grid-cols-1 max-sm:gap-3">
                    {membersData?.map((member) => (
                        <div key={member.name} className="bg-white overflow-hidden shadow transition hover:duration-300 hover:ease-in-out hover:shadow-2xl">
                            <div className="py-8 px-4 max-md:py-5 max-md:px-3 max-sm:py-4 max-sm:px-2">
                                <div className="flex items-center justify-center">
                                    <div className="h-34 w-34 rounded-full border-4 border-[#E7EBFB]">
                                        <img className="h-32 w-32 rounded-full" src={member.image} alt={member.name} />
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <h4 className="text-lg font-novaBold text-gray-900 mb-4 max-sm:text-base max-sm:mb-2">{member.name}</h4>
                                    <div className="">
                                        <p className="text-sm text-gray-500 mb-6 max-sm:mb-2">{member.role}</p>
                                    </div>
                                </div>
                                <div className="mt-6 w-full flex items-center justify-end max-sm:mt-3">
                                    <CircleArrowRight className="h-8 w-8 text-[#fc654c] items-end" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
