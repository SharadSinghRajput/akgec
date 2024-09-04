const posts = [
    {
        id: 1,
        title: 'Pursue a Cutting-Edge B.Tech Degree at AKG College',
        href: '#',
        description: 'In today’s technology-driven world, a Bachelor of Technology (B.Tech) degree has become a gateway to numerous exciting career opportunities. AKG College, renowned for its excellence in engineering education, offers a B.Tech program designed to equip students with the skills and knowledge necessary to excel in the competitive tech industry.',
        imageUrl: '/image/article/Btech-article.webp',
        tag1: 'BTECH',
        tag2: 'College',
    },
    {
        id: 1,
        title: 'Advance Your Career with an M.Tech Degree at AKG College',
        href: '#',
        description: 'For engineering graduates looking to specialize and advance their careers, a Master of Technology (M.Tech) degree is an excellent choice. AKG College offers a comprehensive M.Tech program that provides in-depth knowledge and research opportunities in various engineering fields.',
        imageUrl: '/image/article/Mtech-article.webp',
        tag1: 'MTECH',
        tag2: 'College',
    },
    {
        id: 1,
        title: 'Master the World of IT with an MCA Degree from AKG College',
        href: '#',
        description: 'In the rapidly evolving field of Information Technology (IT), a Master of Computer Applications (MCA) degree can provide the expertise needed to succeed. AKG College offers an MCA program designed to develop skilled IT professionals who are ready to tackle the challenges of the digital age.',
        imageUrl: '/image/article/MCA-article.webp',
        tag1: 'MCA',
        tag2: 'College',
    },
];


export default function ResearchEnvironment() {
    return (
        <div className="bg-white">
            <div className="max-w-[1350px] mx-auto py-10 mt-10  ">
                <div className="mx-auto flex justify-center items-center flex-col text-center">
                    <h2 className="text-4xl font-light tracking-tight text-gray-700">Explore Our Insights & Stories</h2>
                    <p className="mt-2 text-xl font-light leading-8 text-gray-600 text-center w-[80%] mb-10">
                        Dive into a collection of in-depth articles and blogs that spark thought, inspire action, and keep you informed on the latest trends and ideas.
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-3 max-md:grid-cols-1">
                    {posts.map((post) => (
                        <article key={post.id} className="border rounded-md flex flex-col items-start justify-between pb-4 hover:shadow-xl">
                            <div className="grid grid-cols-2 gap-x-10 p-4 ml-8 mt-8 text-xs md:text-xs font-light">
                                <p>{post.tag1}</p>
                                <p>{post.tag2}</p>
                            </div>
                            <div className="relative w-full h-80">
                                <img
                                    alt=""
                                    src={post.imageUrl}
                                    className="w-full rounded-lg h-3/4 bg-gray-100 object-cover"
                                />
                            </div>
                            <div className="">
                                <h3 className="relative px-8 text-lg font-light leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 px-8 mb-8 text-xs text-gray-600">{post.description}</p>
                                <a
                                    href={post.href}
                                    className="text-xs font-bold px-8 text-black hover:text-blue-500"
                                >
                                    Read More &#8594;
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}