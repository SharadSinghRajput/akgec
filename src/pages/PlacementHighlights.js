export default function PlacementHighlights() {
    const highlights2023 = [
        { salary: "5 LPA", students: 1024 },
        { salary: "5-10 LPA", students: 306 },
        { salary: "10-20 LPA", students: 53 },
        { salary: "20 LPA", students: 5 },
    ];

    const highlights2022 = [
        { salary: "5 LPA", students: 1412 },
        { salary: "5-10 LPA", students: 507 },
        { salary: "10-20 LPA", students: 41 },
        { salary: "20 LPA", students: 38 },
    ];

    const students = [
        {
            name: "Rahul Kumar",
            companyLogo: "/image/slider-home/ageas-federal.webp",
            imgSrc: "/image/slider-home/54.jpeg",
            batch: "B.Tech 2021-25",
        },
        {
            name: "Bhupendra Birla",
            companyLogo: "/image/slider-home/ageas-federal.webp",
            imgSrc: "/image/slider-home/54.jpeg",
            batch: "B.Tech 2021-25",
        },
        {
            name: "Kritika Singh",
            companyLogo: "/image/slider-home/ageas-federal.webp",
            imgSrc: "/image/slider-home/54.jpeg",
            batch: "B.Tech 2021-25",
        },
        {
            name: "Shushant Kumar",
            companyLogo: "/image/slider-home/ageas-federal.webp",
            imgSrc: "/image/slider-home/54.jpeg",
            batch: "B.Tech 2021-25",
        },
    ];
    const stats = [
        { id: 1, name: 'Creators on the platform', value: '5' },
        { id: 2, name: 'Flat platform fee', value: '10' },
        { id: 3, name: 'Uptime guarantee', value: '5-10' },
        { id: 4, name: 'Paid out to creators', value: '20' },
    ]

    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 p-4 bg-white ">
               
                <div className="bg-blue-900 max-h-full text-white p-4 rounded-lg mx-auto w-full sm:w-4/5 md:w-3/5 lg:w-2/5">
                    <p className="text-xl font-bold text-center mb-3">
                        Placement Highlights <span className="text-yellow-400">2022</span>
                    </p>
                    <dl className="grid max-w-lg mx-auto grid-cols-1 gap-3 sm:grid-cols-2">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex items-center gap-x-3">
                                <div className="relative flex flex-col items-center">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full opacity-50"></div>
                                    </div>
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="flex flex-col items-center justify-center w-24 h-24">
                                            <dd className="text-3xl font-semibold tracking-tight text-white text-center">
                                                {stat.value}
                                                <span className="block text-sm sm:text-sm md:text-base lg:text-base xl:text-base font-normal">
                                                    LPA
                                                </span>
                                            </dd>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-l border-white pl-3">
                                    <dt className="text-xs leading-5 text-white">{stat.name}</dt>
                                </div>
                            </div>
                        ))}
                    </dl>

                    <p className="text-xl font-bold text-center mt-6 mb-3">
                        Placement Highlights <span className="text-yellow-400">2022</span>
                    </p>
                    <dl className="grid max-w-lg mx-auto grid-cols-1 gap-3 sm:grid-cols-2">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex items-center gap-x-3">
                                <div className="relative flex flex-col items-center">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="sm:w-14 sm:h-14 w-20 h-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full opacity-50"></div>
                                    </div>
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="flex flex-col items-center justify-center w-24 h-24">
                                            <dd className="text-3xl text-center">
                                                {stat.value}
                                                <span className="block text-sm sm:text-sm md:text-base lg:text-sm xl:text-base font-normal">
                                                    LPA
                                                </span>
                                            </dd>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-l border-white pl-3">
                                    <dt className="text-base text-center text-white">{stat.name}</dt>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Student Placement Cards */}
                <div className="grid grid-cols-2">
                    {students.map((student, index) => (
                        <div key={index} className="relative max-w-96 max-h-64 w-full h-full shadow-lg">
                            <img src={student.imgSrc} alt={student.name} className="w-full object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
                                <div className="flex items-center">
                                    <img
                                        src={student.companyLogo} // Replace with the company logo URL
                                        alt={student.company}
                                        className="h-14 w-1/3 rounded-2xl mr-2"
                                    />
                                </div>
                                <h3 className="text-base sm:text-base md:text-xl lg:text-xl xl:text-xl font-normal">{student.name}</h3>
                                <p className="text-xs sm:text-xs md:text-base lg:text-base xl:text-base font-normal">{student.batch}</p>
                                <span className="absolute bottom-2 right-2 text-white">
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="h-6 w-6"
                                    >
                                        <path d="M12 4a1 1 0 00-1 1v10.586l-5.293-5.293a1 1 0 00-1.414 1.414l7 7a1 1 0 001.414 0l7-7a1 1 0 10-1.414-1.414L13 15.586V5a1 1 0 00-1-1z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
