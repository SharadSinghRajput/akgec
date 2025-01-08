import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import Auditorium from "./Auditorium";
 
import Breadcrumb from '@/Components/Breadcrumb';
const BreadCrumb = [
    {
        name: "Admissions",
        Link: "#",
    },
    {
        name: "Faqs",
        Link: "#",
    }
]

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
        <div className="bg-gray-200">
            <div className="bg-PaperBackground ">
                <div className="bg-white/80">
                    <Header title={"Auditorium"} gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
                    <div className="w-full max-w-[1400px] pl-5 mt-20 mx-auto ">
                        <Breadcrumb data={BreadCrumb} />
                    </div>
                    <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 max-sm:py-5 gap-8 px-4 max-sm:px-2 max-sm:gap-0">
                        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
                            <Auditorium/>
                        </div>
                        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
                            <SideBar title={"About Us"} LinkList={SideBarLink} />
                        </div>
                    </section>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
