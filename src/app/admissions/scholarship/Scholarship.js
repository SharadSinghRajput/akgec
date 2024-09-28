const Scholarship = () => {
    return (
        <>
            <div className="bg-Header w-full h-[500px] bg-black bg-blend-darken bg-opacity-80 bg-cover bg-no-repeat">
                <div className="max-w-[1400px] mx-auto h-full px-3 items-end flex justify-between">
                    <div className="text-white">
                        <h2 className="text-[42px] leading-none font-novaReg ">AKG Engineering<br /> College, <br />Scholarship</h2>
                    </div>
                    <div>
                        <img className="w-96" src="/image/scholarship/worth-crore-bg.png" alt="Scholarship" />
                    </div>
                </div>
            </div>
            <div className="bg-BG18 h-[450px] w-full top-20 bg-no-repeat bg-cover">
                <div className="max-w-[1400px] mx-auto h-full px-3">
                    <div className="max-w-2xl">
                        <div className="Cutout py-1.5 bg-yellow-400 mb-10"><h2 className="text-4xl font-novaReg">Year 2024-2025</h2></div>
                        <p className="font-novaReg text-lg leading-6">AKGEC is fully committed to its Institutional Social Responsibility. The University, besides being pioneers in quality education is proactive in uplifting the education standard and qualification of students of the nation in general and North region in particular. AKG is enthusiastic to encourage and motivate bright students by providing additional benefits and facilities to shining stars and super achievers.</p>
                        <p className="mt-3 font-novaReg text-lg leading-6">As a sequel to this, fresh and impressive scholarship options have been added in the academic year 2024-2025.</p>
                        <button className="mt-5 rounded-md uppercase bg-secondary px-5 py-3 text-base font-novaBold tracking-wider hover:text-white text-black shadow-sm hover:bg-[#3c5686] duration-300">Avail Scholarship ➜</button> 
                    </div>
                </div>
            </div>

            <section className="px-3">
                <div className="max-w-[1400px] mx-auto py-12 px-3 ">
                    <div className="grid grid-cols-12 w-full gap-3">
                        <div className="col-span-3 sticky">
                            <h3 className="text-2xl font-novaReg mb-6">Click below to view other Scholarships</h3>
                            <div className="flex flex-col">
                                <a className="-mb-[1px]">
                                    {/* <p className="relative items-center before:content-['NAAC_Accreditation'] before:absolute before:top-0 before:left-0 before:text-[#bb2226] before:text-sm before:font-novaReg"></p> */}
                                    <div className="flex flex-row p-5 bg-[#333333] items-center">
                                        <img
                                            src="/image/scholarship/logo-1.jpg"
                                            className="mr-4 rounded-full w-16"
                                        />
                                        <p className="text-sm font-novaReg text-white">Schoalrship 1</p>
                                        {/* <div className="relative flex items-center after:absolute after:top-5 after:left-50 after:text-sm after:font-novaReg before:text-[#bb2226] w-0 h-0 border-t-[10px] border-b-[10px] border-l-[15px] border-transparent border-l-black"></div> */}
                                    </div>
                                </a>

                                <a className="-mb-[1px]">
                                    {/* <p className="relative items-center before:content-['AICTE_Accreditation'] before:absolute before:top-0 before:left-0 before:text-[#bb2226] before:text-sm before:font-novaReg"></p> */}
                                    <div className="flex flex-row p-[18px] items-center hover:bg-[#d91f23] hover:text-white">
                                        <img
                                            src="/image/scholarship/logo-2.jpg"
                                            className="mr-4 rounded-full w-16"
                                        />
                                        <p className="text-sm font-novaReg">Schoalrship 2</p>
                                    </div>
                                </a>

                                <a className="-mb-[1px]">
                                    {/* <p className="relative items-center before:content-['Recognition'] before:absolute before:top-0 before:left-0 before:text-[#bb2226] before:text-sm before:font-novaReg"></p> */}
                                    <div className="flex flex-row p-[18px] items-center hover:bg-[#d91f23] hover:text-white">
                                        <img
                                            src="/image/scholarship/logo-3.jpg"
                                            className="mr-4 rounded-full w-16"
                                        />
                                        <p className="text-sm font-novaReg">Schoalrship 3</p>
                                    </div>
                                </a>

                                <a className="-mb-[1px]">
                                    <div className="flex flex-row p-[18px] items-center hover:bg-[#d91f23] hover:text-white">
                                        <img
                                            src="/image/scholarship/logo-4.jpg"
                                            className="mr-4 rounded-full w-16"
                                        />
                                        <p className="text-sm font-novaReg">Schoalrship 4</p>
                                    </div>
                                </a>

                                <a className="-mb-[1px]">
                                    {/* <p className="relative items-center before:content-['Membership_&_Approvals'] before:absolute before:top-0 before:left-0 before:text-[#bb2226] before:text-sm before:font-novaReg"></p> */}
                                    <div className="flex flex-row p-[18px] items-center hover:bg-[#d91f23] hover:text-white">
                                        <img
                                            src="/image/scholarship/logo-5.jpg"
                                            className="mr-4 rounded-full w-16"
                                        />
                                        <p className="text-sm font-novaReg">Schoalrship 5</p>
                                    </div>
                                </a>

                                <a className="-mb-[1px]">
                                    <div className="flex flex-row p-[18px] items-center hover:bg-[#d91f23] hover:text-white">
                                        <img
                                            src="/image/scholarship/logo-6.jpg"
                                            className="mr-4 rounded-full w-16"
                                        />
                                        <p className="text-sm font-novaReg">Schoalrship 6</p>
                                    </div>
                                </a>
                                <a className="-mb-[1px]">
                                    <div className="flex flex-row mb-6 p-[18px] items-center hover:bg-[#d91f23] hover:text-white">
                                        <img
                                            src="/image/scholarship/logo-7.jpg"
                                            className="mr-4 rounded-full w-16 h-16 object-cover"
                                        />
                                        <p className="text-sm font-novaReg">Schoalrship 7</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="px-3 col-span-9">
                            <h3 className="text-4xl font-novaReg mb-6 ">AKG University <span className="font-novaSemi bg-text-gradient bg-clip-text text-transparent">Scholarships!</span></h3>
                            <div className="p-11 shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px]">
                                <div className="flex mb-12 -mx-3">
                                    <div className="px-3">
                                        <h3 className="text-2xl font-novaReg">AKG University For The Academic Year 2024-2025</h3>
                                        <p className="text-lg font-novaReg mt-2.5 mb-5">To offer an opportunity to bright and inquisitive young minds from across the country to study in a challenging and diverse academic environment, AKG University has launched its entrance examination, providing double benefits. This scholarship initiative of the year allows students to access a total of ₹170 Crores in scholarships. It aims to recognize and reward the brilliance and potential of young aspirants, enabling them to secure scholarships and pursue futuristic courses of their choice.</p>

                                        <h3 className="text-2xl font-novaReg">Scholarships Renewal Criteria & Renewal Process:</h3>
                                        <p className="text-lg font-novaReg mt-2.5 mb-5">Scholarships once given will be for the entire duration of the program but subject to mandatory meeting of set norms which will be reviewed every year. Once the set norms are met, the scholarship shall be renewed.</p>

                                        <h3 className="text-2xl font-novaReg">Current Renewal Criteria</h3>
                                        <ul className="text-lg font-novaReg mt-2 mb-4 pl-4">
                                            <li className="text-sm mb-2 list-disc">CUCET Scholarship Recipients should apply for renewal every year.</li>
                                            <li className="text-sm mb-2 list-disc">Performance: 7.5 CGPA at the end of each year.</li>
                                            <li className="text-sm mb-2 list-disc">Student should not indulge in any activity of indiscipline.</li>
                                            <li className="text-sm mb-2 list-disc">Student should not have E, F or I in any of the subject each year.</li>
                                        </ul>
                                        <p className="text-lg font-novaReg mt-2.5 mb-5"><b>Note:</b> Scholarship shall be discontinued if there is any case of indiscipline against the student at any point of time.</p>
                                        <button className="mt-5 rounded-md uppercase bg-secondary px-5 py-3 text-base font-novaBold tracking-wider hover:text-white text-black shadow-sm hover:bg-[#3c5686] duration-300">View More ➜</button> 
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-6 -mx-3">
                                <div className="px-3">
                                    <div className="flex mb-4 p-4 bg-red-50 rounded-lg border">
                                        <span className="flex items-center justify-center w-7 h-6 mr-2 rounded-full p-1 bg-[#842029]">
                                            <svg className="object-cover w-4 h-4" fill="#f5c2c7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                                <path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z" />
                                            </svg>
                                        </span>

                                        <p className="font-novaReg text-red-500">
                                            <b>-</b> If the scholarship gets discontinued in one year due to not maintaining the mandatory requirements and in the coming year if the student maintains the minimum mandatory criteria. the student can apply for the scholarship again, however, in that case, the student would be eligible for only 50 percent of the earlier sanctioned scholarship in the consequent year of study.
                                            <br />
                                            <b>-</b>
                                            Scholarship scheme swapping is not allowed.
                                            <br />
                                            <b>-</b>
                                            The student can’t avail multiple scholarships.
                                            <br />
                                            <b>-</b>
                                            In case of query regarding student’s marks percentage, Admission team member may contact the scholarship department.
                                            <br />
                                            <b>-</b>
                                            Student scholarship document should be verified by the admission counselor with signature and E-code before applying for scholarship on CUIMS.
                                            <br />
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-4 w-full">
                                <div className="w-6/12">
                                    <img
                                        src="/image/top-nav.jpg"
                                        className="w-full"
                                    />
                                </div>
                                <div className="bg-[#d91f24] w-6/12">
                                    <div className="p-12">
                                        <h3 className="text-2xl text-white font-novaReg">Get in Touch</h3>
                                        <p className="mt-2.5 mb-5 text-white font-novaReg text-lg">For any information please contact the below mentioned helpline nos:</p>
                                        <p className="mt-2.5 mb-5 text-white font-novaReg text-lg">General Inquiries:+91-160-5017000</p>
                                        <p className="mt-2.5 mb-5 text-white font-novaReg text-lg">Mobile: +91-99159-99223, +91-99159-99224</p>
                                        <p className="mt-2.5 mb-5 text-white font-novaReg text-lg">Toll Free: 1800 1212 88800</p>
                                        <p className="mt-2.5 mb-5 text-white font-novaReg text-lg">Email: admissions@cumail.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Scholarship;