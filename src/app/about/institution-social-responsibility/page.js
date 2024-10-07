import Header from "@/Components/Header";
import InstitutionalSocialResponsibilities from "./InstitutionalSocialResponsibilities.js";


export const Home = () => {
    return (
        <div className="bg-PaperBackground">
        <Header title={<span className="leading-[45px]">Institutional Social <br /> Responsibility</span>} bg="/image/environment-protection/middle-banner.webp" gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
       <InstitutionalSocialResponsibilities />
       </div>
    )
}


export default Home;