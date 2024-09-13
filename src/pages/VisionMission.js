import Header from "./Components/Header";
import SideBar from "./Components/SideBar";

const SideBarLink = [
    {name: "Our Identity" , link : "/overview"},
    {name: "Leadership" , link : ""},
    {name: "Leadership" , link : ""},
    {name: "Governance" , link : ""},
    {name: "Recognition and Approvals" , link : ""},
    {name: "Awards and Rankings" , link : ""},
    {name: "Institution Social Responsibility" , link : ""}
]

export default function Example() {
    return (
        <>
         <div className="bg-white">
            <Header title={"Vision and Mission"} gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
            <section className="w-full max-w-7xl mx-auto grid grid-cols-12 pt-24 gap-10">
                <div className="col-span-9 max-md:col-span-12">
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
                        <div className="grid grid-cols-2 w-full border border-gray-300 shadow-lg mb-5">
                            <div className="col-span-1">
                                <div className="flex w-full h-full flex-col justify-center items-start p-5">
                                    <h2 className="text-3xl font-normal mb-4">Mission</h2>
                                    <p className="text-sm font-light text-gray-600 max-w-[350px] ">
                                        We strive to provide and maintain academic environment and systems, enabling maximum learning to produce competent professionals. We also aim at achieving this through transparent academic and administrative policies in the college. We intend to provide conducive atmosphere for research, development and consultancy services to our faculty at national and international level.
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
                                <div className="flex w-full h-full flex-col justify-center items-start p-5">
                                    <h2 className="text-3xl font-normal mb-4">Quality Policy</h2>
                                    <p className="text-sm font-light text-gray-600 max-w-[350px] ">
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
                </div>
                <div className="col-span-3 max-md:col-span-12">
                    <SideBar title={"About Us"} LinkList={SideBarLink} />
                </div>
            </section>
        </div>

        </>
    );
}
