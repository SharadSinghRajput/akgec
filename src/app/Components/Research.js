const stats = [
    { id: 1, name: 'STUDENTS PLACED (2021-22)', value: '2000+' },
    { id: 2, name: 'STUDENTS IN UNIV. MERIT LIST', value: '213' },
    { id: 3, name: 'STUDENTS GRADUATED', value: '19K+' },
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
export default function Example() {
    return (
        <section className="bg-gray-900 py-24">
            <div className="px-6 lg:px-8">
                <h2 className="text-2xl font-extralight text-center tracking-tight text-white sm:text-3xl">
                Pathways to Success: Explore Our Courses
                </h2>
                <p className="mt-4 text-sm mx-auto max-w-3xl  text-gray-300 font-normal text-center">
                Ajay Kumar Garg Engineering College consistently excels in academics and placements. It stands out as the first and only institution in UP to receive the Academic Excellence Award for Best Engineering College in UPTU from the Governor of UP for two consecutive years.
                </p>
                <div className="mx-auto max-w-3xl">
                    <dl className="grid grid-cols-2 text-center lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col py-4">
                                <dd className="order-first text-2xl font-normal tracking-tight text-gray-100">
                                    {stat.value}
                                </dd>
                                <dt className="text-[10px] text-gray-100">{stat.name}</dt>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-lg:gap-2 max-md:grid-cols-1" >
                    {posts.map((post) => (
                        <article key={post.id} className="relative isolate bg-gray-900">
                            <img alt="" src={post.imageUrl} className="h-52 w-full rounded-t-md object-cover" />
                            <div className="bg-white px-6 py-3 rounded-b-md">
                                    <h3 className="text-sm font-semibold leading-5 text-gray-900">
                                        {post.title}
                                    </h3>
                                <div className="flex justify-between items-center">
                                    <p className="text-[10px]">{post.description}</p>
                                    <a
                                        href={post.href}
                                        className="text-xs flex justify-end font-medium text-blue-600 hover:text-blue-500"
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
