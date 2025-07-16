import Image from 'next/image';

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
export default function HostelFacility() {
    return (

        <div className="">
            <div className="">
                <h1 className="text-4xl font-novaReg mb-4 max-md:text-3xl max-2xl:px-2 max-xl:px-2 max-lg:px-2 max-md:px-2 max-sm:text-xl max-sm:font-novaSemi">Hostels – Home Away from Home</h1>
                <p className="text-gray-700 mb-6 text-sm text-justify max-2xl:px-2 max-xl:px-2 max-lg:px-2 max-md:px-2 max-sm:px-2">
                    The college provides well furnished hostel accommodation to its students. The six campus hostels are spread over four complexes namely, the Junior Girls Hostel Complex, the Girls Hostel Complex, the Junior Boys Hostel Complex and the Senior Boys Hostel Complex. The three girls hostel have double and triple seater rooms and accommodate about 600 students. The Junior Boys Hostel having double occupancy rooms can accommodate about 300 students and is reserved for first year students. The Senior Boys Hostel Complex has two hostels with single and triple seater accommodation and houses about 600 students.
                </p>
                <p className="text-gray-700 mb-6 text-sm text-justify max-2xl:px-2 max-xl:px-2 max-lg:px-2 max-md:px-2 max-sm:px-2">
                    Each hostel complex has its separate mess with well equipped kitchen and dining area providing hygienic, nutritious and wholesome meals. Hostels have gymnasium as well as indoor and outdoor sports facilities. The hostels also have a TV room and library with magazines and fiction / general reading books. Hostels are equipped with eco-friendly solar water heating systems. Hostels also have canteens and provision stores for minor item of daily requirement. The hostels thus provide reasonable levels of comfort, hygienic food, recreation facilities and an environment conducive for pursuit of academic and all round development.
                </p>
            </div>
            <div className="max-w-7xl mx-auto my-10 p-6">
                <h2 className="text-3xl font-novaSemi text-center mb-8 max-sm:text-2xl">Facilities at Hostels</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities?.map((facility) => (
                        <div key={facility.id} className="flex bg-white flex-col text-center text-slate-700 shadow-lg shadow-gray-100 border border-gray-200 min-h-36 justify-center items-center">
                            <Image src={facility.icon} alt={facility.name} width={50} height={50} className="mb-4" />
                            <p className='text-sm font-normal max-w-52'>{facility.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
