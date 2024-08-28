export default function Header({ title, Butto }) {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <div className="absolute inset-0 -z-10 h-full w-full">
                <img
                    alt=""
                    src="/image/header-img.jpg"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-white/0"></div>
            </div>
            <div
                aria-hidden="true"
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
            </div>
            <div className="mx-auto max-w-7xl px-6 mt-36 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-normal tracking-tight text-white sm:text-4xl">{title}</h2>
                    {Butto ? <>
                        <a href={Butto.Link} target="_blank" rel="noopener noreferrer" >
                            <button className="rounded-md bg-yellow-500 px-3.5 py-2.5 mt-4 text-sm font-semibold text-white shadow-sm hover:bg-white/20">{Butto.name}</button> 
                        </a>
                    </> : null}
                </div>
            </div>
        </div>
    )
}
