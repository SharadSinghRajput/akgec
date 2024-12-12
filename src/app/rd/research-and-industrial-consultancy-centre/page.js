import Header from "@/Components/Header";
import ResearchIndustrial from "./ResearchIndustrial";
import SideBar from "@/Components/SideBar";

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
                <Header title={"Research and Industrial Consultancy Centre"} gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 gap-10 max-sm:gap-0 py-20 max-sm:py-2 px-2">
                    <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
                        <ResearchIndustrial />
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
