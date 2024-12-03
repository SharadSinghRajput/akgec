import Header from "@/Components/Header";
import ProfessorsOfPractice from "./ProfessorsOfPractice";

export const Home = () => {
    return (
        <>
        <Header bg="/image/professors-bg.jpg" height="h-[300px] md:h-[500px] lg:h-[700px]" position="top" gradient={"bg-gradient-to-r from-zinc-900 to-transparent-900/40"} />
        <ProfessorsOfPractice />
        </>
    )
}


export default Home;