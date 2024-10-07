import { CircleArrowRight } from 'lucide-react';

const membersData = [
  {
    name: "Dr. Nitisha Shrivastava",
    role: "Dean, Students Welfare",
    image: "/image/Faculty/Dr. Nitisha Shrivastava.jpg",
  },
  {
    name: "Dr. J. G. Yadav",
    role: "Director, Sports",
    image: "/image/Faculty/Dr. J. G. Yadav.jpg",
  },
  {
    name: "Prof. V.K. Parashar",
    role: "Director, BCA",
    image: "/image/Faculty/Prof. V.K. Parashar.jpg",
  },
];

export default function StudentWelfare() {
  return (
    <div className="">
      <h2 className="text-4xl font-novaReg text-gray-900 mb-6">
        Quality Education and University System & Processes
      </h2>
      <div className="mt-8">
        <h3 className="text-xl font-novaSemi text-gray-900 mb-6">Members</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {membersData?.map((member) => (
            <div key={member.name} className="bg-white overflow-hidden shadow transition hover:duration-300 hover:ease-in-out hover:shadow-2xl">
              <div className="py-8 px-4">
                <div className="flex items-center justify-center">
                  <div className="h-34 w-34 rounded-full  border-4 border-[#E7EBFB]">
                    <img className="h-32 w-32 rounded-full" src={member.image} alt={member.name} />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-novaBold text-gray-900 mb-4">{member.name}</h4>
                  <div className="">
                    <p className="text-sm text-gray-500 mb-6">{member.role}</p>
                  </div>
                </div>
                <div className="mt-6 w-full flex items-center justify-end">

                  <CircleArrowRight className="h-8 w-8 text-[#fc654c] items-end" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
