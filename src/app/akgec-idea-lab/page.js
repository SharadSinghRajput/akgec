import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import IdeaLab from "./IdeaLab";


const SideBarLink = [
    {name: "Our Identity" , link : "/overview"},
    {name: "Leadership" , link : ""},
    {name: "Governance" , link : ""},
    {name: "Recognition and Approvals" , link : ""},
    {name: "Awards and Rankings" , link : ""},
    {name: "Institution Social Responsibility" , link : ""}
]

const Home = () => {
    return (
        <>
        <div className="bg-gray-100">
        <Header title={"AKGEC Idea Lab"} gradient={"bg-gradient-to-r from-black to-blue-900/40"} />
            <section className="w-full max-w-[1400px] mx-auto py-20 max-sm:py-2 px-2">
                    <IdeaLab />
            </section>
        </div>
        </>
    )
}

export default Home;