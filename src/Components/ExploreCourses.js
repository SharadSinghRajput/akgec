const stats = [
    { id: 1, name: 'Students Placed (2021-22)', value: '2000+' },
    { id: 2, name: 'Students in Univ. Merit List', value: '213' },
    { id: 3, name: 'Students Graduated', value: '19K+' },
    { id: 4, name: 'Departmental Research Groups', value: '8' },
]
const posts = [
    {
        id: 1,
        title: 'Master of Computer Applications (MCA)',
        href: '#',
        description: 'MCA',
        imageUrl: '/image/b.tech_.jpg',
    },
    {
        id: 1,
        title: 'Btech',
        href: '#',
        description: 'CSE, CS, CS&IT, CSE (AI&ML), CSE (DS),CSE',
        imageUrl:
            '/image/voc.jpg',
    },
    {
        id: 1,
        title: 'M.Tech',
        href: '#',
        description: 'CSE, ECE, EN, ME',
        imageUrl: '/image/MCA_300X150.jpg',
    },
]
export default function ExploreCourses() {
    return (
        <section className="bg-primary py-10 sm:py-16 md:py-20">
            <div className="break2:max-w-[1320px] break3:max-w-[1140px] break4:max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[43px] font-novaLight text-center tracking-tight">
                    Explore Our <span className='font-novaSemi bg-gradient-to-r from-red-300 to-teal-500 bg-clip-text text-transparent'>Courses</span>
                </h2>
                <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl lg:text-[22px] leading-snug text-gray-200 mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-screen-lg font-novaLight text-center">
                    Ajay Kumar Garg Engineering College consistently excels in academics and placements. It stands out as the first and only institution in UP to receive the Academic Excellence Award for Best Engineering College in UPTU from the Governor of UP for two consecutive years.
                </p>
                <div className="my-5 mx-auto max-w-6xl">
                    <dl className="grid grid-cols-2 gap-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {stats?.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col py-4">
                                <dd className="order-first text-2xl sm:text-3xl md:text-4xl font-novaLight tracking-tight">
                                    {stat.value}
                                </dd>
                                <dt className="text-xs sm:text-sm max-w-32 leading-none font-novaReg mt-1">{stat.name}</dt>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-5 " >
                    {posts?.map((post) => (
                        <article key={post.id} className="relative bg-gray-900 rounded-lg shadow-md overflow-hidden">
                            <img
                                alt=""
                                src={post.imageUrl}
                                className="h-[180px] sm:h-[220px] md:h-[240px] lg:h-[260px] w-full object-cover"
                            />
                            <div className="bg-white p-4 h-full ">
                                <div className="flex flex-col ">
                                    <h3 className="text-sm md:text-base lg:text-lg font-novaBold text-gray-900">
                                        {post.title}
                                    </h3>
                                    <p className="text-xs md:text-sm font-novaSemi text-gray-800">
                                        {post.description}
                                    </p>
                                    <a
                                        href={post.href}
                                        className="mt-1 text-[12px] sm:text-[13px] md:text-[14px] uppercase font-novaBold text-secondary hover:text-[#3c5686] duration-300 self-end"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>

    )
}
