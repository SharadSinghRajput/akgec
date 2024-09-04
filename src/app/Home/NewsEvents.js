const posts = [
    {
        id: 1,
        title: 'AICRA 2020 Awards',
        href: '#',
        description:
            'AKGEC has been honored with STEM Award-2020 under India STEM College Award 2020 and Best Robolab Setup during 3rd edition of STEM Contribution Awards & Summit -2020 organized by the All India Council for Robotics & Automation (AICRA) India on 13 February, 2020.',
        imageUrl:
            'https://www.akgec.ac.in/wp-content/uploads/2020/02/Stem2.jpg',

    },
    {
        id: 2,
        title: '“30Hacks” Hackathon organised by Hitachi x GlobalLogic',
        href: '#',
        description:
            'Team VidyutKavach from Ajay Kumar Garg Engineering College was recently selected to participate in the “30Hacks" Hackathon organized by Hitachi x GlobalLogic. The event took place on March 14th and 15th, 2024.',
        imageUrl:
            'https://www.akgec.ac.in/wp-content/uploads/2024/05/Vidyut1.jpg',

    },
    // More posts...
]

export default function NewsEvents() {
    return (
        <div className="bg-gray-100/50 py-10 relative">
            <div className="bg-[#ebebeb] h-[60%] w-full absolute top-0 left-0 -z-10"></div>
            <h2 className="text-5xl font-novaLight text-center text-gray-700">
                Spotlight of Success
            </h2>
            <p className="mt-5 text-2xl leading-none font-novaLight text-center max-w-screen-lg mx-auto text-gray-700">
                From our students clinching global honors to the university soaring in national and international rankings,
                our triumphs consistently illuminate our path in the spotlight.
            </p>
            <div className="mx-auto max-w-[1350px] w-2/3 py-10 ">
                <div className="grid grid-cols-2 max-lg:grid-cols-1">
                    <div className="col-span-1 rounded-xl mr-5 border border-gray-200 hover:shadow-lg bg-white ">
                        <img
                            alt=""
                            src="https://www.akgec.ac.in/wp-content/uploads/2021/06/CFC4.jpeg"
                            className="w-full rounded-xl bg-gray-50 object-cover lg:aspect-auto lg:h-80 md:h-64"
                        />
                        <div className="p-8">
                            <h2 className="text-2xl leading-none font-novaLight">Foundation Stone Laying Ceremony by Hon’ble Chief Minister
                            </h2>
                            <p className="text-base leading-none font-novaLight text-justify mt-5">
                                The UP government’s One District, One Product (ODOP) Programme aims to improve development and production of indigenous and specialized products. Ghaziabad is identified as a hub for manufacturing of General Engineering Products. Many of these manufacturers are small and medium industries that need modernization, machinery and productivity enhancement.
                            </p>
                            <button type="button" className="text-base font-novaBold mt-10" >
                                Read More ►
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1 ml-5 ">
                        <div className="grid grid-cols-1 gap-y-5 h-full">
                            {posts.map((post) => (
                                <article key={post.id} className="relative h-full isolate flex flex-col gap-4 lg:flex-row border border-gray-200 hover:shadow-lg rounded-lg overflow-hidden bg-white">
                                    <div className="mb-4 relative aspect-[16/12] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0 h-full">
                                        <img
                                            alt=""
                                            src={post.imageUrl}
                                            className="absolute h-full w-full object-cover"
                                        />

                                    </div>
                                    <div className="flex flex-col justify-between h-full p-5 ">
                                        <div className="group relative">
                                            <h3 className="text-2xl font-novaLight leading-none">
                                                {post.title}
                                            </h3>
                                            <p className="text-base leading-none font-novaLight mt-5">
                                                {post.description}
                                            </p>
                                            <button
                                                type="button"
                                                className="text-sm font-bold mt-10"
                                            >
                                                Read More ►
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
