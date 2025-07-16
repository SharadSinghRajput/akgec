import Header from "@/Components/Header";
import Conference from "./Conferences";

const Button = {
    name: "Apply Now",
    Link: "",
};

const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header title={"Conference"} Button={Button} gradient={"bg-gradient-to-r from-gray-900 to-zinc-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto py-20 gap-10">
                    <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
                        <Conference />
                    </div>
                </section>
            </div>
        </>
    )
}


export default Home;