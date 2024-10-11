"use client";

import { useState } from 'react';

const tableHeadings = [
    "S.No",
    "Patent Application No.",
    "Status of Patent (Filed / Published / Granted)",
    "Inventor/s Name",
    "Title of the Patent",
    "Applicant/s Name",
    "Patent Filed Date (DD/MM/YYYY)",
    "Patent Published Date / Granted Date (DD/MM/YYYY)",
];

const patentData = [
        { sno: 1, applicationNo: "202311032267", status: "Published", inventors: "Anushka Mishra, Arpit Chauhan, Harshdeep Singh, Tushar Singh, Dr. Avdhesh Gupta", title: "Blind Assistance Android Application Using Machine Learning", applicants: "Anushka Mishra, Arpit Chauhan, Harshdeep Singh, Tushar Singh, Dr. Avdhesh Gupta", filedDate: "5-Jul-23", pubGrantedDate: "14-Jul-23" },
        { sno: 2, applicationNo: "202311006945", status: "Published", inventors: "Dr. Anu Chaudhary", title: "Secured Architecture Framework With Machine Learning Approach For Digital Payments Systems In India", applicants: "Dr. Avdhesh Gupta, Dr. Anupama Sharma, Dr. Ruchi Gupta", filedDate: "2-Mar-23", pubGrantedDate: "31-Mar-23" },
        { sno: 3, applicationNo: "202311006945", status: "Published", inventors: "Dr. Ruchi Gupta", title: "Secured Architecture Framework With Machine Learning Approach For Digital Payments Systems In India", applicants: "Dr. Avdhesh Gupta, Dr. Anupama Sharma, Dr. Ruchi Gupta", filedDate: "2-Mar-23", pubGrantedDate: "31-Mar-23" },
        { sno: 4, applicationNo: "202311006945", status: "Published", inventors: "Dr. Anupama Sharma", title: "Secured Architecture Framework With Machine Learning Approach For Digital Payments Systems In India", applicants: "Dr. Avdhesh Gupta, Dr. Anupama Sharma, Dr. Ruchi Gupta", filedDate: "2-Mar-23", pubGrantedDate: "31-Mar-23" },
        { sno: 5, applicationNo: "202311006945", status: "Published", inventors: "Dr. Avdhesh Gupta", title: "Secured Architecture Framework With Machine Learning Approach For Digital Payments Systems In India", applicants: "Dr. Avdhesh Gupta, Dr. Anupama Sharma, Dr. Ruchi Gupta", filedDate: "2-Mar-23", pubGrantedDate: "31-Mar-23" },
        { sno: 6, applicationNo: "202311008611", status: "Published", inventors: "Mili Srivastava", title: "Internet Of Things Enabled Face Mask Detection Of Human Mankind In Crowded Space", applicants: "Mili Srivastava", filedDate: "10-Feb-23", pubGrantedDate: "3-Mar-23" },
        { sno: 7, applicationNo: "202311008611", status: "Published", inventors: "Pancham Singh", title: "The Novel Eway Of Identifying The Face Mask And To Ware The System In The Crowd Management System", applicants: "Pancham Singh", filedDate: "10-Feb-23", pubGrantedDate: "3-Mar-23" },
        { sno: 8, applicationNo: "202311008611", status: "Published", inventors: "Mrignayni Kansal", title: "Internet Of Thing Enable Face Mask Detection Of Human Mankind In Crowded Space", applicants: "MRIGNAINY KANSAL", filedDate: "10-Feb-23", pubGrantedDate: "3-Mar-23" },
        { sno: 9, applicationNo: "202311008611", status: "Published", inventors: "Sachin Kumar Tyagi", title: "Internet Of Things Enabled Face Mask Detection Of Human Mankind In Crowded Space", applicants: "Sachin Kumar Tyagi", filedDate: "10-Feb-23", pubGrantedDate: "3-Mar-23" },
        { sno: 10, applicationNo: "202311008611", status: "Published", inventors: "Pankaj Singh", title: "Internet Of Things Enabled Face Mask Detection Of Human Mankind In Crowded Space", applicants: "Pankaj Singh", filedDate: "10-Feb-23", pubGrantedDate: "3-Mar-23" },
        { sno: 11, applicationNo: "202311009453 A", status: "Published", inventors: "AKGEC", title: "Medicinal Drug Delivery Monitoring System", applicants: "Shilpi Gupta", filedDate: "", pubGrantedDate: "17-Feb-23" },
        { sno: 12, applicationNo: "20231007172", status: "Published", inventors: "Priti Choudhary", title: "An Uhf Tag-Based System Using Characteristic Modes For Iot Application", applicants: "Priti Choudhary", filedDate: "", pubGrantedDate: "17-Feb-23" },
        { sno: 13, applicationNo: "202311015388 A", status: "Published", inventors: "Santosh Kumar Mishra", title: "AI-Enabled Edos Detection System", applicants: "Santosh Kumar Mishra", filedDate: "", pubGrantedDate: "3-Dec-22" },
        { sno: 14, applicationNo: "202111037373", status: "Granted", inventors: "Dr. Ruchi Gupta", title: "Data Distribution Between The Amulance And Railway Crossing Database Using An Intelligent Ambulance Guiding Unit", applicants: "Dr. Ruchi Gupta", filedDate: "18-Aug-21", pubGrantedDate: "29-Nov-22" },
        { sno: 15, applicationNo: "202211056072", status: "Published", inventors: "Dr. Anupama Sharma", title: "An AI-Based System And Process For Providing Rapid, Precise Cardiac Care", applicants: "Dr. Anupama Sharma", filedDate: "30-Sep-22", pubGrantedDate: "21-Oct-22" },
        { sno: 16, applicationNo: "202241053878", status: "Published", inventors: "Mr. Sumit Sharma", title: "Iot-Based Remote Intelligent Healthcare System For The Detection And Prevention Of Patients Using AI", applicants: "Mr. Sumit Sharma, Mr. Sarvachan Verma", filedDate: "", pubGrantedDate: "30-Sep-22" },
        { sno: 17, applicationNo: "202241053878", status: "Published", inventors: "Mr. Sarvachan Verma", title: "Iot-Based Remote Intelligent Healthcare System For The Detection And Prevention Of Patients Using AI", applicants: "Mr. Sumit Sharma, Mr. Sarvachan Verma", filedDate: "", pubGrantedDate: "30-Sep-22" },
        { sno: 18, applicationNo: "202231054102 A", status: "Published", inventors: "Ms. Nandita Goyal", title: "Intelligent And Efficient Computing Device For Prostate Cancer Detection Using CNN", applicants: "Ms. Nandita Goyal", filedDate: "21-Sep-22", pubGrantedDate: "23-Sep-22" },
        { sno: 19, applicationNo: "202211053191", status: "Published", inventors: "Mr.Sachin Kumar Tyagi", title: "An Effective Health Care Monitoring System Based On IOT And MACHINE Learning To Track On Old Age Patient’s Details", applicants: "Mr.Sachin Kumar Tyagi", filedDate: "17-Sep-22", pubGrantedDate: "23-Sep-22" },
        { sno: 20, applicationNo: "202211052282", status: "Published", inventors: "Dr. Ruchi Gupta", title: "Machine Learning Based Methodology For Database Migration In Cloud Computing Environment", applicants: "Dr. Ruchi Gupta", filedDate: "13-Sep-22", pubGrantedDate: "16-Sep-22" },
        { sno: 21, applicationNo: "202211038714", status: "Published", inventors: "Dr. Rashmi Sharma", title: "Smart Bins Using IOT Sensors", applicants: "Dr. Rashmi Sharma", filedDate: "7-Jun-22", pubGrantedDate: "29-Jul-22" },
        { sno: 22, applicationNo: "202211042661", status: "Published", inventors: "Dr. Aditya Pratap Singh", title: "Secured Voting System", applicants: "AKGEC", filedDate: "26-Jul-22", pubGrantedDate: "29-Jul-22" },
        { sno: 23, applicationNo: "202211042661", status: "Published", inventors: "Dr. Anupama Sharma", title: "Secured Voting System", applicants: "AKGEC", filedDate: "26-Jul-22", pubGrantedDate: "29-Jul-22" },
        { sno: 24, applicationNo: "202211042661", status: "Published", inventors: "Dr. Ruchi Gupta", title: "Secured Voting System", applicants: "AKGEC", filedDate: "26-Jul-22", pubGrantedDate: "29-Jul-22" },
        { sno: 25, applicationNo: "202211042661", status: "Published", inventors: "Dr. Anu Chaudhary", title: "Secured Voting System", applicants: "AKGEC", filedDate: "26-Jul-22", pubGrantedDate: "29-Jul-22" },
        { sno: 26, applicationNo: "202211047175", status: "Published", inventors: "Avdhesh Gupta", title: "Smart Wrist Band", applicants: "Avdhesh Gupta", filedDate: "22-Aug-22", pubGrantedDate: "10-Jul-22" },
        { sno: 27, applicationNo: "202211032405", status: "Published", inventors: "Dr. Rashmi Sharma", title: "System And Method For Reckless Driving", applicants: "Dr. Rashmi Sharma", filedDate: "6-Jun-22", pubGrantedDate: "17-Jun-22" },
        { sno: 28, applicationNo: "202211032888", status: "Published", inventors: "Dr. Amrita Jyoti", title: "Smart Dustbin", applicants: "Dr. Amrita Jyoti", filedDate: "6-Aug-22", pubGrantedDate: "17-Jun-22" },
        { sno: 29, applicationNo: "202211025206", status: "Published", inventors: "Dr. Rashmi Sharma", title: "Motor Bike Theft Prevention System And Method", applicants: "Axis Institute of Technology & Management", filedDate: "29-Apr-22", pubGrantedDate: "5-Jun-22" },
        { sno: 30, applicationNo: "202211020425", status: "Published", inventors: "Lucknesh Kumar", title: "IOT Based Health Monitoring System Through Wearable Sensors", applicants: "Lucknesh Kumar", filedDate: "4-May-22", pubGrantedDate: "22-May-22" },
        { sno: 31, applicationNo: "202211022229", status: "Published", inventors: "Dr. Anupama Sharma", title: "Cloud And IOT Based Secure Home Automation System Using Speech Through Google Assistant", applicants: "Dr. Anupama Sharma, Dr. Ruchi Gupta", filedDate: "13-Apr-22", pubGrantedDate: "22-Apr-22" },
        { sno: 32, applicationNo: "202211022229", status: "Published", inventors: "Dr. Ruchi Gupta", title: "Cloud And IOT Based Secure Home Automation System Using Speech Through Google Assistant", applicants: "Dr. Anupama Sharma, Dr. Ruchi Gupta", filedDate: "13-Apr-22", pubGrantedDate: "22-Apr-22" },
        { sno: 33, applicationNo: "2211003443 A", status: "Published", inventors: "Dr. Amrita Jyoti", title: "IOT Based Waste Management System", applicants: "Dr. Amrita Jyoti, Mr. Anmol Jain", filedDate: "21-Jan-22", pubGrantedDate: "2-Apr-22" },
        { sno: 34, applicationNo: "2211003443 A", status: "Published", inventors: "Mr. Anmol Jain", title: "IOT Based Waste Management System", applicants: "Dr. Amrita Jyoti, Mr. Anmol Jain", filedDate: "21-Jan-22", pubGrantedDate: "2-Apr-22" },
        { sno: 35, applicationNo: "202241001299", status: "Published", inventors: "Dr. Abhilasha Singh", title: "Artificial Intelligence And Machine Learning Based Intelligent System To Improve The Quality Of Video Call Experience", applicants: "Dr. Abhilasha Singh", filedDate: "1-Oct-22", pubGrantedDate: "2-Apr-22" },
        { sno: 36, applicationNo: "202211003382", status: "Published", inventors: "Dr. Anu Chaudhary", title: "AI And ML Based Effective and Accurate System For Predicting Heart Disease And Improving Health Care Sector", applicants: "Dr. Anu Chaudhary", filedDate: "20-Jan-22", pubGrantedDate: "28-Jan-22" },
        { sno: 37, applicationNo: "202011056835", status: "Published", inventors: "Mr. Sumit Sharma", title: "IOT Integrated Fire Monitoring And Alerting System", applicants: "Mr. Sumit Sharma", filedDate: "29-Dec-20", pubGrantedDate: "2-Dec-21" },
        { sno: 38, applicationNo: "202141045557", status: "Published", inventors: "Ms. Yogita Chhabra", title: "Investigation Into The Factors That Influence The IOT Based Smart Hospital Design", applicants: "Ms. Yogita Chhabra", filedDate: "10-Jun-21", pubGrantedDate: "15-Oct-21" },
        { sno: 39, applicationNo: "2021105080", status: "Granted", inventors: "Dr. Anupama Sharma", title: "Machine Learning Model For Predicting Severity Prognosis In Patients Infected With COVID-19", applicants: "Dr. Anupama Sharma", filedDate: "", pubGrantedDate: "22-Sep-21" },
        { sno: 40, applicationNo: "202111000134", status: "Published", inventors: "Mr. Sumit Sharma", title: "IOT Based Real Time Infant Monitoring And Alerting System", applicants: "Mr. Sumit Sharma", filedDate: "1-Apr-21", pubGrantedDate: "1-Aug-21" },
        { sno: 41, applicationNo: "2021102036", status: "Granted", inventors: "Dr. Anupama Sharma", title: "Healthcare Data Exchange Using Blockchain Technology", applicants: "Dr. Anupama Sharma", filedDate: "", pubGrantedDate: "26-May-21" },
        { sno: 42, applicationNo: "IN202311009453", status: "Filed", inventors: "Shiddarth Srivastava(student), Dr. Anupama Sharma, Ms. Shilpi Gupta, Dr. Aditya Pratap Singh, Dr. Ruchi Gupta", title: "Medicinal Drug Delivery Monitoring System", applicants: "AKGEC", filedDate: "13-Feb-23", pubGrantedDate: "" }
    ];

