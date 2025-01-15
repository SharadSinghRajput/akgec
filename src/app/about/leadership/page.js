import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import LeaderShip from "./LeaderShip";


const SideBarLink = [
    {name: "Our Identity" , link : "/overview"},
    {name: "Leadership" , link : ""},
    {name: "Governance" , link : ""},
    {name: "Recognition and Approvals" , link : ""},
    {name: "Awards and Rankings" , link : ""},
    {name: "Institution Social Responsibility" , link : ""}
]

export const Home = () => {
    return (
        <>
        <div className="bg-gray-100">
        <Header title={"Leadership"} bg="/image/building/building5.webp" gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
            <section className="w-full max-w-[1400px] max-lg:max-w-3xl max-md:max-w-xl max-sm:max-w-md mx-auto grid grid-cols-12 py-20 max-sm:py-2 gap-10 px-2 max-sm:gap-0">
                <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
                    <LeaderShip />
                </div>
                <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
                    <SideBar title={"About Us"} LinkList={SideBarLink} />
                </div>
            </section>
        </div>
        </>
    )
}

export default Home;