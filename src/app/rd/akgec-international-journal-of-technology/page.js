import Header from "@/Components/Header";
import InternationalJournal from "./InternationalJournal";


export const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header title={"AKGU International Journal of Technology"} bg="/image/Building2.jpg" gradient={"bg-gradient-to-r from-gray-900 to-zinc-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 gap-10">
                    <div className="col-span-12 max-md:col-span-12">
                        <InternationalJournal />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;
