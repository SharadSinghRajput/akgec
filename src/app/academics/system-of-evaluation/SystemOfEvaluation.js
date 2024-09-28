const marks = [
    {
        "name": "Theory",
        "internal": 40,
        "external": 60,
        "total": 100
    },
    {
        "name": "Practical",
        "internal": 40,
        "external": 60,
        "total": 100
    }
]

const grades = [
    {
        "grade": "A+",
        "description": "Outstanding",
        "points": 10
    },
    {
        "grade": "A",
        "description": "Excellent",
        "points": 9
    },
    {
        "grade": "B⁺",
        "description": "Very Good",
        "points": 8
    },
    {
        "grade": "B",
        "description": "Good",
        "points": 7
    },
    {
        "grade": "C⁺",
        "description": "Average",
        "points": 6
    },
    {
        "grade": "C",
        "description": "Below Average",
        "points": 5
    },
    {
        "grade": "D",
        "description": "Marginal",
        "points": 4
    },
    {
        "grade": "E",
        "description": "Exposed",
        "points": 0
    },
    {
        "grade": "F",
        "description": "Fail/Poor",
        "points": 0
    },
    {
        "grade": "I",
        "description": "Incomplete",
        "points": 0
    }
]


const SystemOfEvaluation = () => {
    return (
        <>
            <div className="px-3 pb-12">
                <h2 className="text-[32px] font-novaReg mb-2.5">System Of Evaluation <br /> at AKG University</h2>
                <p className="mb-5 mt-2.5 font-novaReg text-lg">The examination system of AKGEC University has been designed keeping in view the best available options of evaluation &amp; certification along with their global acceptability. The basic principle of the system is that it is “scientific, objective and transparent” with the least possibility of subjectivity caused due to the individual evaluator, particular subject, or a particular batch of students.</p>
                <p className="mb-5 mt-2.5 font-novaReg text-lg">The examination system is divided as follows:</p>
                <p className="mb-5 mt-2.5 font-novaReg text-lg">1. Internal Assessment: It includes 1st hourly test, 2nd hourly test, surprise test, quiz, tutorials, and assignments.</p>
                <p className="mb-5 mt-2.5 font-novaReg text-lg">2. External Assessment: At the end of semester, a final examination is conducted to evaluate a student’s performance.</p>
                <div>
                    <table className="min-w-full my-4 bg-white rounded-lg">
                        <thead className="bg-[#363c83] text-white h-[44px] rounded-t-lg">
                            <tr className="border-b">
                                <th className="px-4 py-2 text-left border-r border-white border-opacity-10 text-base rounded-tl-lg">Criteria</th>
                                <th className="px-4 py-2 border-r border-white border-opacity-10 text-left text-base">Internal Marks</th>
                                <th className="px-4 py-2 border-r border-white border-opacity-10 text-left text-base">External Marks</th>
                                <th className="px-4 py-2 border-r border-white border-opacity-10 text-left text-base rounded-tr-lg">Total Marks</th>
                            </tr>
                        </thead>
                        <tbody className="border-t-2 rounded-lg">
                            {marks.map((entry, index) => (
                                <tr
                                    key={index}
                                    className={`bg-indigo-950 text-white ${index === marks.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                                >
                                    <td className={`py-4 px-4 text-sm border-b border-white border-opacity-20 ${index === marks.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                        {entry.name}
                                    </td>
                                    <td className="py-4 px-4 text-sm border-b border-l border-white border-opacity-20">
                                        {entry.internal}
                                    </td>
                                    <td className="py-4 px-4 text-sm border-b border-l border-white border-opacity-20">
                                        {entry.external}
                                    </td>
                                    <td className={`py-4 px-4 text-sm border-b border-l border-white border-opacity-20 ${index === marks.length - 1 ? 'rounded-br-lg' : ''}`}>
                                        {entry.total}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <h3 className="font-novaReg text-2xl">Salient Features</h3>
                <p className="text-lg font-novaReg mt-2.5 mb-5">The salient features of the examination system are listed below:</p>
                <ul className="list-disc mb-6 pl-4">
                    <li className="mb-2 text-sm">The papers for the final exams are set through automated software base process out of the question banks created for this purpose.</li>
                    <li className="mb-2 text-sm">The evaluation of the final semester examination would be done through Table Marking at the University. Question-wise evaluation will be done to maintain uniformity.</li>
                    <li className="mb-2 text-sm">10% of the answer books shall be randomly evaluated by outside experts to ensure fairness and equity.</li>
                    <li className="mb-2 text-sm">The evaluated answer books shall be shown to the students. The student will see & sign the Answer books for having agreed to the evaluation.</li>
                    <li className="mb-2 text-sm">In case a student disagrees with the evaluation, he/she can get the answer sheet reviewed by the Evaluation Review Board constituted for the same purpose, on payment of prescribed fee. No change in marks shall be done by any individual teacher.</li>
                    <li className="mb-2 text-sm">The decision of the Evaluation Review Board shall be final and binding.</li>
                    <li className="mb-2 text-sm">If the increase in marks recommended by the Evaluation Review Board is more than 10% of the maximum marks for the subject, the fee submitted for the review shall be refunded to the students.</li>
                    <li className="mb-2 text-sm">Final Internal Evaluation shall be displayed by the departments/Institutes before submission to the University.</li>
                    <li className="mb-2 text-sm">The total marks obtained in Internal and External Examination shall be submitted to the Controller of Examination Office for conversion into grades based on relative grading system.</li>
                    <li className="mb-2 text-sm">Grades shall be awarded to the obtained marks in each paper using Normal Distribution, without any subjectivity.</li>
                    <li className="mb-2 text-sm">A student getting less than 35% of the highest marks obtained in the class shall be awarded ‘F’ grade.</li>
                    <li className="mb-2 text-sm">A student getting more than 50% of the highest marks scored in the class shall not get ‘F’ Grade.</li>
                    <li className="mb-2 text-sm">A student getting marks between 35% to 50% of the highest marks scored in the class may be awarded “F” grade depending upon the mean and variance for the subject.</li>
                    <li className="mb-2 text-sm">The final grades of the semester will be displayed along with SGPA (Semester Grade Point Average) at the time of declaration of results.</li>
                </ul>
                <h3 className="text-2xl font-novaReg w-full">Prevention of unfair means</h3>
                <h3 className="text-2xl font-novaReg w-full text-[#9fa3a7]">Credit and Grade point system of evaluation system</h3>
                <p className="text-lg font-novaReg mt-2.5 mb-5">Any student found to be using unfair means including talking to each other, getting any kind of help from outside, carrying any written material or mobile phone inside the examination hall etc, shall be awarded punishment varying from cancellation of one paper up to disqualification from any examination up to two years. For this purpose a special committee for prevention of unfair means (CPUM) is constituted.</p>
                <ul className="pl-4 mb-6 list-decimal text-sm font-novaReg">
                    <li>At the end of the semester, the students will be awarded a letter grade in each registered course for the semester depending on the total performance that consists of mid semester examinations, tests and quizzes(announced and surprise) , laboratory evaluation, tutorial work, seminars, home assignments and end semester examination.</li>
                    <li>Letter grades will be awarded to the students as indicated below. Each letter grade indicates the level of performance in the course and grade point for the purpose of computing the SGPA, AGPA and CGPA.
                        <br />
                        <div className="mb-4 mt-2">
                            <table className="min-w-full my-4 bg-white rounded-lg">
                                <thead className="bg-[#363c83] text-white h-[44px] rounded-t-lg">
                                    <tr className="border-b">
                                        <th className="px-4 py-2 text-left border-r border-white border-opacity-10 text-base rounded-tl-lg">Grade</th>
                                        <th className="px-4 py-2 border-r border-white border-opacity-10 text-left text-base">Description</th>
                                        <th className="px-4 py-2 border-r border-white border-opacity-10 text-left text-base rounded-tr-lg">Points</th>
                                    </tr>
                                </thead>
                                <tbody className="border-t-2 rounded-lg">
                                    {grades.map((entry, index) => (
                                        <tr
                                            key={index}
                                            className={`bg-indigo-950 text-white ${index === grades.length - 1 ? 'rounded-bl-lg rounded-br-lg' : ''}`}
                                        >
                                            <td className={`py-4 px-4 text-sm border-b border-white border-opacity-20 ${index === grades.length - 1 ? 'rounded-bl-lg' : ''}`}>
                                                {entry.grade}
                                            </td>
                                            <td className="py-4 px-4 text-sm border-b border-l border-white border-opacity-20">
                                                {entry.description}
                                            </td>
                                            <td className={`py-4 px-4 text-sm border-b border-l border-white border-opacity-20 ${index === grades.length - 1 ? 'rounded-br-lg' : ''}`}>
                                                {entry.points}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </li>
                    <li>E Grade: - This grade is awarded to the student who has attended 75% of the scheduled lectures of the subject but is unable to appear in the End Semester Exam. The student is required to appear in the final exam in the relevant semester when it is offered by paying examination fee only. The student can also choose to get the grade based on the marks obtained in various internal evaluations.</li>
                    <li>F Grade: - This grade is awarded to the student who has attended 75% of the scheduled lectures of the subject but scores very low marks in the subject. In this case student has to appear in the examination again in the relevant semester by paying Examination fee only.</li>
                    <li>I Grade: - This grade is awarded to the student who is unable to attain the attendance requirements of 75% of the scheduled lectures of the respective subject. In this case student has to register again for the course when it is offered in the relevant semester by paying the requisite paper wise fee.</li>
                    <li>In rare cases, if the number of students opting for a paper is four or more, any paper may be offered in Summer Semester. A student can register for maximum of two Theories and one Practical paper during the summer semester.</li>
                </ul>
                <h3 className="text-2xl font-novaReg w-full text-[#9fa3a7]">Cumulative Grade Point Average</h3>
                <p className="text-lg font-novaReg mt-2.5 mb-5">CGPA is the weighted average of all the grades awarded to the student since his/her entry into the university up to and including latest semester. CGPA =; Ci = Credits for ith paper Gi = Grade points of the grade earned in ith paper</p>
                <hr className="my-4" />
                <h3 className="text-2xl font-novaReg w-full">Promotion to Next year and Condition for Year Back</h3>
                <h3 className="text-2xl font-novaReg w-full text-[#9fa3a7]">For Undergraduate Courses</h3>
                <p className="text-lg font-novaReg mt-2.5 mb-5">A student will be allowed to continue in the program only if, at the end of first year he/she secures CGPA of 3.5 or more or earns 40% of the credits offered in first year, similarly at the end of 2nd year. He/she secures CGPA of greater than or equal to 4.50 or earns 40% of the credits offered during Ist and IInd year. Lateral Entry students are treated as second year students. Students who are unable to fulfill the minimum requirement of CGPA shall lose one year.</p>
                <h3 className="text-2xl font-novaReg w-full text-[#9fa3a7]">For Post-graduate Courses</h3>
                <p className="text-lg font-novaReg mt-2.5 mb-5">In case of Post Graduation, minimum required CGPA at the end of first year is 4.50 or earning of 40% credits offered in first year. Students who are unable to fulfill this requirement shall lose one year.</p>
                <h3 className="text-2xl font-novaReg w-full">Requirement for award of degree</h3>
                <h3 className="text-2xl font-novaReg w-full text-[#9fa3a7]">For Undergraduate Courses</h3>
                <p className="text-lg font-novaReg mt-2.5 mb-5">A student is deemed to have completed the requirements for a program and is eligible for the award of degree if, she/he has earned a CGPA of greater than or equal to 4.50 for UG programs.</p>
                <h3 className="text-2xl font-novaReg w-full text-[#9fa3a7]">For Post-graduate Courses</h3>
                <p className="text-lg font-novaReg mt-2.5 mb-5">The minimum CGPA required for the award of all Post-graduate degrees is 5.0.</p>
            </div>
        </>
    );
}

export default SystemOfEvaluation;