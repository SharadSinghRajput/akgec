import Header from "@/Components/Header";
import AcademicComplex from "./AcademicComplex";

const Button = {
    name: "Apply Now",
    Link: "",
};


const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header title={"Academic Complex"} Button={Button} gradient={"bg-gradient-to-r from-gray-900 to-gray-900/40"} />
                <AcademicComplex />
            </div>
        </>
    )
}


export default Home;