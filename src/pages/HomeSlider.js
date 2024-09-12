const people = [
    {
        img: '/image/slider-home/akg-slider-img-1.jpg' // Use the path relative to the `public` directory
    },
    // More people...
];

export default function HomeSlider() {
    return (
        <div className="bg-white">
            <div className="w-full mx-auto">
                <div className="">
                    {people.map((person, index) => (
                        <div key={index} className="relative flex-shrink-0 w-screen h-auto flex flex-col">
                            <img
                                alt=""
                                src={person.img}
                                className="w-full h-auto object-cover"
                            />
                            <div className="flex flex-col absolute text-cyan-50 bottom-10 left-10 p-4 space-y-2">
                                <h1 className="text-lg sm:text-sm md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black">
                                    Ajya Kumar<br/>Garg University
                                </h1>
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                    Since 1998, AkGEC offers <br/>top-notch professional education
                                </p>
                            </div>
                            <button className="text-[8px] sm:text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-xl absolute bottom-10 right-10 px-4 py-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white rounded-lg shadow-lg hover:from-yellow-500 hover:via-orange-500 hover:to-red-600">
                                Apply Today
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

