"use client";

const MePatent = () => {

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
            applicationNo: "201811038028", 
            status: "Granted", 
            inventors: "Pradeep Jain", 
            title: "Three Dimensional Printer", 
            applicants: "AKGEC Skills foundation", 
            filedDate: "10-08-2018", 
            pubGrantedDate: "14-08-2020", 
            publicationNumber: "344163" 
        },
        { 
            sno: 2, 
            applicationNo: "202011010932", 
            status: "Published", 
            inventors: "Namrata Gangil", 
            title: "Shape Memory Alloy Reinforced Functionally Graded Material Fabrication By Friction Stir Processing", 
            applicants: "Namrata Gangil, Ajay Kumar Garg Engineering College, Dr. APJ Abdul Kalam Technical University", 
            filedDate: "13-03-2020", 
            pubGrantedDate: "18-09-2021", 
            publicationNumber: "202011010932" 
        }
    ];

    
    return (
        <div className="container mx-auto">
            <h1 className="text-[42px] font-novaReg leading-none mb-4 ">ME Patent </h1>
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

export default MePatent;
