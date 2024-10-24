import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import Journals from "./Journals";

const Button = {
    name: "Apply Now",
    Link: "",
};

const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
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
                <Header title={"Journals"} Button={Button} gradient={"bg-gradient-to-r from-gray-900 to-zinc-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 gap-10">
                    <div className="col-span-9 max-md:col-span-12">
                        <Journals />
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