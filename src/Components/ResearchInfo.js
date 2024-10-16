const red = [
    {
        title: 'Innovation Hub',
        desc: 'Platform for startups to foster creativity and collaboration'
    },
    {
        title: 'INR 1 Million',
        desc: 'Funding Opportunities'
    },
    {
        title: '100+',
        desc: 'Mentors Available'
    },
    {
        title: 'Venture Capitalists',
        desc: 'Present your startup vision to leading venture capitalists'
    }
];

const ResearchInfo = () => {
    return (
        <section className="w-full bg-primary text-center">
            <div className="max-w-7xl mx-auto px-3">
                <div className="grid grid-cols-4 gap-4 mb-8 px-4">
                    {red.map((item, i) => (
                        <div
                            key={i}
                            className={`py-6 flex flex-col justify-center px-4 text-center ${i % 2 === 0 ? 'bg-primary text-white' : 'bg-secondary'}`}
                        >
                            <h3 className="text-4xl font-novaBold mb-2">{item.title}</h3>
                            <p className="text-sm font-novaReg mb-8">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ResearchInfo