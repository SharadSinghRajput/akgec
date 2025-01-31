import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import PlacementHighlights from "./PlacementHighlights";

const SideBarLink = [
    { name: "About Placements", link: "/placements" },
    { name: "Dept. of Career Planning & Development", link: "/placements/department-of-career-development" },
    { name: "Top Placement", link: "/placements/top-placement" },
    { name: "Placement Highlights", link: "/placements/placement-highlights" },
    { name: "Placement Policy", link: "/placements/placement-policy" },
    { name: "Our Leading Recruiters", link: "/placements/our-leading-recruiters" },
    { name: "Contact Placement Cell", link: "/placements/contact-placement-cell" }
]

export const Home = () => {
    return (
        <>
            <div className="bg-[#f2f6ff]">
                <Header title={"Placement Highlights"} subHeading={"Celebrating success, shaping futures! 🚀✨"} bg="/image/building/building3.webp" gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 gap-8 px-4 max-sm:py-8 max-sm:px-2 max-sm:gap-0">
                    <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
                        <PlacementHighlights />
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