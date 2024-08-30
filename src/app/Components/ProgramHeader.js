import Form from '../Home/Form'

export default function ProgramHeader({ title, Button, fullform, department }) {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-24">
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
            <div className="mx-auto max-w-7xl mt-10 -mb-10">
                <div className="flex flex-col sm:flex-row justify-between  items-start">
                    <div className="mx-auto max-w-2xl lg:mx-0 mt-56">
                        <h2 className="text-lg font-light tracking-tight text-gray-200 mb-10 w-56">{department}</h2>
                        <h2 className="text-3xl font-light tracking-tight text-white">{title}</h2>
                        <h2 className="text-3xl font-light tracking-tight text-white">{fullform}</h2>
                        {Button ? (
                            <a href={Button.Link} target="_blank" rel="noopener noreferrer" >
                                <button className="rounded-md bg-red-600 px-3.5 py-2.5 mt-4 text-sm font-light text-white shadow-sm transform hover:translate-x-1 transition-transform duration-300 ease-in-out">
                                    {Button.name} &rarr;
                                </button>
                            </a>
                        ) : null}
                    </div>
                    <div className="sm:ml-8">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}
