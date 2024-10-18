import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import Breadcrumb from "@/Components/Breadcrumb";
import IssuanceOfCertificatesForPassoutStudents from "./IssuanceOfCertificatesForPassoutStudents";

const Button = {
    name: "Apply Now",
    Link: "",
};

const BreadCrumb = [
    {
        name: "Issuance of certificates for passout students",
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
                <Header title={"Issuance of Certificates for Passout Students"} Button={Button} gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
                <div className="w-full max-w-[1400px] pl-3 mt-20 mx-auto ">
                    <Breadcrumb data={BreadCrumb} />
                </div>
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 gap-10">
                    <div className="col-span-9 max-md:col-span-12">
                        <IssuanceOfCertificatesForPassoutStudents />
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