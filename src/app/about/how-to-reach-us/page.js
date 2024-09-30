import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import HowToReachUs from "@/app/about/how-to-reach-us/howToReachUs";
import './index.css'

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
                <Header title={"How to Reach Us ?"} gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 gap-3 px-28 max-md:px-5">
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