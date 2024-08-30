const people = [
    {
        name: 'NAAC',
        fullName: 'National Assessment and Accreditation Council (NAAC)',
        imageUrl: '/image/NAAC_LOGO.png',
        bio: 'The only engineering college in Uttar Pradesh (AKTU) accredited by NAAC with the highest grading of A++.',
    },
    {
        name: 'AICTE',
        fullName: 'All India Council for Technical Education (AICTE)',
        imageUrl: '/image/AICTE.png',
        bio: 'Approval of extension for Engineering and Technology Programs for the Academic Year 2024-25 granted vide AICTE letter no. F.No. Northern/1-43662770049/2024/EOA dated 20-May-2024 addressed to the Principal Secretary (Tech. Edu.), Govt. of Uttar Pradesh.',
    },
    {
        name: 'AKTU',
        fullName: 'Abdul Kalam Technical University (AKTU)',
        imageUrl: '/image/AKTU.png',
        bio: 'Affiliation letter by AKTU for the academic year 2023-24 granted vide AKTU letter no. AKTU/RO/AS/2022/1891(027) dated 24-September-2023 addressed to the Director, Ajay Kumar Garg Engineering College.',
    },
    {
        name: 'NBA',
        fullName: 'National Board of Accreditation',
        imageUrl: '/image/nba.png',
        bio: 'Five B.Tech. branches in CSE, ECE, EN, IT & ME are accredited for the period of three year w.e.f. academic year 2022-23 To 2024-25.',
    },
    // More people...
]

export default function Example() {
    return (
        <div className="">
            <ul
                role="list"
                className="grid grid-cols-2 gap-10"
            >
                {people.map((person) => (
                    <li key={person.name} className="flex flex-col col-span-1 max-lg:col-span-2 gap-6 xl:flex-row border p-4 justify-start items-start">
                        <img
                            alt=""
                            src={person.imageUrl}
                            className="aspect-[4/5] w-32 flex rounded-2xl object-contain mx-auto lg:mx-0 lg:flex lg:items-center lg:justify-center"
                        />

                        <div className="flex-auto">
                            <h3 className="text-lg font-medium">{person.name}</h3>
                            <p className="text-sm text-gray-600">{person.fullName}</p>
                            <p className="mt-4 text-sm font-light  text-gray-600">{person.bio}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}