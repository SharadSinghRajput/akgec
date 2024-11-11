import StudentServices from "./StudentServices";


export const Home = () => {
    return (
        <>
            <section className="w-full mx-auto grid grid-cols-12 pt-20 gap-10 max-sm:gap-0">
                <div className="col-span-12 max-xl:col-span-12 max-lg:col-span-12">
                    <StudentServices />
                </div>
            </section>
        </>
    )
}


export default Home;