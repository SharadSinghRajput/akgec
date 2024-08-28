const governor = [
    { title: "BOARD OF GOVERNORS" },
    {
        name: 'Sh. Ashok Pal',
        role: 'Chairman',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. D. P. Garg',
        role: 'Vice Chairman',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. Rakesh Garg',
        role: 'Secretary',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. A.N. Gupta',
        role: 'Joint Secretary',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. Vinay Garg',
        role: 'Treasurer',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. S.K. Gupta',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Prof. S.K. Kak',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. I.C. Agarwal',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. R.P Khaitan',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'AICTE Nominee',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'AKTU Nominee',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. Hemant Ahuja',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. Rahul Sharma',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'U.P. State Nominee',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. R.K. Agarwal',
        role: 'Director General & Convener',
        imageUrl: '/image/6690538.png'
    },
]

const council = [
    { title: "MEMBERS OF GOVERNING COUNCIL" },
    {
        name: 'Sh. Ashok Pal',
        role: 'Chairman',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. Vinay Garg',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. Rakesh Garg',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Dr. R.K. Agarwal',
        role: 'Director General & Convenor',
        imageUrl: '/image/6690538.png'
    },
    {
        name: 'Sh. S.K. Gupta',
        role: 'Member',
        imageUrl: '/image/6690538.png'
    },
]


export default function Example() {
    return (
        <div className="py-24 sm:py-32 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="border-b-4 border-gray-300 pb-2">
                    <h2 className="text-3xl font-bold text-center tracking-tight text-gray-700 sm:text-4xl">{governor[0].title}</h2>
                </div>

                <ul
                    role="list"
                    className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
                >
                    {governor.slice(1).map((person) => (
                        <li key={person.name} className="border shadow-xl rounded-lg p-4 text-center">
                            <img alt="" src={person.imageUrl} className="aspect-[14/13] w-full rounded-2xl object-contain" />
                            <h3 className="mt-6 text-lg font-semibold text-gray-500 leading-8 tracking-tight">{person.name}</h3>
                            <p className="text-base leading-7 text-gray-500">{person.role}</p>

                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-20 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="border-b-4 border-gray-300 pb-2">
                    <h2 className="text-3xl font-bold text-center tracking-tight text-gray-700 sm:text-4xl">{council[0].title}</h2>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
                >
                    {council.slice(1).map((person) => (
                        <li key={person.name} className="border shadow-xl rounded-lg p-4 text-center">
                            <img alt="" src={person.imageUrl} className="aspect-[14/13] w-full rounded-2xl object-contain" />
                            <h3 className="mt-6 text-lg font-semibold text-gray-600 tracking-tight">{person.name}</h3>
                            <p className="text-base  text-gray-500">{person.role}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
