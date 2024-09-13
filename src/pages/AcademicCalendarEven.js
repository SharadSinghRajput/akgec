import AcademicCalendar from "./Components/AcademicCalendar";
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

const calendar = [
    {
        "SNo": 1,
        "Activity": "Registration of B.Tech IV Year Students",
        "Date": "02.09.2024",
        "Day": "Monday"
    },
    {
        "SNo": 2,
        "Activity": "Commencement of Classes for B.Tech - IV Year Students",
        "Date": "03.09.2024",
        "Day": "Tuesday"
    },
    {
        "SNo": 3,
        "Activity": "Induction Program and Commencement of Classes for B.Tech/MCA-I year",
        "Date": "05.09.2024",
        "Day": "Thursday"
    },
    {
        "SNo": 4,
        "Activity": "Registration of B.Tech/MCA - II Year, B.Tech - III Year & M.Tech-I/II year Students",
        "Date": "09.09.2024",
        "Day": "Monday"
    },
    {
        "SNo": 5,
        "Activity": "Commencement of Classes for B.Tech/MCA II Year, B.Tech - III Year & M.Tech - I/II year Students",
        "Date": "10.09.2024",
        "Day": "Tuesday"
    },
    {
        "SNo": 6,
        "Activity": "Sessional Test-1 (1 Unit, 1 Hour) of all students",
        "StartDate": "30.09.2024",
        "EndDate": "04.10.2024",
        "Days": "Monday-Friday"
    },
    {
        "SNo": 7,
        "Activity": "Last Date of Distribution of corrected answer scripts of ST-1",
        "Date": "09.10.2024",
        "Day": "Wednesday"
    },
    {
        "SNo": 8,
        "Activity": "Mid Term Lab Assessment of all students",
        "StartDate": "21.10.2024",
        "EndDate": "25.10.2024",
        "Days": "Monday-Friday"
    },
    {
        "SNo": 9,
        "Activity": "Sessional Test-2 (2 Unit, 2 Hour) of all students",
        "StartDate": "11.11.2024",
        "EndDate": "18.11.2024",
        "Days": "Monday-Monday"
    },
    {
        "SNo": 10,
        "Activity": "Last Date of Distribution of corrected answer scripts of ST2",
        "Date": "21.11.2024",
        "Day": "Thursday"
    },
    {
        "SNo": 11,
        "Activity": "End Term Lab Assessment of all students",
        "StartDate": "09.12.2024",
        "EndDate": "13.12.2024",
        "Days": "Monday-Friday"
    },
    {
        "SNo": 12,
        "Activity": "Last day of Teaching for all students",
        "Date": "13.12.2024",
        "Day": "Friday"
    },
    {
        "SNo": 13,
        "Activity": "Pre-University Test (PUT) of B.Tech III/IV year students & MCA - II Year students",
        "StartDate": "16.12.2024",
        "EndDate": "21.12.2024",
        "Days": "Monday-Saturday"
    },
    {
        "SNo": 14,
        "Activity": "Pre-University Test (PUT) of B.Tech - I/II year students & MCA/M.Tech - I year students",
        "StartDate": "16.12.2024",
        "EndDate": "26.12.2024",
        "Days": "Monday-Thursday"
    },
    {
        "SNo": 15,
        "Activity": "End Semester Practical Examination (External) of B.Tech - III/IV year students & MCA - II Year students",
        "StartDate": "23.12.2024",
        "EndDate": "26.12.2024",
        "Days": "Monday-Thursday"
    },
    {
        "SNo": 16,
        "Activity": "Last date of submitting Pre University Test Marks for B.Tech - III/IV year students & MCA - II Year students",
        "Date": "24.12.2024",
        "Day": "Tuesday"
    },
    {
        "SNo": 17,
        "Activity": "End Semester Practical Examination (External) of B.Tech I/II year students & MCA/M.Tech - I year students",
        "StartDate": "27.12.2024",
        "EndDate": "02.01.2025",
        "Days": "Friday-Thursday"
    },
    {
        "SNo": 18,
        "Activity": "End Semester Theory Examination (External) of B.Tech- III/IV year students & MCA - II Year students",
        "StartDate": "27.12.2024",
        "EndDate": "28.01.2025",
        "Days": "Friday-Tuesday"
    },
    {
        "SNo": 19,
        "Activity": "Last date of submitting Pre University Test Marks for B.Tech I/II year students & MCA/M.Tech - I year students",
        "Date": "30.12.2024",
        "Day": "Monday"
    },
    {
        "SNo": 20,
        "Activity": "End Semester Theory Examination (External) of B.Tech - I/II year students & MCA/M.Tech - I year students",
        "StartDate": "03.01.2025",
        "EndDate": "28.01.2025",
        "Days": "Friday-Tuesday"
    }
];

const AcademicCalendarEven = () => {
    return (
        <>
        <div className="bg-gray-100">
            <Header title={"Academic Calendar 2024-25"} gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
            <section className="w-full max-w-7xl mx-auto grid grid-cols-12 pt-24 gap-10">
                <div className="col-span-9 max-md:col-span-12">
                <div className="container mx-auto p-4">
                    <h1 className="text-[42px] leading-none font-novaReg mb-2.5">Even Semester</h1>
                    <div className="mb-6 mt-4 rounded-lg">
                        <table className="min-w-full my-4 bg-white rounded-lg">
                            <thead className="bg-[#363c83] text-white h-[44px] rounded-t-lg">
                                <tr className="border-b">
                                    <th className="px-4 py-2 text-left border-r border-white border-opacity-10 text-base rounded-tl-lg">
                                        Date
                                    </th>
                                    <th className="px-4 py-2 border-r border-white border-opacity-10 text-left text-base">
                                        Day
                                    </th>
                                    <th className="px-4 py-2 text-left text-base rounded-tr-lg">Activity</th>
                                </tr>
                            </thead>
                            <tbody className="border-t-2 rounded-lg">
                                {calendar.map((entry, index) => (
                                    <tr
                                        key={index}
                                        className={`bg-primary text-white ${index === calendar.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                                    >
                                        <td className={`py-4 px-4 text-sm border-b border-white border-opacity-20 ${index === calendar.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                            {entry.StartDate || entry.Date}
                                        </td>
                                        <td className="py-4 text-center px-4 text-sm border-b border-l border-white border-opacity-20">
                                            {entry.Days ? entry.Days.split('-')[0] : entry.Day}
                                        </td>
                                        <td className={`py-4 px-4 text-sm border-b border-l border-white border-opacity-20 ${index === calendar.length - 1 ? 'rounded-br-lg' : ''}`}>
                                            {entry.Activity} {entry.EndDate ? `-till ${entry.EndDate}` : ''}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
                <div className="col-span-3 max-md:col-span-12 pt-5">
                    <AcademicCalendar />
                    <SideBar title={"About US"} LinkList={SideBarLink} />
                </div>
            </section>
        </div>
        </>
                
            
    );
}

export default AcademicCalendarEven;