import Image from 'next/image';
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";

const SideBarLink = [
    {name: "Our Identity" , link : "/overview"},
    {name: "Leadership" , link : ""},
    {name: "Leadership" , link : ""},
    {name: "Governance" , link : ""},
    {name: "Recognition and Approvals" , link : ""},
    {name: "Awards and Rankings" , link : ""},
    {name: "Institution Social Responsibility" , link : ""}
]




const facilities = [
    { id: 1, name: "Furnished rooms including Curtains, Mattress, Pillow, Bed Sheets", icon: "/image/icons/furnished-rooms.png" },
    { id: 2, name: "Clean and Hygienic – Mess & Dining", icon: "/image/icons/clean-and-hygienic.png" },
    { id: 3, name: "Internet Facility (wi fi)", icon: "/image/icons/internet-facility.png" },
    { id: 4, name: "Solar Water Heaters", icon: "/image/icons/solarwater-heaters.png" },
    { id: 5, name: "Gymnasium", icon: "/image/icons/gymnasium.png" },
    { id: 6, name: "TV Room", icon: "/image/icons/tv-room.png" },
    { id: 7, name: "Library", icon: "/image/icons/librarery.png" },
    { id: 8, name: "Indoor and Outdoor Sports Facilities", icon: "/image/icons/indoor-and-outdoor.png" },
    { id: 9, name: "Canteen", icon: "/image/icons/canteen.png" },
];
export default function Hostel() {
    return (

        <>
        <div className="bg-white">
            <Header title={"Hostal"} gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
            <section className="w-full max-w-7xl mx-auto grid grid-cols-12 pt-24 gap-10">
                <div className="col-span-9 max-md:col-span-12">             
                    <div className="bg-white">
                        <div className="">
                            <h1 class="text-2xl font-normal mb-4 ">Hostels – Home Away from Home</h1>
                            <p class="text-gray-700 mb-6 text-sm text-justify">
                                The college provides well furnished hostel accommodation to its students. The six campus hostels are spread over four complexes namely, the Junior Girls Hostel Complex, the Girls Hostel Complex, the Junior Boys Hostel Complex and the Senior Boys Hostel Complex. The three girls hostel have double and triple seater rooms and accommodate about 600 students. The Junior Boys Hostel having double occupancy rooms can accommodate about 300 students and is reserved for first year students. The Senior Boys Hostel Complex has two hostels with single and triple seater accommodation and houses about 600 students.
                            </p>
                            <p class="text-gray-700 mb-6 text-sm text-justify">
                                Each hostel complex has its separate mess with well equipped kitchen and dining area providing hygienic, nutritious and wholesome meals. Hostels have gymnasium as well as indoor and outdoor sports facilities. The hostels also have a TV room and library with magazines and fiction / general reading books. Hostels are equipped with eco-friendly solar water heating systems. Hostels also have canteens and provision stores for minor item of daily requirement. The hostels thus provide reasonable levels of comfort, hygienic food, recreation facilities and an environment conducive for pursuit of academic and all round development.
                            </p>
                        </div>
                        <div className="max-w-7xl mx-auto my-10 p-6">
                            <h2 className="text-2xl font-normal text-center mb-8">Facilities at Hostels</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {facilities.map((facility) => (
                                    <div key={facility.id} className="flex flex-col text-center text-slate-700 shadow-lg shadow-gray-100 border border-gray-200 min-h-36
                                    justify-center items-center
                                    ">
                                        <Image src={facility.icon} alt={facility.name} width={50} height={50} className="mb-4" />
                                        <p className='text-sm font-normal max-w-52'>{facility.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 max-md:col-span-12">
                    <SideBar title={"About US"} LinkList={SideBarLink} />
                </div>
            </section>
        </div>
        </>
    )
}
