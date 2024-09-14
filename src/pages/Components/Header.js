export default function Header({ title, subHeading, Button, gradient, bg = "/image/header-img.jpg" }) {
    return (
        <div className="relative isolate overflow-hidden  py-24 sm:py-32">
            <div className="absolute inset-0 -z-10 h-full w-full">
                <img
                    alt=""
                    src={bg}
                    className="h-full w-full object-top object-cover"
                />
                <div className={`absolute inset-0 ${gradient}`}></div>
            </div>
            <div
                aria-hidden="true"
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
            </div>
            <div className="mx-auto max-w-[1400px] px-6 mt-36">
                <div className="mx-auto lg:mx-0">
                    <h2 className="text-3xl font-novaReg tracking-tight text-white sm:text-[40px]">{title}</h2>
                    <p className="mt-4 text-white font-novaReg max-w-xl text-xl lg:text-2xl">{subHeading}</p>
                    {Button ? <>
                        <a href={Button.Link} target="_blank" rel="noopener noreferrer" >
                            <button className="rounded-md uppercase bg-secondary px-5 py-3 mt-7 text-base font-novaBold tracking-wider hover:text-white text-black shadow-sm hover:bg-white/20">{Button.name} ➜</button> 
                        </a>
                    </> : null}
                </div>
            </div>
        </div>
    )
}
