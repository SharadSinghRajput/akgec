export default function Example() {
    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 w-full border border-gray-300 shadow-lg mb-5">
                <div className="col-span-1">
                    <div className="flex w-full h-full flex-col justify-center items-start p-5">

                        <h2 className="text-3xl font-normal mb-4">Vision</h2>
                        <p className="text-sm font-light text-gray-600 max-w-[350px] ">
                            To be globally recognized as a Centre of Excellence for Research, Innovation,
                            Entrepreneurship and disseminating knowledge by providing inspirational learning
                            to produce professional leaders for serving the society.
                        </p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="w-full relative flex justify-end items-end">
                        <div className="absolute bg-gradient-to-r from-white to-blue-800/50 w-full h-full left-0 top-0" />
                        <img
                            alt=""
                            src="/image/target.png"
                            className="w-full max-w-sm object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between p-8 border border-gray-300 bg-gray-200 mb-8">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-normal mb-4">Mission</h2>
                    <p className="text-base text-gray-600">
                        We strive to provide and maintain academic environment and systems, enabling maximum learning to produce competent professionals. We also aim at achieving this through transparent academic and administrative policies in the college. We intend to provide conducive atmosphere for research, development and consultancy services to our faculty at national and international level.
                    </p>
                </div>
                <div className="justify-center hidden md:block">
                    <img
                        alt=""
                        src="/image/mission.jpg"
                        className="w-full max-w-sm object-cover"
                    />
                </div>
            </div>
            <div className="w-full max-w-6xl items-center justify-center p-8 border border-gray-300 mb-8">
                <div className="">
                    <h2 className="text-3xl font-normal mb-4">Quality Policy</h2>
                    <p className="text-base text-gray-600">
                        To provide and continually improve academic environment and systems which give total satisfaction and enable students to develop their full potential and mature into competent professionals and responsible members of society.
                    </p>
                </div>
            </div>
        </div>
    );
}