const itemsPerPage = 10;

const CsePatent = () => {
    
    const [currentPage, setCurrentPage] = useState(1);

    const totalEntries = patentData.length;
    const totalPages = Math.max(1, Math.ceil(totalEntries / itemsPerPage));

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const displayedData = patentData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="container mx-auto">
            <h1 className="text-[42px] font-novaReg leading-none mb-4">IT Patent</h1>
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
                    {displayedData.map((item, index) => (
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
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between max-sm:flex-col">
                <div className="text-sm mb-2.5 mr-5 pt-3 text-gray-700">
                    Showing {currentPage * itemsPerPage - itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalEntries)} of {totalEntries} entries
                </div>
                <div className="text-sm w-fit bg-blue-950 rounded-lg flex items-center">
                    <button
                        className={`text-white px-4 py-2.5 rounded-l ${currentPage === 1 ? 'bg-blue-800 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        Previous
                    </button>

                    {[...Array(totalPages)].map((_, pageIndex) => (
                        <button
                            key={pageIndex + 1}
                            className={`text-white px-4 py-2.5 ${currentPage === pageIndex + 1 ? 'bg-primary' : 'hover:bg-blue-700'} transition duration-150`}
                            onClick={() => handlePageChange(pageIndex + 1)}
                        >
                            {pageIndex + 1}
                        </button>
                    ))}
                    <button
                        className={`text-white px-4 py-2.5 rounded-r ${currentPage === totalPages ? 'bg-blue-800 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>

        </div>
    );
};

export default CsePatent;
