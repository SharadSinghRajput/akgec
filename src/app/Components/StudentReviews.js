import Image from "next/image";
import Quote from "/public/image/quote.webp"

export default function Example() {
    return (
        <section className="isolate py-6 sm:py-20 overflow-hidden bg-BG5 bg-no-repeat bg-center">
            <div className="w-full max-w-[1350px] mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <Image src={Quote} width={50} height={50} />
                    <h2 className="text-2xl font-extralight text-center tracking-tight text-gray-900 sm:text-4xl">
                        The Echoes of Success -<br />
                        Hear More from Our Esteemed Graduates!
                    </h2>
                    <p className="mt-6 text-base text-gray-700 font-light px-6 sm:px-20 text-center">
                        Discover the enriching stories and valuable insights directly from our accomplished graduates.
                    </p>
                </div>
                {/* <div className="relative mx-auto max-w-2xl py-10 sm:py-10 lg:max-w-4xl ">
                    <figure className="grid grid-cols-3 gap-5 bg-gray-100 rounded-lg">
                        <div className="relative col-span-2 p-5">
                            <p className="text-xl text-gray-900 font-extralight">
                                
                            </p>
                            <div className="flex flex-col mt-10">
                                <span className="font-medium text-xl text-red-800">Neha Verma</span>
                                <span className="font-light text-xl text-gray-800">B.Tech in Civil Engineering</span>
                            </div>
                        </div>
                        <div className="col-span-1 ">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=576&h=576&q=80"
                                className="bg-indigo-50 h-full object-cover rounded-md"
                            />
                        </div>
                        
                    </figure>
                </div> */}
                <div className=" pt-10 sm:pt-14">
                    <div className="rounded-2xl shadow-2xl border pb-8 sm:pb-8 md:pb-14 xl:pb-0">
                        <div className="mx-auto flex flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                                <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                                    <img
                                        alt=""
                                        src="/image/str-1.jpg"
                                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-300 object-cover shadow-2xl"
                                    />
                                </div>
                            </div>
                            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                                <figure className="relative isolate">
                                    <blockquote className="text-base font-extralight text-gray-700 sm:text-xl">
                                        <p>
                                            Ajay Kumar Garg Engineering College offers a robust Civil Engineering program with a strong focus on practical skills. The faculty are experienced and willing to help students with their queries. The campus is well-equipped, though some of the amenities could use an update. Overall, it's a great place to study engineering.
                                        </p>
                                    </blockquote>
                                    <figcaption className="mt-8 text-base">
                                        <div className="font-semibold text-gray-700">Neha Verma</div>
                                        <div className="mt-1 text-gray-500">B.Tech in Civil Engineering</div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
