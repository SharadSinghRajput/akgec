export default function VisionAndMission() {
    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 w-full border border-gray-300 shadow-lg mb-5">
                <div className="col-span-1">
                    <div className="flex w-full h-full flex-col justify-center items-center">
                        <h2 className="text-4xl w-full text-start font-novaReg mb-4 max-w-[350px]">Vision</h2>
                        <p className="font-novaReg text-gray-600 max-w-[350px] ">
                        To achieve global recognition as a Centre of Excellence in Research, Innovation, and Entrepreneurship, committed to imparting knowledge and inspiring learning that nurtures professional leaders dedicated to serving society.
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
            <div className="grid grid-cols-2 w-full border border-gray-300 shadow-lg mb-5">
                <div className="col-span-1">
                    <div className="flex w-full h-full flex-col justify-center items-center ">
                        <h2 className="text-4xl w-full text-start font-novaReg max-w-[350px] mb-4">Mission</h2>
                        <p className="font-novaReg text-gray-600 max-w-[350px] ">
                            We strive to provide and maintain academic environment and systems, enabling maximum learning to produce competent professionals. We also aim at achieving this through transparent academic and administrative policies in the college.
                        </p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="w-full relative flex justify-end items-end">
                        <div className="absolute bg-gradient-to-r from-white to-blue-800/20 w-full h-full left-0 top-0" />
                        <img
                            alt=""
                            src="/image/mission-1.jpg"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 w-full border border-gray-300 shadow-lg mb-5">
                <div className="col-span-1">
                    <div className="flex w-full h-full flex-col justify-center items-center">
                        <h2 className="text-4xl w-full text-start font-novaReg mb-4 max-w-[350px]">Quality Policy</h2>
                        <p className="font-novaReg text-gray-600 max-w-[350px] ">
                            To provide and continually improve academic environment and systems which give total satisfaction and enable students to develop their full potential and mature into competent professionals and responsible members of society.
                        </p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="w-full relative flex justify-end items-end">
                        <div className="absolute bg-gradient-to-r from-white to-blue-800/20 w-full h-full left-0 top-0" />
                        <img
                            alt=""
                            src="/image/Quality.jpg"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
