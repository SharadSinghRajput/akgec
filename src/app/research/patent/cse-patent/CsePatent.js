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
    "Patent Publication Number / Patent Granted Number"
];

const patentData = [
    { sno: 1, applicationNo: "202011020506", status: "Published", inventors: "Dr. Inderjeet Kaur", title: "System and Method for Automated Detection of Digital Modulation Technique", applicants: "Dr. Inderjeet Kaur", filedDate: "15-05-2020", pubGrantedDate: "14-08-2020", publicationNumber: "202011020506" },
    { sno: 2, applicationNo: "202011018854", status: "Published", inventors: "Mr. Shashank Sahu", title: "System and method for detecting a potential collision and providing alert.", applicants: "Mr. Shashank Sahu", filedDate: "12-03-2020", pubGrantedDate: "19-06-2020", publicationNumber: "202011018854" },
    { sno: 3, applicationNo: "201911050943", status: "Published", inventors: "Dr. Sachin Kumar", title: "Exceeded the ATM Network: Account-Holder has exceeded the ATM Network Limit", applicants: "Dr. Sachin Kumar", filedDate: "12-10-2019", pubGrantedDate: "03-01-2020", publicationNumber: "201911050943" },
    { sno: 4, applicationNo: "2020104033", status: "Granted", inventors: "Ms. Prachi Pundir", title: "CDM- Separating Items Device: Separating Items into their Corresponding Class using Iris Dataset Machine Learning Classification Device", applicants: "Ms. Prachi Pundir", filedDate: "12-12-2020", pubGrantedDate: "12-12-2020", publicationNumber: "2020104033" },
    { sno: 5, applicationNo: "2021102487", status: "Granted", inventors: "Ms. Nishu Bansal", title: "Artificial Intelligence Based Surveillance System for Oxygen Concentrator at Inventory Level", applicants: "Ms. Nishu Bansal", filedDate: "12-05-2021", pubGrantedDate: "05-12-2021", publicationNumber: "2021102487" },
    { sno: 6, applicationNo: "2021103399", status: "Granted", inventors: "Mr. Ajay Kumar", title: "An IoT Based Solar Washing Machine", applicants: "Mr. Ajay Kumar", filedDate: "16-06-2021", pubGrantedDate: "16-06-2021", publicationNumber: "2021103399" },
    { sno: 7, applicationNo: "2022101734", status: "Granted", inventors: "Mr. Jay Kant Pratap Singh Yadav", title: "Smart Healthcare Solutions for Patient Monitoring and Predicting Pathological Status Using AI And IoT-Based Technology", applicants: "Mr. Jay Kant Pratap Singh Yadav", filedDate: "06-04-2021", pubGrantedDate: "04-06-2021", publicationNumber: "2022101734" },
    { sno: 8, applicationNo: "202111019223 A", status: "Published", inventors: "Dr. Charu Agarwal", title: "Sensor Based Electronic Device", applicants: "Dr. Charu Agarwal", filedDate: "27-04-2021", pubGrantedDate: "27-04-2021", publicationNumber: "202111019223 A" },
    { sno: 9, applicationNo: "202111011966 A", status: "Published", inventors: "Dr. Charu Agarwal", title: "IoT Based Smart Shoes for Child Health Monitoring", applicants: "Dr. Charu Agarwal", filedDate: "20-03-2021", pubGrantedDate: "20-03-2021", publicationNumber: "202111011966 A" },
    { sno: 10, applicationNo: "2021101143", status: "Granted", inventors: "Dr. Inderjeet Kaur", title: "Sustainable Remote Assisted & Transportable Neonatal Care Device for Jaundice Treatment", applicants: "Dr. Inderjeet Kaur", filedDate: "15-05-2020", pubGrantedDate: "03-03-2021", publicationNumber: "2021101143" },
    { sno: 11, applicationNo: "2021101143", status: "Granted", inventors: "Mr. Jay Kant Pratap Singh Yadav", title: "Sustainable Remote Assisted & Transportable Neonatal Care Device for Jaundice Treatment", applicants: "Mr. Jay Kant Pratap Singh Yadav", filedDate: "15-05-2020", pubGrantedDate: "03-03-2021", publicationNumber: "2021101143" },
    { sno: 12, applicationNo: "202112310", status: "Granted", inventors: "Ms. Swimpy Pahuja", title: "IoT Based Sustainable Incinerator for Biomedical and Pharmaceutical Waste", applicants: "Ms. Swimpy Pahuja", filedDate: "01-05-2021", pubGrantedDate: "05-01-2021", publicationNumber: "202112310" },
    { sno: 13, applicationNo: "202112310", status: "Granted", inventors: "Ms. Nishu Bansal", title: "IoT Based Sustainable Incinerator for Biomedical and Pharmaceutical Waste", applicants: "Ms. Nishu Bansal", filedDate: "01-05-2021", pubGrantedDate: "05-01-2021", publicationNumber: "202112310" },
    { sno: 14, applicationNo: "202241018061 A", status: "Published", inventors: "Dr. Suman Bhatia", title: "Intelligent Robotic Exoskeleton and Brain Sensing Headband to Enable Paralyzed Patients to Locomote", applicants: "Dr. Suman Bhatia", filedDate: "28-03-2022", pubGrantedDate: "01-04-2022", publicationNumber: "202241018061 A" },
    { sno: 15, applicationNo: "202211036448", status: "Published", inventors: "Ms. Anuradha", title: "A Method for Intelligent Bid Price Selection for Profit Accumulation Using Machine Learning", applicants: "Ms. Anuradha", filedDate: "11-01-2022", pubGrantedDate: "08-07-2022", publicationNumber: "2.02211E+11" },
    { sno: 16, applicationNo: "202241012480 A", status: "Published", inventors: "Dr. Suman Bhatia", title: "Design of Machine Learning Classification Algorithm Using Image Processing for Detection of Vegetable Crops Disease", applicants: "Dr. Suman Bhatia", filedDate: "08-03-2022", pubGrantedDate: "18-03-2022", publicationNumber: "202241012480 A" },
    { sno: 17, applicationNo: "202221001572", status: "Published", inventors: "Ms. Anuradha", title: "System and Method for Achieving Cyber Security of Internet of Things (IoT) Devices Using Embedded Recognition Token", applicants: "Ms. Anuradha", filedDate: "11-01-2022", pubGrantedDate: "25-02-2022", publicationNumber: "2.02221E+11" },
    { sno: 18, applicationNo: "202241056451", status: "Published", inventors: "Mr. Ashish Kumar, Ms. Lakshita Sejwal", title: "IoT-Driven Intelligent Monitoring System for Autism Children’s Emotion Recognition from Smart Class Video", applicants: "Mr. Ashish Kumar, Ms. Lakshita Sejwal", filedDate: "14-10-2022", pubGrantedDate: "14-10-2022", publicationNumber: "2.02241E+11" },
    { sno: 19, applicationNo: "202311008611", status: "Published", inventors: "Anuj Kumar Dwivedi, Raghuraj Singh, Santosh Kumar Upadhayay", title: "System and Method for IoT-Based Traffic Optimization System", applicants: "Anuj Kumar Dwivedi, Raghuraj Singh, Santosh Kumar Upadhayay", filedDate: "10-02-2023", pubGrantedDate: "20-02-2023", publicationNumber: "2.02311E+11" },
    { sno: 20, applicationNo: "202311008831", status: "Published", inventors: "Sonam Gupta", title: "Method for Wavelet Tree Compression in Legal Documents", applicants: "Sonam Gupta", filedDate: "10-02-2023", pubGrantedDate: "17-02-2023", publicationNumber: "2.02311E+11" },
    { sno: 21, applicationNo: "202321007172", status: "Published", inventors: "Dr. Jaishree Jain, Manoj Kumar 2", title: "An UHF RFID Tag-Based System Using Characteristic Modes for IoT Applications", applicants: "Dr. Jaishree Jain, Manoj Kumar 2", filedDate: "10-02-2023", pubGrantedDate: "17-02-2023", publicationNumber: "2.02321E+11" },
    { sno: 22, applicationNo: "202311033594", status: "Published", inventors: "Dr. Jaishree Jain, Ankita Rani", title: "An Effective Risk Assessment System for E-Commerce in Cloud Computing with Big Data Approach to Network Security", applicants: "Dr. Jaishree Jain, Ankita Rani", filedDate: "10-06-2023", pubGrantedDate: "23-06-2023", publicationNumber: "2.02311E+11" },
    { sno: 23, applicationNo: "202311015388", status: "Published", inventors: "Dr. Jaishree Jain, Anuj Diwedi, Ashish Dixit, Sachin Jain", title: "Cloud Computing Economic Denial of Sustainability Attack Detection System Based on AI Algorithms", applicants: "Dr. Jaishree Jain, Anuj Diwedi, Ashish Dixit, Sachin Jain", filedDate: "01-03-2023", pubGrantedDate: "01-03-2023", publicationNumber: "2.02311E+11" },
    { sno: 24, applicationNo: "202311029650", status: "Published", inventors: "Dr. Pratima Singh", title: "Psychosomatic State Management System", applicants: "Dr. Pratima Singh", filedDate: "01-05-2026", pubGrantedDate: "01-05-2026", publicationNumber: "2.02311E+11" },
    { sno: 25, applicationNo: "202311009452", status: "Published", inventors: "Dr. Pratima Singh", title: "Learning Assistive System for Visually Impaired", applicants: "Dr. Pratima Singh", filedDate: "01-04-2023", pubGrantedDate: "01-04-2023", publicationNumber: "2.02311E+11" },
    { sno: 26, applicationNo: "202311007261", status: "Published", inventors: "Santosh Kumar Upadhayay, Neeraj Sagar, B.N. Pandey, Pradeep Gupta", title: "System and Method for Fake News Detection", applicants: "Santosh Kumar Upadhayay, Neeraj Sagar, B.N. Pandey, Pradeep Gupta", filedDate: "17-02-2023", pubGrantedDate: "17-02-2023", publicationNumber: "2.02311E+11" },
    { sno: 27, applicationNo: "202241053878", status: "Published", inventors: "Sharma Ji", title: "IoT Based Remote Intelligence Healthcare System for the Detection and Prevention of Patients Using AI", applicants: "Sharma Ji", filedDate: "21-09-2022", pubGrantedDate: "21-09-2022", publicationNumber: "2.02241E+11" },
    { sno: 28, applicationNo: "202311011173", status: "Published", inventors: "Rajesh Prasad", title: "A Method of Secure Watermarking for Color Images Using Aadhar Number, DWT and SVD", applicants: "Rajesh Prasad", filedDate: "13-03-2023", pubGrantedDate: "13-03-2023", publicationNumber: "2.02311E+11" },
    { sno: 29, applicationNo: "20231102542", status: "Published", inventors: "Sachin Jain", title: "A Novel System for Analysing and Image Processing for Face Recognition and Method Thereof", applicants: "Sachin Jain", filedDate: "19-05-2023", pubGrantedDate: "19-05-2023", publicationNumber: "20231102542" },
    { sno: 30, applicationNo: "202311020806", status: "Published", inventors: "Dr. Charu Agarwal, Dr. Jaishree Jain, Pradeep Gupta", title: "Location-Based Analysis of Healthcare Facilities Based on Specific Performance", applicants: "Dr. Charu Agarwal, Dr. Jaishree Jain, Pradeep Gupta", filedDate: "23-03-2023", pubGrantedDate: "19-05-2023", publicationNumber: "2.02311E+11" },
    { sno: 31, applicationNo: "202311021348", status: "Published", inventors: "Dr. Charu Agarwal, Pradeep Gupta", title: "Intermediate Brain Disease State Prediction Using Machine Learning", applicants: "Dr. Charu Agarwal, Pradeep Gupta", filedDate: "12-05-2023", pubGrantedDate: "12-05-2023", publicationNumber: "2.02311E+11" },
    { sno: 32, applicationNo: "", status: "Published", inventors: "Dr. Charu Agarwal", title: "IoT Driven Design System Using Machine Learning for Detecting Driver Drowsiness", applicants: "Dr. Charu Agarwal", filedDate: "17-03-2023", pubGrantedDate: "17-03-2023", publicationNumber: "2.02341E+11" },
    { sno: 33, applicationNo: "202211075281", status: "Published", inventors: "Dr. Anuradha", title: "A Stereo Vision-Based Machine Learning Model for Identifying Targeted Objects", applicants: "Dr. Anuradha", filedDate: "24-12-2022", pubGrantedDate: "30-12-2022", publicationNumber: "2.02211E+11" },
    { sno: 34, applicationNo: "202311011086", status: "Published", inventors: "Yogendra Narayan Prajapati", title: "Internet of Things Enabled Face Mask Detection of Human in Crowded Space", applicants: "Yogendra Narayan Prajapati", filedDate: "10-02-2023", pubGrantedDate: "10-02-2023", publicationNumber: "2.02311E+11" },
    { sno: 35, applicationNo: "201211040965", status: "Published", inventors: "Yogendra Narayan Prajapati", title: "A System and Method for Detecting Hidden Potholes to Ensure Pedestrian Safety During Floods", applicants: "Yogendra Narayan Prajapati", filedDate: "16-06-2023", pubGrantedDate: "16/06/2023", publicationNumber: "2.01211E+11" },
    { sno: 36, applicationNo: "383378-001", status: "Granted", inventors: "Pronab Kumar Adhikari", title: "AI Based Network Intrusion Detection Device", applicants: "Pronab Kumar Adhikari", filedDate: "08-04-2023", pubGrantedDate: "08-04-2023", publicationNumber: "383378-001" },
    { sno: 37, applicationNo: "202311019666", status: "Published", inventors: "Rajesh Prasad", title: "System and Method for Equivariance Transition in Group Convolutional Neural Networks for Breast Cancer Classification", applicants: "Rajesh Prasad", filedDate: "09-06-2023", pubGrantedDate: "09-06-2023", publicationNumber: "2.02311E+11" },
    { sno: 38, applicationNo: "202311041698", status: "Published", inventors: "Sachin Jain", title: "A System by Utilizing Machine Learning Approach for Personality Classification from Online Text", applicants: "Sachin Jain", filedDate: "28-07-2023", pubGrantedDate: "28-07-2023", publicationNumber: "2.02311E+11" },
    { sno: 39, applicationNo: "202311026336", status: "Published", inventors: "Ashish Dixit", title: "A System Framework for Content Creators and Marketers Using the Metaverse Spice Model", applicants: "Ashish Dixit", filedDate: "19-05-2023", pubGrantedDate: "19-05-2023", publicationNumber: "2.02311E+11" },
    { sno: 40, applicationNo: "202311000601", status: "Published", inventors: "Ashish Dixit", title: "A CNN-Based System for Security-Assured Image Watermarking Generation and Method Thereof", applicants: "Ashish Dixit", filedDate: "13-01-2023", pubGrantedDate: "13-01-2023", publicationNumber: "2.02311E+11" },
    { sno: 41, applicationNo: "202211074518", status: "Published", inventors: "Ashish Dixit", title: "A Hybrid Model of Enterprise Resource Planning System of Human Resources on the Employee’s Performance Appraisal in Industry", applicants: "Ashish Dixit", filedDate: "30-12-2022", pubGrantedDate: "30-12-2022", publicationNumber: "2.02211E+11" },
    { sno: 42, applicationNo: "202211066576 A", status: "Published", inventors: "Manish Kumar, Anuj Kumar", title: "Haircut Pattern Detection Using Machine Learning Algorithm to Identify Deviation", applicants: "Manish Kumar, Anuj Kumar", filedDate: "02-12-2022", pubGrantedDate: "02-12-2022", publicationNumber: "202211066576 A" }
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
            <h1 className="text-[42px] font-novaReg leading-none mb-4">CSE Patent</h1>
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
                            <td className="py-4 px-4 text-sm border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                {item.publicationNumber}
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