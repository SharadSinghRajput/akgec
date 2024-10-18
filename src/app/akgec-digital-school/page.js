import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import Breadcrumb from "@/Components/Breadcrumb";
import AKGECDigitalSchool from "./AKGECDigitalSchool";

const Button = {
    name: "Apply Now",
    Link: "",
};

const BreadCrumb = [
    {
        name: "AKGEC Digital School",
        Link: "#",
    },
    // {
    //     name: "Support Facilities",
    //     Link: "#",
    // }
]

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
                <Header title={"AKGEC Digital School"} Button={Button} gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
                <div className="w-full max-w-[1400px] pl-2 mt-20 mx-auto ">
                    <Breadcrumb data={BreadCrumb} />
                </div>
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 gap-10">
                    <div className="col-span-9 max-md:col-span-12">
                        <AKGECDigitalSchool />
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