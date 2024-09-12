import { useRouter } from 'next/router';

const SideBar = ({title, LinkList}) => {
    const router = useRouter();
    return (
        <>
                <div className="">
                    <ul className="">
                        <div className="flex justify-start rounded-t-lg">
                            <img
                                src="/image/top-nav.jpg"
                                alt="side-bar-image"
                                className="w-80 rounded-t-lg"
                            />
                        </div>
                        <div className="bg-indigo-900  text-white max-w-80 w-full h-fit rounded-b-lg">
                            <h2 className=" text-2xl font-semibold  pl-6 p-4">{title}</h2>
                            <div>
                                {LinkList?.map((item, index)=>(
                                    <button key={index} onClick={()=> router.push(item.link)} className="relative border-b cursor-pointer text-white p-4 block pl-11 z-10 rounded-b-none bg-indigo-950 text-[12px] overflow-hidden group after:content-[''] after:absolute after:w-2 after:h-[2px] after:bg-white after:left-7 after:top-1/2 after:-translate-x-1 w-full">
                                        <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-white">{item.name}</span>
                                        <span className="absolute inset-0 bg-indigo-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </ul>
                </div>
        </>
    );
}

export default SideBar;