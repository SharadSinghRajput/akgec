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
            <div className="bg-white">
                <Header title={"Placement Highlights"} subHeading={"Celebrating success, shaping futures! 🚀✨"} bg="/image/building/building3.webp" gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
                <section className="w-full py-20 max-sm:py-8">
                    <PlacementHighlights />
                </section>
            </div>
        </>
    )
}


export default Home;