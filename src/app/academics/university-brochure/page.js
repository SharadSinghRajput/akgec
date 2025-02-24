import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import UniversityBrochure from "./UniversityBrochure";

const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" }
]

export const Home = () => {
    return (
        <>
            <div className="bg-gray-300">
                <Header
                    title={"University Brochure"}
                    bgKey="BG1"
                    gradient={"bg-gradient-to-r from-black to-white/"}
                />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 max-sm:py-5 gap-8 max-sm:gap-0 px-4 max-sm:px-2">
                    <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
                        <UniversityBrochure />
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
