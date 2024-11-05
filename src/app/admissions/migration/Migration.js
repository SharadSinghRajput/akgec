import React from 'react'

const Migration = () => {
  return (
    <div className="">
      <h1 className="text-[42px] leading-none max-w-md font-novaReg mb-4">AKGU University Migration Policy</h1>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Postgraduate Programs:</strong> Migration is not allowed in postgraduate courses due to the limited duration of these degree programs.</li>
        <li><strong>Undergraduate Programs:</strong> Migration is permitted only until the end of the third semester. After that, students will not be allowed to migrate.</li>
        <li><strong>Calculation of CGPA:</strong> The CGPA will be calculated based solely on the credits earned at AKG University. Students will receive a Detailed Mark Certificate (DMC) for the subjects they have completed according to the university's curriculum.</li>
        <li><strong>Reappear Policy:</strong> Students with any reappear examinations from their previous institution will not be permitted to migrate.
        </li>
        {/* <li>
          CGPA will be calculated based on credits which he/she has earned in AKGU University and DMC will be issued for
          the subjects which he/she has appeared as per the scheme of AKGU University.
        </li>
        <li>
          No student will be migrated if he/she has a reappear in any subject of previous University from where he/she is migrated.
        </li> */}
      </ul>
    </div>
  )
}

export default Migration