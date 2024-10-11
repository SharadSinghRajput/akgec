"use client";

const EnPatent = () => {

    const tableHeadings = [
        "S.No",
        "Patent Application No.",
        "Status of Patent (Filed / Published / Granted)",
        "Inventor/s Name",
        "Title of the Patent",
        "Applicant/s Name",
        "Patent Filed Date (DD/MM/YYYY)",
        "Patent Published Date / Granted Date (DD/MM/YYYY)",
        "Patent Published Number / Patent Granted Number",
    ];

    const patentData = [
        { 
            sno: 1,
            applicationNo: "202211031808",
            status: "Published",
            inventors: "Dr. Sukhwinder Singh and Dr. Hemant Ahuja",
            title: "Wireless charging system for Vehicles",
            applicants: "AKGEC",
            filedDate: "03-06-2022",
            pubGrantedDate: "03-06-2022",
            publicationNumber: "202211031808"
        },
        { 
            sno: 2,
            applicationNo: "202211066959 A",
            status: "PUBLISHED",
            inventors: "1)Dr. Desh Deepak Sharma 2)Ayan Sharma 3)Antas Sharma 4)Ravindra Kumar 5)Mohd. Khursheed",
            title: "SYSTEM OF COORDINATED AUTOMATIC FRAMEWORK FOR MULTIPLE UNMANNED AERIAL VEHICLES AND MOBILE ROBOT USED FOR MEDICAL WASTE TRANSPORTATION",
            applicants: "1)Dr. Desh Deepak Sharma 2)Ayan Sharma 3)Antas Sharma 4)Ravindra Kumar 5)Mohd. Khursheed",
            filedDate: "22-11-2022",
            pubGrantedDate: "02-12-2022",
            publicationNumber: "48/2022"
        }
    ];
    return (
        <div className="container mx-auto">
            <h1 className="text-[42px] font-novaReg leading-none mb-4 ">EN Patent </h1>
            <table className="min-w-full my-4 bg-white border border-gray-300">
                <thead>
                    <tr className="bg-[#363c83] border-inherit text-white h-[44px]">
                        {tableHeadings.map((heading, index) => (
                            <th
                                key={index}
                                className="py-4 px-4 text-left text-sm"
                            >
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {patentData.map((item, index) => (
                        <tr key={index} className="bg-indigo-950 text-white border-inherit">
                            <td className="py-4 px-4 text-sm border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                {item.sno}
                            </td>
                            <td className="py-4 px-4 text-sm border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                {item.applicationNo}
                            </td>
                            <td className="py-4 px-4 text-sm border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                {item.status}
                            </td>
                            <td className="py-4 px-4 text-sm border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                {item.inventors}
                            </td>
                            <td className="py-4 px-4 text-sm border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                {item.title}
                            </td>
                            <td className="py-4 px-4 text-sm border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                {item.applicants}
                            </td>
                            <td className="py-4 px-4 text-sm border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                {item.filedDate}
                            </td>
                            <td className="py-4 px-4 text-sm border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                {item.pubGrantedDate}
                            </td>
                            <td className="py-4 px-4 text-sm border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                {item.publicationNumber}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EnPatent;
