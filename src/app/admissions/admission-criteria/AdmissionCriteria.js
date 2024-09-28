import Table from '@/Components/Table'
import React from 'react'

const admissionData = [
    {
      "courseName": "Master of Business Administration (under CASSM)",
      "head": "PG",
      "description": "Bachelor degree in any discipline with at least 50% marks from recognized University/ Institution. Graduates of recognized professional programmes like CA/ ICWA etc. are also eligible to apply. (For CASSM)"
    },
    {
      "courseName": "B.Sc - (Computer Science, Statistics and Mathematics)",
      "head": "UG",
      "description": "Candidate must have completed 10+2 examination or any other examination recognized as equivalent thereto with mathematics as one of the subjects and having at least 50% marks in aggregate."
    },
    {
      "courseName": "B.Sc - (Forensic Science)",
      "head": "UG",
      "description": "10+2 with 50% marks in aggregate from a recognized Board in Science stream."
    },
    {
      "courseName": "B.Sc - (Hons.) (Medical Lab Technology)",
      "head": "UG",
      "description": "10+2 examination with at least 50% marks in aggregate with Physics and Chemistry as compulsory subjects, along with one of the following subjects: Biology/Mathematics conducted by a recognised Board or its equivalent examination."
    },
    {
      "courseName": "B.Sc - (Hons.) (Medical Lab Technology) - Lateral Entry",
      "head": "UG",
      "description": "Three-year Diploma in MLT after 10th and Two-year diploma after 10+2 in science stream."
    },
    {
      "courseName": "B.Sc - (Hons.) Mathematics",
      "head": "UG",
      "description": "Candidate must have completed 10+2 examination, or any other examination recognized as equivalent thereto with Mathematics as one of the subjects and having at least 50% marks in aggregate."
    },
    {
      "courseName": "B.Sc - (Microbiology)",
      "head": "UG",
      "description": "10+2 examination with at least 50% marks in aggregate with Physics/Chemistry and Mathematics/ Biology/ Zoology/ Botany/ Agriculture conducted by a recognized Board / University/council or its equivalent."
    },
    {
      "courseName": "B.Sc - (Nutrition & Dietetics)",
      "head": "UG",
      "description": "10+2 or its equivalent examination with Physics, Chemistry and Mathematics/ Biology/ Agriculture/ Home Science with at least 50% marks in aggregate."
    },
    {
      "courseName": "B.Sc - Chemistry (Hons.)",
      "head": "UG",
      "description": "10+2 examination in Science Stream with Physics, Chemistry and Mathematics/ Biology/ Computer Science / Informatics Practices/ Information Technology as compulsory subjects with at least 50% marks from a recognized board of the country."
    },
    {
      "courseName": "B.Sc - Medical",
      "head": "UG",
      "description": "10+2 examination with Physics, Biology / Zoology & Botany and Chemistry as compulsory subjects, conducted by a recognized board or its equivalent examination with at least 50% marks in aggregate."
    },
    {
      "courseName": "B.Sc - Physics (Hons.)",
      "head": "UG",
      "description": "10+2 examination in Science Stream with Physics, Chemistry and Mathematics as compulsory subjects with at least 50% marks from a recognized board of the country."
    },
    {
      "courseName": "Bachelor of Architecture",
      "head": "UG",
      "description": "No candidate shall be admitted to architecture course unless she/he has passed 10+2 or equivalent examination with Physics and Mathematics as compulsory subjects along with either Chemistry or Biology or Technical Vocational subject or Computer Science or Information Technology or Informatics Practices or Engineering Graphics or Business Studies with at least 45% marks in aggregate or passed 10+3 Diploma Examination with Mathematics as compulsory subject with at least 45% marks in aggregate. The candidate needs to qualify an aptitude test in architecture conducted either by NTA (i.e. JEE) or NATA conducted by the Council of Architecture."
    },
    {
      "courseName": "Bachelor of Arts (Journalism and Mass Communication) (ITP)",
      "head": "UG",
      "description": "10+2 with at least 50% marks in aggregate or its equivalent examination in any stream conducted by a recognized Board / University / Council in the aggregate OR 45% marks in 10+2 in any stream with at least 55% in English as the subject."
    },
    {
      "courseName": "Bachelor of Arts (Psychology) (Hons.) (ITP)",
      "head": "UG",
      "description": "10+2 in any stream with 55% marks from a recognized Board/University."
    },
    {
      "courseName": "Bachelor of Arts - Economics",
      "head": "UG",
      "description": "10+2 examination with at least 50% marks, conducted by a recognized board or its equivalent examination. In addition, applicant must have studied Mathematics/ Computers/ Statistics/ Accountancy/ Banking/ Business Studies/ Economics as one of the subjects at 10+2 level."
    },
    {
      "courseName": "Bachelor of Arts - Journalism and Mass Communication",
      "head": "UG",
      "description": "10+2 with at least 50% marks in aggregate or its equivalent examination in any stream conducted by a recognized Board / University / Council in the aggregate OR 45% marks in 10+2 in any stream with at least 55% in English as the subject."
    },
    {
      "courseName": "Bachelor of Arts - Psychology (Hons.)",
      "head": "UG",
      "description": "10+2 in any stream with 55% marks from a recognized Board/University."
    },
    {
      "courseName": "Bachelor of Business Administration (Hons./Hons. with Research) (FinTech)",
      "head": "UG",
      "description": "10+2 or its equivalent examination in any stream conducted by a recognized Board with at least 50% marks in the aggregate."
    },
    {
      "courseName": "Bachelor of Business Administration (Hons./Hons. with Research) (Logistics and Supply Chain Management)",
      "head": "UG",
      "description": "10+2 or its equivalent examination in any stream conducted by a recognized Board with at least 50% marks in the aggregate."
    },
    {
      "courseName": "Bachelor of Business Administration + Master of Business Administration (Integrated)",
      "head": "UG",
      "description": "10+2 with 50% marks in aggregate or its equivalent examination in any stream conducted by a recognized Board / University / Council. (For CASSM)"
    },
    {
      "courseName": "Bachelor of Commerce (B.Com) - Hons ITP (Study in Australia)",
      "head": "UG",
      "description": "10+2 with 50% marks in aggregate or its equivalent examination in any stream conducted by a recognized Board / University / Council."
    },
    {
      "courseName": "Bachelor of Commerce (Hons) General/ Auditing & Taxation/ Advanced Cost & Management Accounting/E-Commerce)",
      "head": "UG",
      "description": "10+2 with 50% marks in aggregate or its equivalent examination in any stream conducted by a recognized Board / University / Council."
    },
    {
      "courseName": "Bachelor of Commerce (In association with Association of Chartered Certified Accountants)",
      "head": "PG",
      "description": "10+2 or its equivalent examination in any stream conducted by a recognized Board with at least 60% marks in the aggregate."
    },
    {
      "courseName": "Bachelor of Commerce + Bachelor of Law (B.Com. + LLB(Hons)) - Integrated",
      "head": "UG",
      "description": "10+2 with at least 55% marks in any stream conducted by a recognized Board / University / Council in the aggregate."
    },
    {
      "courseName": "Bachelor of Computer Applications",
      "head": "UG",
      "description": "10+2 or its equivalent examination in any stream with at least 50% marks conducted by a recognized Board / University."
    }
  ]
  

const AdmissionCriteria = () => {
    const tableHeadings = ["Course Name", "Specialization", "Eligibility Criteria"];
    const heading = "AKG University, Admission Criteria";
    const paragraph = "AKGEC offers top-notch, industry-focused professional programs designed to meet global standards. Our diverse and innovative curriculum provides students with a wide array of options, allowing them to choose courses that align with their interests and career aspirations. Each program comes with its own unique specifications and specializations, enabling AKGEC to implement distinct admission criteria tailored to each course.";
  return (
    <Table heading={heading} paragraph={paragraph} tableHeadings={tableHeadings} data={admissionData} />
  )
}

export default AdmissionCriteria