"use client";

import { useState } from "react"

const programmesData = {
    "2021-22": [
        { srNo: 1, programCode: "SAH0101", programName: "Master of Science (Clinical Research)", curriculu: "http://example.com/2021-22/SAH0101.pdf" },
        { srNo: 2, programCode: "SAH0112", programName: "Master of Physiotherapy", curriculu: "http://example.com/2021-22/SAH0112.pdf" },
        { srNo: 3, programCode: "SAH0203", programName: "Bachelor of Science (Nursing)", curriculu: "http://example.com/2021-22/SAH0203.pdf" },
        { srNo: 4, programCode: "SAH0304", programName: "Bachelor of Physiotherapy", curriculu: "http://example.com/2021-22/SAH0304.pdf" },
        { srNo: 5, programCode: "SAH0405", programName: "Bachelor of Dental Surgery", curriculu: "http://example.com/2021-22/SAH0405.pdf" },
        { srNo: 6, programCode: "SAH0506", programName: "Master of Dental Surgery", curriculu: "http://example.com/2021-22/SAH0506.pdf" },
        { srNo: 7, programCode: "SAH0607", programName: "Bachelor of Pharmacy", curriculu: "http://example.com/2021-22/SAH0607.pdf" },
        { srNo: 8, programCode: "SAH0708", programName: "Master of Pharmacy", curriculu: "http://example.com/2021-22/SAH0708.pdf" },
        { srNo: 9, programCode: "SAH0809", programName: "Bachelor of Science (Biotechnology)", curriculu: "http://example.com/2021-22/SAH0809.pdf" },
        { srNo: 10, programCode: "SAH0910", programName: "Master of Science (Biotechnology)", curriculu: "http://example.com/2021-22/SAH0910.pdf" },
        { srNo: 11, programCode: "SAH1011", programName: "Bachelor of Optometry", curriculu: "http://example.com/2021-22/SAH1011.pdf" },
        { srNo: 12, programCode: "SAH1112", programName: "Master of Optometry", curriculu: "http://example.com/2021-22/SAH1112.pdf" },
        { srNo: 13, programCode: "SAH1213", programName: "Bachelor of Audiology", curriculu: "http://example.com/2021-22/SAH1213.pdf" },
        { srNo: 14, programCode: "SAH1314", programName: "Master of Audiology", curriculu: "http://example.com/2021-22/SAH1314.pdf" },
        { srNo: 15, programCode: "SAH1415", programName: "Bachelor of Physiotherapy", curriculu: "http://example.com/2021-22/SAH1415.pdf" },
        { srNo: 16, programCode: "SAH1516", programName: "Bachelor of Radiology", curriculu: "http://example.com/2021-22/SAH1516.pdf" },
        { srNo: 17, programCode: "SAH1617", programName: "Master of Radiology", curriculu: "http://example.com/2021-22/SAH1617.pdf" },
        { srNo: 18, programCode: "SAH1718", programName: "Bachelor of Medical Laboratory Technology", curriculu: "http://example.com/2021-22/SAH1718.pdf" },
        { srNo: 19, programCode: "SAH1819", programName: "Master of Medical Laboratory Technology", curriculu: "http://example.com/2021-22/SAH1819.pdf" },
        { srNo: 20, programCode: "SAH1920", programName: "Master of Public Health", curriculu: "http://example.com/2021-22/SAH1920.pdf" },
    ],
    "2020-21": [
        { srNo: 1, programCode: "SAH0101", departmentName: "CS", programName: "Science (Clinical Research)", curriculu: "http://example.com/2020-21/SAH0101.pdf" },
        { srNo: 2, programCode: "SAH0112", departmentName: "PD", programName: "Master of Physiotherapy", curriculu: "http://example.com/2020-21/SAH0112.pdf" },
        { srNo: 3, programCode: "SAH0203", departmentName: "CS", programName: "Bachelor of Science (Nursing)", curriculu: "http://example.com/2020-21/SAH0203.pdf" },
        { srNo: 4, programCode: "SAH0304", departmentName: "PD", programName: "Bachelor of Physiotherapy", curriculu: "http://example.com/2020-21/SAH0304.pdf" },
        { srNo: 5, programCode: "SAH0405", departmentName: "CS", programName: "Bachelor of Dental Surgery", curriculu: "http://example.com/2020-21/SAH0405.pdf" },
        { srNo: 6, programCode: "SAH0506", departmentName: "PD", programName: "Master of Dental Surgery", curriculu: "http://example.com/2020-21/SAH0506.pdf" },
        { srNo: 7, programCode: "SAH0607", departmentName: "CS", programName: "Bachelor of Pharmacy", curriculu: "http://example.com/2020-21/SAH0607.pdf" },
        { srNo: 8, programCode: "SAH0708", departmentName: "PD", programName: "Master of Pharmacy", curriculu: "http://example.com/2020-21/SAH0708.pdf" },
        { srNo: 9, programCode: "SAH0809", departmentName: "CS", programName: "Bachelor of Science (Biotechnology)", curriculu: "http://example.com/2020-21/SAH0809.pdf" },
        { srNo: 10, programCode: "SAH0910", departmentName: "PD", programName: "Master of Science (Biotechnology)", curriculu: "http://example.com/2020-21/SAH0910.pdf" },
        { srNo: 11, programCode: "SAH1011", departmentName: "CS", programName: "Bachelor of Optometry", curriculu: "http://example.com/2020-21/SAH1011.pdf" },
        { srNo: 12, programCode: "SAH1112", departmentName: "PD", programName: "Master of Optometry", curriculu: "http://example.com/2020-21/SAH1112.pdf" },
        { srNo: 13, programCode: "SAH1213", departmentName: "CS", programName: "Bachelor of Audiology", curriculu: "http://example.com/2020-21/SAH1213.pdf" },
        { srNo: 14, programCode: "SAH1314", departmentName: "PD", programName: "Master of Audiology", curriculu: "http://example.com/2020-21/SAH1314.pdf" },
        { srNo: 15, programCode: "SAH1415", departmentName: "CS", programName: "Bachelor of Physiotherapy", curriculu: "http://example.com/2020-21/SAH1415.pdf" },
        { srNo: 16, programCode: "SAH1516", departmentName: "PD", programName: "Bachelor of Radiology", curriculu: "http://example.com/2020-21/SAH1516.pdf" },
        { srNo: 17, programCode: "SAH1617", departmentName: "CS", programName: "Master of Radiology", curriculu: "http://example.com/2020-21/SAH1617.pdf" },
        { srNo: 18, programCode: "SAH1718", departmentName: "PD", programName: "Bachelor of Medical Laboratory Technology", curriculu: "http://example.com/2020-21/SAH1718.pdf" },
        { srNo: 19, programCode: "SAH1819", departmentName: "CS", programName: "Master of Medical Laboratory Technology", curriculu: "http://example.com/2020-21/SAH1819.pdf" },
        { srNo: 20, programCode: "SAH1920", departmentName: "PD", programName: "Master of Public Health", curriculu: "http://example.com/2020-21/SAH1920.pdf" },
    ],
    "2019-20": [
        { srNo: 1, programCode: "SAH0101", programName: "(Clinical Research)", curriculu: "http://example.com/2019-20/SAH0101.pdf" },
        { srNo: 2, programCode: "SAH0112", programName: "Master of Physiotherapy", curriculu: "http://example.com/2019-20/SAH0112.pdf" },
        { srNo: 3, programCode: "SAH0203", programName: "Bachelor of Science (Nursing)", curriculu: "http://example.com/2019-20/SAH0203.pdf" },
        { srNo: 4, programCode: "SAH0304", programName: "Bachelor of Physiotherapy", curriculu: "http://example.com/2019-20/SAH0304.pdf" },
        { srNo: 5, programCode: "SAH0405", programName: "Bachelor of Dental Surgery", curriculu: "http://example.com/2019-20/SAH0405.pdf" },
        { srNo: 6, programCode: "SAH0506", programName: "Master of Dental Surgery", curriculu: "http://example.com/2019-20/SAH0506.pdf" },
        { srNo: 7, programCode: "SAH0607", programName: "Bachelor of Pharmacy", curriculu: "http://example.com/2019-20/SAH0607.pdf" },
        { srNo: 8, programCode: "SAH0708", programName: "Master of Pharmacy", curriculu: "http://example.com/2019-20/SAH0708.pdf" },
        { srNo: 9, programCode: "SAH0809", programName: "Bachelor of Science (Biotechnology)", curriculu: "http://example.com/2019-20/SAH0809.pdf" },
        { srNo: 10, programCode: "SAH0910", programName: "Master of Science (Biotechnology)", curriculu: "http://example.com/2019-20/SAH0910.pdf" },
        { srNo: 11, programCode: "SAH1011", programName: "Bachelor of Optometry", curriculu: "http://example.com/2019-20/SAH1011.pdf" },
        { srNo: 12, programCode: "SAH1112", programName: "Master of Optometry", curriculu: "http://example.com/2019-20/SAH1112.pdf" },
        { srNo: 13, programCode: "SAH1213", programName: "Bachelor of Audiology", curriculu: "http://example.com/2019-20/SAH1213.pdf" },
        { srNo: 14, programCode: "SAH1314", programName: "Master of Audiology", curriculu: "http://example.com/2019-20/SAH1314.pdf" },
        { srNo: 15, programCode: "SAH1415", programName: "Bachelor of Physiotherapy", curriculu: "http://example.com/2019-20/SAH1415.pdf" },
        { srNo: 16, programCode: "SAH1516", programName: "Bachelor of Radiology", curriculu: "http://example.com/2019-20/SAH1516.pdf" },
        { srNo: 17, programCode: "SAH1617", programName: "Master of Radiology", curriculu: "http://example.com/2019-20/SAH1617.pdf" },
        { srNo: 18, programCode: "SAH1718", programName: "Bachelor of Medical Laboratory Technology", curriculu: "http://example.com/2019-20/SAH1718.pdf" },
        { srNo: 19, programCode: "SAH1819", programName: "Master of Medical Laboratory Technology", curriculu: "http://example.com/2019-20/SAH1819.pdf" },
        { srNo: 20, programCode: "SAH1920", programName: "Master of Public Health", curriculu: "http://example.com/2019-20/SAH1920.pdf" },
    ],
};


