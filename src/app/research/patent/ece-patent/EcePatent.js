"use client";
import { useState } from 'react';
import Link from 'next/link'; // Import the Link component for routing

const EcePatent = () => {
    // Table headings for the patent data
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

    // Patent data for the table
    const patentData = [
        { sno: 1, applicationNo: "202111046069", status: "Granted", inventors: "Arnav Sawhney, Harshit Kumar Rai, Adesh Kumar Shukla, Adarsh Kumar & Richa", title: "Active Rider Safety System For Two Wheelers", applicants: "Ajay Kumar Garg Engineering College, Ghaziabad, Ms. Richa", filedDate: "09-10-2021", pubGrantedDate: "12-05-2022", publicationNumber: "396781" },
        { sno: 2, applicationNo: "202111019788 A", status: "Published", inventors: "Devesh Mishra, Aditya Kumar Singh, Karunesh, Amrees Pandey, Sayed Salim Sayeed, Sweta Singh, Mohit Gupta", title: "Pipe Crawler", applicants: "Devesh Mishra, Aditya Kumar Singh, Karunesh, Amrees Pandey, Sayed Salim Sayeed, Sweta Singh, Mohit Gupta", filedDate: "30-04-2021", pubGrantedDate: "04-11-2022", publicationNumber: "202111019788 A" },
        { sno: 3, applicationNo: "202311001874 A", status: "Published", inventors: "Dr. Karunesh", title: "Weed Uprooting Assistive Device", applicants: "Ajay Kumar Garg Engineering College, Ghaziabad", filedDate: "09-01-2023", pubGrantedDate: "13-01-2023", publicationNumber: "202311001874 A" },
        { sno: 4, applicationNo: "202211054883", status: "Published", inventors: "Sulekha Saxena, Seema Garg, Kiranjot Kaur, Richa Adlakha, Ashish Grover, Rajesh Grover, Dr. Pratima Singh, Pooja Mishra", title: "Realtime Identification And Ranking Of Health Risk Factors Using Trained Predictive Models", applicants: "Sulekha Saxena, Seema Garg, Kiranjot Kaur, Richa Adlakha, Ashish Grover, Rajesh Grover, Dr. Pratima Singh, Pooja Mishra", filedDate: "25-09-2022", pubGrantedDate: "07-10-2022", publicationNumber: "202211054883" },
        { sno: 5, applicationNo: "202211056620", status: "Published", inventors: "Prasen Jeet, Smrati Tripathi, Seema Garg, Sulekha Saxena, Bharat Gupta, Praveen Kumar", title: "Machine Learning Based Disease Detection Using Openvino Technology", applicants: "Prasen Jeet, Smrati Tripathi, Seema Garg, Sulekha Saxena, Bharat Gupta, Praveen Kumar", filedDate: "02-10-2022", pubGrantedDate: "14-10-2022", publicationNumber: "202211056620" },
        { sno: 6, applicationNo: "202211063521", status: "Published", inventors: "Ms. Sulekha Saxena, Dr. Ram Sewak Singh, Dr. Praveen Kumar, Dr. Devendra Kumar Sinha, Dr. Seema Garg, Dr. Smriti Tripathi, Dr. Pushpendra Singh", title: "A Tongue-Driven Vehicle With Vehicle Tracking Technology And Flexible Speed Regulation For People With Disabilities", applicants: "Ms. Sulekha Saxena, Dr. Ram Sewak Singh, Dr. Praveen Kumar, Dr. Devendra Kumar Sinha, Dr. Seema Garg, Dr. Smriti Tripathi, Dr. Pushpendra Singh", filedDate: "07-11-2022", pubGrantedDate: "18-11-2022", publicationNumber: "202211063521" },
        { sno: 7, applicationNo: "202311030989", status: "Published", inventors: "Meenakshi Awasthi, Asheesh Yadav, Ayush Sharma, Aslam Ahmad, Chetan Tomar", title: "Amphibious Garbage Collection System", applicants: "Ajay Kumar Garg Engineering College, Ghaziabad", filedDate: "01-05-2023", pubGrantedDate: "09-06-2023", publicationNumber: "202311030989" },
        { sno: 8, applicationNo: "202311001875A", status: "Published", inventors: "Dr. Abhijeet Upadhya", title: "Hybrid Wireless Network Communication System", applicants: "Ajay Kumar Garg Engineering College, Ghaziabad", filedDate: "09-01-2023", pubGrantedDate: "13-01-2023", publicationNumber: "202311001875A" },
        { sno: 9, applicationNo: "202311012082", status: "Published", inventors: "Pratima Singh, Ishaan Saxena, Pranjali Singh, Shreyas Maitreya, Seema Garg", title: "Emotional health management system: a multimodal Approach to emotion detection using transfer learning and Transformer model", applicants: "Pratima Singh", filedDate: "07-10-2022", pubGrantedDate: "21-02-2023", publicationNumber: "202311012082" },
        { sno: 10, applicationNo: "367902-001", status: "Granted", inventors: "Devesh Mishra, Karunesh, Krishna Kant Agarwal, Avinash Kumar Sharma", title: "Device For Testing Moisture Control In Soil", applicants: "Devesh Mishra, Karunesh, Krishna Kant Agarwal, Avinash Kumar Sharma", filedDate: "18-07-2022", pubGrantedDate: "20-04-2023", publicationNumber: "367902-001" },
        { sno: 11, applicationNo: "365603-001", status: "Published", inventors: "Devesh Mishra, Karunesh, Amrees Pandey, Sharad Kumar Singh", title: "Iot Based Drainage Pipes Cleaning Robot", applicants: "Devesh Mishra, Karunesh, Amrees Pandey, Sharad Kumar Singh", filedDate: "04-11-2022", pubGrantedDate: "24-03-2023", publicationNumber: "365603-001" },
        { sno: 12, applicationNo: "374833-001", status: "Granted", inventors: "Devesh Mishra, Karunesh, Rekha Srivastava, Mayuri Kulshreshta", title: "Sensor Assembly To Detect Gas Leakage And Blockage In Pipelines", applicants: "Devesh Mishra, Karunesh, Rekha Srivastava, Mayuri Kulshreshta", filedDate: "30-11-2022", pubGrantedDate: "25-01-2023", publicationNumber: "374833-001" },
        { sno: 13, applicationNo: "380553-001", status: "Granted", inventors: "Dr. Neha Sharma, Dr. Meenakshi Awasthi, Dr. Akhilendra Khare, Er. Kamalpreet Gaur", title: "A Novel Hydraulic PLC Based Wireless Automated Guided Robotic Patient Lifts", applicants: "Dr. Neha Sharma, Dr. Meenakshi Awasthi, Dr. Akhilendra Khare, Er. Kamalpreet Gaur", filedDate: "01-03-2023", pubGrantedDate: "15-05-2023", publicationNumber: "380553-001" }
    ];

    // Pagination setup
    const itemsPerPage = 10; // Adjust this number as needed
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
            {/* Page heading */}
            <h1 className="text-[42px] font-novaReg leading-none mb-4 ">ECE Patent</h1>

            {/* Patent Data Table */}
            <table className="min-w-full my-4 bg-white border border-gray-300">
                <thead>
                    <tr className="bg-[#363c83] border-inherit text-white h-[44px]">
                        {/* Rendering table headings */}
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
                    {/* Rendering paginated patent data rows */}
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
                            <td className="py-4 px-4 text-sm border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                {item.publicationNumber}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-between max-sm:flex-col">
                <div className="text-sm mb-2.5 mr-5 pt-3 text-gray-700">
                    Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, totalEntries)} of {totalEntries} entries
                </div>
                <div className="text-sm w-fit bg-blue-950 rounded-lg flex items-center">
                    {/* Previous Button */}
                    <button
                        className={`text-white px-4 py-2.5 rounded-l ${currentPage === 1 ? 'bg-blue-800 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        Previous
                    </button>

                    {/* Page Numbers */}
                    {[...Array(totalPages)].map((_, pageIndex) => (
                        <button
                            key={pageIndex + 1}
                            className={`text-white px-4 py-2.5 ${currentPage === pageIndex + 1 ? 'bg-primary' : 'hover:bg-blue-700'} transition duration-150`}
                            onClick={() => handlePageChange(pageIndex + 1)}
                        >
                            {pageIndex + 1}
                        </button>
                    ))}

                    {/* Next Button */}
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

export default EcePatent;
