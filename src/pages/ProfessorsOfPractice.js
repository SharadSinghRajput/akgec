
import Image from "next/image"
import Header from "./Components/Header"

const professors = [
    {
        name: "Dr. Lokesh Varshney",
        title: "HOD",
        affiliation: "Ph.D. (IIT-BHU)",
        department: "AEROSPACE ENGINEERING",
        institute: "UNIVERSITY INSTITUTE OF ENGINEERING (UIE)",
        domain: "Launch, planning and evaluation of Geostationary Satellite Systems",
        imageUrl: "/placeholder.svg?height=100&width=100",
    },
    {
        name: "Prof. V.K. Parashar",
        title: "Professor of Practice",
        affiliation: "Lt. Governor of Puducherry, Govt. of India",
        department: "HUMANITIES AND ARTS",
        institute: "UNIVERSITY INSTITUTE OF LIBERAL ARTS AND HUMANITIES (UILAH)",
        domain: "Public Administration, Creative and Reformative Policing and Prison Management",
        imageUrl: "/placeholder.svg?height=100&width=100",
    },
    {
        name: "Dr. Anil Kumar Rai",
        title: "Professor of Practice",
        affiliation: "Senior Vice President, DSM",
        department: "MANAGEMENT",
        institute: "UNIVERSITY SCHOOL OF BUSINESS (USB)",
        domain: "Building high performance teams, defining strategy, and managing operations in large, global, and matrixed environments",
        imageUrl: "/placeholder.svg?height=100&width=100",
    },
]

const ProfessorsOfPractice = () => {
    return (
        <>
            <Header bg="/image/professors-bg.jpg" height="h-[400px] md:h-[500px] lg:h-[600px]" gradient={"bg-gradient-to-r from-zinc-900 to-transparent-900/40"} />
            <div className="min-h-screen bg-orange-400 p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="relative text-center">
                        <h1 className="relative text-3xl font-novaReg text-white mb-2 z-10 inline-block">
                            Professors of Practice
                        </h1>
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-full max-w-72 h-2 rounded-full bg-gray-800"></div>
                    </div>
                    <p className="text-white text-center max-sm:text-sm mb-8">Mentors currently associated with Chandigarh University</p>
                    <div className="relative mb-8">
                        <input
                            type="text"
                            placeholder="Search Professors of Practice"
                            className="w-full py-3 px-4 pr-12 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {professors.map((professor, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <Image
                                        src={professor.imageUrl}
                                        alt={professor.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full mr-4"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold">{professor.name}</h3>
                                        <p className="text-sm text-gray-600">{professor.title}</p>
                                        <p className="text-sm text-gray-600">{professor.affiliation}</p>
                                    </div>
                                </div>
                                <div className="text-sm">
                                    <p className="font-semibold">{professor.department}</p>
                                    <p className="text-gray-600">{professor.institute}</p>
                                </div>
                                <div className="mt-4">
                                    <h4 className="font-semibold">Domain:</h4>
                                    <p className="text-sm">{professor.domain}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfessorsOfPractice