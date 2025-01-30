export default function Header({ title, height, subHeading, Button, gradient, position = "center", bg = "/image/header-img.jpg" }) {
    return (
        <div className={`relative isolate overflow-hidden py-24 sm:py-32 xl:py-40 max-[400px]:py-12 ${height}`}>
            <div className="absolute inset-0 -z-10 h-full w-full">
                <img
                    alt=""
                    src={bg}
                    className={`h-full w-full object-${position} object-cover`}
                />
                <div className={`absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent`}></div>
            </div>
            <div
                aria-hidden="true"
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
            </div>
            <div className="mx-auto max-w-[1400px] px-6 mt-36">
                <div className="mx-auto lg:mx-0">
                    <h2 className="text-3xl max-w-lg font-novaReg tracking-tight text-white sm:text-[40px]">{title}</h2>
                    <p className="mt-4 text-white font-novaReg max-w-xl text-xl lg:text-2xl">{subHeading}</p>
                    {Button ? <>
                        <a href={Button.Link} target="_blank" rel="noopener noreferrer" >
                            <button className="rounded-md uppercase bg-btn-gradient animate-gradient px-5 py-3 max-sm:py-2 max-sm:text-sm mt-2 text-base font-novaBold tracking-wider text-white hover:pl-8 shadow-sm  duration-500">{Button.name} ➜</button>
                        </a>
                    </> : null}
                </div>
            </div>
        </div>
    )
}