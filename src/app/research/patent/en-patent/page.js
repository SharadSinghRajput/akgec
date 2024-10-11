import Header from "@/Components/Header";
 
import EnPatent from "./EnPatent";


const SideBarLink = [
    {name: "Our Identity" , link : "/overview"},
    {name: "Leadership" , link : ""},
    {name: "Leadership" , link : ""},
    {name: "Governance" , link : ""},
    {name: "Recognition and Approvals" , link : ""},
    {name: "Awards and Rankings" , link : ""},
    {name: "Institution Social Responsibility" , link : ""}
]

export const Home = () => {
    return (
        <>
        <div className="bg-gray-100">
        <Header Button={{ name: "Apply Now", Link: "/" }} title={<span className="leading-[45px]">EN Patent</span>} gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
            <section className="w-full max-w-[1400px] mx-auto py-20 ">
                <div className="col-span-9 max-md:col-span-12">
                    <EnPatent />
                </div>
                
            </section>
        </div>
        </>
    )
}


export default Home;