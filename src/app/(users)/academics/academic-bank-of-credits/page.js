import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import ABC from "./ABC";


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
                <Header 
                    title={<>Academic Bank of Credits (ABC)</>}
                    buttonLink="https://www.abc.gov.in/"
                    buttonType={"link"}
                    buttonText="Go to ABC"
                    gradient={"bg-gradient-to-r from-black to-slate-700/"} bgKey="BG3"/>
                <ABC />
            </div>
        </>
    )
}


export default Home;