const ProgrammeCurriculum = () => {
    const [selectedYear, setSelectedYear] = useState("2021-22")

    const columns = Object.keys(programmesData[selectedYear][0]);

    return (
        <div className="container mx-auto p-4">
            <div className="flex space-x-4 mb-6">
                <button
                    onClick={() => setSelectedYear("2021-22")}
                    className={`px-4 py-2 ${selectedYear === "2021-22" ? 'bg-primary text-white rounded-br-lg rounded-tl-lg' : 'bg-secondary text-black border border-gray-300 rounded-bl-lg rounded-tr-lg'}`}
                >
                    Programme Curriculum 2021-22
                </button>
                <button
                    onClick={() => setSelectedYear("2020-21")}
                    className={`px-4 py-2 ${selectedYear === "2020-21" ? 'bg-primary text-white rounded-br-lg rounded-tl-lg' : 'bg-secondary text-black border border-gray-300 rounded-bl-lg rounded-tr-lg'}`}
                >
                    Programme Curriculum 2020-21
                </button>
                <button
                    onClick={() => setSelectedYear("2019-20")}
                    className={`px-4 py-2 ${selectedYear === "2019-20" ? 'bg-primary text-white rounded-br-lg rounded-tl-lg' : 'bg-secondary text-black border border-gray-300 rounded-bl-lg rounded-tr-lg'}`}
                >
                    Programme Curriculum 2019-20
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            {columns.map((col) => (
                                <th key={col} className="border p-2 text-left bg-indigo-950 text-white font-novaReg capitalize">
                                    {col === 'curriculu' ? 'Curriculum' : col.replace(/([A-Z])/g, ' $1')}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {programmesData[selectedYear].map((programme, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                {columns.map((col) => (
                                    <td key={col} className="border font-novaReg p-2">
                                        {col === 'curriculu' ? (
                                            <a
                                                href={programme['curriculu']}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                View Curriculum
                                            </a>
                                        ) : (
                                            programme[col]
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProgrammeCurriculum