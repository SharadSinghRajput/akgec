import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import SupportFacilities from "./Gallery";
import Gallery from "./Gallery";

const Button = {
    name: "Apply Now",
    Link: "",
};

const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" }
]

const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header title={"Gallery"} Button={Button} gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
                <Gallery />
            </div>
        </>
    )
}


export default Home;