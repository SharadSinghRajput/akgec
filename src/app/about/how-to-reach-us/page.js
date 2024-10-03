import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import HowToReachUs from "./HowToReachUs";

const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" }
]

export const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header title={<span className="leading-[45px]">How to <br /> Reach Us ?</span>} bg="/image/about/main-banner.png" gradient={"bg-gradient-to-r from-gray-800 to-gray-900/50"} />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 gap-8 px-4 max-sm:px-2">
                    <div className="col-span-9 max-md:col-span-12 ">
                        <HowToReachUs />
                    </div>
                    <div className="col-span-3 max-md:col-span-12">
                        <SideBar title={"About Us"} LinkList={SideBarLink} />
                    </div>
                </section>
            </div>
        </>
    )
}


export default Home;