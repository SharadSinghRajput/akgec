const bgImages = {
    'BG1': "/image/building/building1.webp",
    'BG2': "/image/building/building2.webp",
    'BG3': "/image/building/building3.webp",
    'BG4': "/image/building/building4.webp",
    'BG5': "/image/building/building5.webp",
    'BG6': "/image/building/building6.webp",
    'BG7': "/image/building/building7.webp",
    'BG8': "/image/building/building8.webp",
    'BG9': "/image/building/building9.webp",
    'BG10': "/image/building/building10.webp",
    'BG11': "/image/building/central_Library.webp",
    'BG12': "/image/building/girls hostel.webp",
    'BG13': "/image/building/lecture theatre.webp",
}

export default function Header({ title, height, subHeading, Button, gradient = true, position = "center", bgKey ="BG3" }) {

    const bg=bgImages[bgKey] || "/image/header-image.jpg";
    
    return (
        <div className={`relative isolate overflow-hidden py-24 sm:py-32 xl:py-36 max-[400px]:py-12 ${height}`}>
            <div className="absolute inset-0 -z-10 h-full w-full">
                <img
                    alt=""
                    src={bg}
                    className={`h-full w-full object-${position} object-cover`}
                />
                {gradient && <div className={`absolute inset-0 ${typeof gradient === "string" ? gradient : "bg-gradient-to-r from-black/70 to-transparent"}`}></div>}
            </div>
            <div
                aria-hidden="true"
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
            </div>
            <div className="mx-auto max-w-[1400px] px-6 py-10">
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