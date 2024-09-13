"use client";
import React from 'react';
import { useState } from 'react';
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";

const SideBarLink = [
  { name: "Our Identity", link: "/overview" },
  { name: "Leadership", link: "" },
  { name: "Leadership", link: "" },
  { name: "Governance", link: "" },
  { name: "Recognition and Approvals", link: "" },
  { name: "Awards and Rankings", link: "" },
  { name: "Institution Social Responsibility", link: "" }
]

const tabs = [
  {
    name: 'Program Educational Objectives (PEO) of CSE Department', content: (
      <div>
        <p><strong>PEO 1:</strong> The graduates of CSE will have a strong foundation in mathematical, scientific and engineering fundamentals necessary to formulate, solve and analyze engineering problems in their career.</p>
        <p><strong>PEO 2:</strong> The graduates of CSE will have the ability to analyse the requirements, understand the technical specifications and design the engineering solutions by applying computer science theory and principles.</p>
        <p><strong>PEO 3:</strong> The graduates of CSE will have exposure to work as teams on emerging cutting edge technologies with effective communication skills and leadership qualities.</p>
        <p><strong>PEO 4:</strong> The graduates of CSE will have successful careers by engaging in life long learning.</p>
        <p><strong>PEO 5:</strong> The graduates of CSE will have skills to work collaboratively on multidisciplinary projects and exhibit high level of professional and ethical values.</p>
      </div>
    )
  },
  {
    name: 'Updated Program Outcomes (PO) of CSE Department w.e.f. Session 2017-18', content: (
      <div>
        <p><strong>PO 1:</strong> Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex Computer Science & Engineering problems.</p>
        <p><strong>PO 2:</strong> Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</p>
        <p><strong>PO 3:</strong> Design solutions for complex Computer Science & Engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, and the cultural, societal, and environmental considerations.</p>
        <p><strong>PO 4:</strong> Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</p>
        <p><strong>PO 5:</strong> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex Computer Science & engineering activities with an understanding of the limitations.</p>
        <p><strong>PO 6:</strong> Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</p>
        <p><strong>PO 7:</strong> Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</p>
        <p><strong>PO 8:</strong> Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</p>
        <p><strong>PO 9:</strong> Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</p>
        <p><strong>PO 10:</strong> Communicate effectively on complex Computer Science & engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</p>
        <p><strong>PO 11:</strong> Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</p>
        <p><strong>PO 12:</strong> Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological changes in the field of Computer Science.</p>
      </div>
    )
  },
  {
    name: 'Program Specific Outcomes (PSOs) w.e.f. Session 2016-17', content: (
      <div>
        <p><strong>PSO 1:</strong> Ability to exhibit analytical & logical skills and apply knowledge of Maths and Computer Science to design, develop, test, and maintain software solutions.</p>
        <p><strong>PSO 2:</strong> Ability to identify, formulate, and resolve real life/social problems by using current computer technology.</p>
      </div>
    )
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const BtechProgram = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  return (
    <>
      <div className="bg-gray-100">
        <Header title={"B-Tech Program"} gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
        <section className="w-full max-w-7xl mx-auto grid grid-cols-12 pt-24 gap-10">
          <div className="col-span-9 max-md:col-span-12">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-base text-gray-700 text-[20px] font-medium">Computer Science and Engineering</h2>
                    <p className="mt-2 text-[13px] font-medium text-start text-gray-700">
                      Department of Computer Science and Engineering at AKGEC was formed in 1998 with inception of the college. The Department provides an outstanding research environment complemented by excellence in teaching. Ever since its inception, the department has been a pioneering academic centre for higher education, research, and innovation in key areas of Computer Science. The department provides full support to MTech. scholars in terms dissertation guidance, lab facilities and access to international and national journals.
                    </p>
                    <p className="mt-2 text-[13px] text-start text-gray-700 font-medium">
                      Experienced and senior faculty members are assigned for MTech courses and dissertation work of the scholars. The faculty members and M Tech scholars have published good quality research papers in peer-reviewed and indexed journals and International Conferences in the previous years.
                    </p>
                  </div>
                  <button className="mt-4 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700">
                    Know more →
                  </button>
                </div>

                {/* Right Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                    <h4 className="text-red-600 font-bold">ONLY</h4>
                    <p className="text-gray-700">2024 Ist International Conference on Advanced Computing and Emerging Technologies (ACET 2024)</p>
                    {/* <img src="/images/accreditation-logo.png" alt="Accreditation" className="mt-4 w-16" /> */}
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                    <h4 className="text-red-600 font-bold">RANKED #41</h4>
                    <p className="text-gray-700">in Top Private Engineering Colleges of India</p>
                    {/* <img src="/images/india-today-logo.png" alt="India Today" className="mt-4 w-16" /> */}
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                    <h4 className="text-red-600 font-bold">RANKED #16</h4>
                    <p className="text-gray-700">Among Top 100 Engineering Colleges Across India</p>
                    {/* <img src="/images/outlook-logo.png" alt="Outlook" className="mt-4 w-16" /> */}
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                    <h4 className="text-red-600 font-bold">RATED A++</h4>
                    <p className="text-gray-700">by India's only Education Magazine Careers360</p>
                    {/* <img src="/images/careers360-logo.png" alt="Careers360" className="mt-4 w-16" /> */}
                  </div>
                </div>
              </div>
              <div className="container mx-auto px-4 py-8 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                  {/* Left Section */}
                  <div className="space-y-6">
                    <div className="bg-gray-200 rounded-md">
                      <img src="/image/Building2.jpg" alt="Mission10X Wipro" />
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-normal">Your Future as a Professional Engineer</h2>
                    <p className="text-[13px] text-start text-gray-700 font-medium">
                      Ajay Kumar Garg Engineering College (Affiliated to Dr. APJ Abdul Kalam Technical University, Lucknow, UP, College Code - 027)
                    </p>
                    <ul className="list-none space-y-4">
                      <li className="flex">
                        <span className="text-gray-600 mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                        </svg>
                        </span>
                        <p className="text-[13px] text-start text-gray-700 font-medium">
                          Elevate your professional portfolio with industry-aligned programs, a dynamic fraternity, state-of-the-art infrastructure, impeccable placements, and much more at Ajay Kumar Garg Engineering College.
                        </p>
                      </li>
                      <li className="flex">
                        <span className="text-gray-600 mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                        </svg>
                        </span>
                        <p className="text-[13px] text-start text-gray-700 font-medium">
                          Engineering offers unparalleled versatility and spans a vast array of areas in science and technology. As a career, it involves the application of science to design, develop, maintain, research, and enhance structures, machines, devices, systems, and processes. Pursue your Engineering degree from the best engineering college in Uttar Pradesh.
                        </p>
                      </li>
                      <li className="flex">
                        <span className="text-gray-600 mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                        </svg>
                        </span>
                        <p className="text-[13px] text-start text-gray-700 font-medium">
                          From designing needles to aircraft, software to smartphones, chips to supercomputers—every product or technology in the realm of Science & Technology encompasses one or more aspects of Engineering. Choose Engineering as your career and pursue your degree at Ajay Kumar Garg Engineering College, one of the top engineering colleges in Uttar Pradesh and North India.
                        </p>
                      </li>
                    </ul>
                    <div className="flex space-x-4">
                      <button className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700">
                        APPLY TODAY →
                      </button>
                      <button className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700">
                        DOWNLOAD BROCHURE →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-8">
                <div className="container mx-auto">
                  <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex justify-center items-center">
                        <div className="max-w-sm bg-white p-4 border shadow-xl rounded-md">
                          <div className="flex justify-center">
                            <img
                              src="/image/akg-new.png"
                              alt="University Logo"
                              className="w-2/3 mb-4"
                            />
                          </div>
                          <p className="text-start mt-2 text-sm">
                            Level of Study:
                            <br />
                            Under-Graduate, Post-Graduate & LEET Programs
                          </p>
                        </div>
                      </div>

                      <div className="md:col-span-2 bg-gray-50 p-4 border border-gray-400 drop-shadow-2xl rounded-md">
                        <h2 className="text-base font-normal mb-4">Courses Offered</h2>
                        <div className="h-[2px] w-1/2 mb-4 bg-gradient-to-r from-red-700 to-transparent"></div>
                        <div className="grid grid-cols-2 gap-4">
                          <ul className="space-y-2 text-[12px]">
                            <li className="relative pl-6 before:content-['\2192'] before:absolute before:left-0 before:text-gray-700 hover:translate-x-2 transition-transform duration-300">Computer Science and Engineering</li>
                            <li className="relative pl-6 before:content-['\2192'] before:absolute before:left-0 before:text-gray-700 hover:translate-x-2 transition-transform duration-300">Computer Science and Engineering (Artificial Intelligence & Machine Learning)</li>
                            <li className="relative pl-6 before:content-['\2192'] before:absolute before:left-0 before:text-gray-700 hover:translate-x-2 transition-transform duration-300">Computer Science and Engineering (Data Science)</li>
                            <li className="relative pl-6 before:content-['\2192'] before:absolute before:left-0 before:text-gray-700 hover:translate-x-2 transition-transform duration-300">Computer Science</li>
                            <li className="relative pl-6 before:content-['\2192'] before:absolute before:left-0 before:text-gray-700 hover:translate-x-2 transition-transform duration-300">Computer Science and Engineering (Hindi)</li>
                            <li className="relative pl-6 before:content-['\2192'] before:absolute before:left-0 before:text-gray-700 hover:translate-x-2 transition-transform duration-300">Artificial Intelligence & Machine Learning</li>

                          </ul>
                          <ul className="space-y-2 text-[12px]">
                            <li className="relative pl-6 before:content-['\2192'] before:absolute before:left-0 before:text-gray-700 hover:translate-x-2 transition-transform duration-300">Information Technology</li>
                            <li className="relative pl-6 before:content-['\2192'] before:absolute before:left-0 before:text-gray-700 hover:translate-x-2 transition-transform duration-300">Computer Science and Information Technology</li>
                            <li className="relative pl-6 before:content-['\2192'] before:absolute before:left-0 before:text-gray-700 hover:translate-x-2 transition-transform duration-300">Electronics and Communication Engineering</li>
                            <li className="relative pl-6 before:content-['\2192'] before:absolute before:left-0 before:text-gray-700 hover:translate-x-2 transition-transform duration-300">Civil Engineering</li>
                            <li className="relative pl-6 before:content-['\2192'] before:absolute before:left-0 before:text-gray-700 hover:translate-x-2 transition-transform duration-300">Mechanical Engineering</li>
                            <li className="relative pl-6 before:content-['\2192'] before:absolute before:left-0 before:text-gray-700 hover:translate-x-2 transition-transform duration-300">Electrical and Electronics Engineering</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-6'>
                <div></div>

              </div>
              <div className="sm:hidden">
                <select
                  id="tabs"
                  name="tabs"
                  value={activeTab}
                  onChange={(e) => setActiveTab(e.target.value)}
                  className="block w-full border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                >
                  {tabs.map((tab) => (
                    <option key={tab.name} value={tab.name}>
                      {tab.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="hidden sm:block mt-4">
                <div className="border-b border-gray-200">
                  <nav aria-label="Tabs" className="flex">
                    {tabs.map((tab) => (
                      <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        aria-current={tab.current ? 'page' : undefined}
                        className={classNames(
                          activeTab === tab.name
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                          'flex-1 border-b-2 px-4 py-2 text-center text-sm font-medium border' // Adjusted for equal positioning and border
                        )}
                      >
                        {tab.name}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="mt-6">
                {tabs.map((tab) => (
                  <div
                    key={tab.name}
                    className={`${activeTab === tab.name ? 'block' : 'hidden'
                      } transition-all duration-300 ease-in-out`}
                  >
                    <div className="p-4 bg-gray-100 rounded-md shadow-md text-sm leading-6 text-start text-gray-700 font-medium">
                      {tab.content}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
          <div className="col-span-3 max-md:col-span-12">
            <SideBar title={"About US"} LinkList={SideBarLink} />
          </div>
        </section>
      </div>
    </>

  );
};

export default BtechProgram;
