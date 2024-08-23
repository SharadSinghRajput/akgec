"use client";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  const handleSubMouseEnter = (index) => {
    setOpenSubDropdown(index);
  };

  return (
    <Disclosure as="header" className="bg-yellow-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 shadow backdrop-blur-3xl lg:divide-y lg:divide-gray-200 lg:px-8">
        <nav aria-label="Global" className="hidden lg:flex lg:space-x-8 lg:py-2">
          <div className="relative" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
            <a
              href="#home"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:underline"
            >
              About
            </a>
          </div>

          <div className="relative" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
            <a
              href="#about"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:underline"
            >
              About
              <svg className="ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <div className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 ${openDropdown === 1 ? 'block' : 'hidden'}`}>
              <a href="#overview" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">Overview</a>
              <a href="#our-identity" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">Our Identity</a>
              <a href="#vision-mission" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">Vision & Mission</a>
              <a href="#leadership" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">Leadership
                <svg className={`ml-2 h-4 w-4 text-gray-500 ${openSubDropdown === 0 ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <div className={`absolute top-0 left-full mt-2 w-48 bg-white shadow-lg rounded-md z-20 ${openSubDropdown === 0 ? 'block' : 'hidden'}`}>
                <a href="#director-message" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">Director Message</a>
                <a href="#director-general-message" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">Director General Message</a>
              </div>
              <a href="#recognition-approvals" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">Recognition & Approvals</a>
              <a href="#awards-rankings" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">Awards & Rankings</a>
              <a href="#nba-accreditation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">NBA Accreditation</a>
              <a href="#aicte-approval-letters" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">AICTE Approval Letters</a>
              <a href="#management" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">Management</a>
            </div>
          </div>

          <div className="relative" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
            <a
              href="#programs"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:underline"
            >
              Programs
              <svg className="ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <div className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 ${openDropdown === 2 ? 'block' : 'hidden'}`}>
              <a href="#ug-courses" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">UG Courses
                <svg className={`ml-2 h-4 w-4 text-gray-500 ${openSubDropdown === 1 ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <div className={`absolute top-0 left-full mt-2 w-48 bg-white shadow-lg rounded-md z-20 ${openSubDropdown === 1 ? 'block' : 'hidden'}`}>
                <a href="#btech" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">B.Tech.</a>
                <a href="#bba" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">BBA</a>
                <a href="#bca" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">BCA</a>
                <a href="#bcom" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">B.Com.</a>
                <a href="#bsc" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">B.Sc.</a>
              </div>
              <a href="#pg-courses" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">PG Courses</a>
              <a href="#diploma-courses" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:underline">Diploma Courses</a>
            </div>
          </div>

          <a
            href="#admissions"
            className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:underline"
          >
            Admissions
          </a>

          <a
            href="#placements"
            className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:underline"
          >
            Placements
          </a>

          <a
            href="#contact"
            className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:underline"
          >
            Contact
          </a>
        </nav>

        <DisclosurePanel as="nav" aria-label="Global" className="lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:underline">
              Home
            </a>

            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton
                    as="a"
                    href="#about"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:underline"
                  >
                    About
                    <svg className={`ml-2 h-5 w-5 text-gray-500 ${open ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </DisclosureButton>
                  <DisclosurePanel>
                    <div className="ml-4 space-y-1">
                      <a href="#overview" className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:underline">Overview</a>
                      <a href="#our-identity" className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:underline">Our Identity</a>
                      <a href="#vision-mission" className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:underline">Vision & Mission</a>
                      <Disclosure>
                        {({ open: subOpen }) => (
                          <>
                            <DisclosureButton
                              as="a"
                              href="#leadership"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:underline"
                            >
                              Leadership
                              <svg className={`ml-2 h-4 w-4 text-gray-500 ${subOpen ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </DisclosureButton>
                            <DisclosurePanel>
                              <div className="ml-4 space-y-1">
                                <a href="#director-message" className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:underline">Director Message</a>
                                <a href="#director-general-message" className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:underline">Director General Message</a>
                              </div>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                      <a href="#recognition-approvals" className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:underline">Recognition & Approvals</a>
                      <a href="#awards-rankings" className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:underline">Awards & Rankings</a>
                      <a href="#nba-accreditation" className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:underline">NBA Accreditation</a>
                      <a href="#aicte-approval-letters" className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:underline">AICTE Approval Letters</a>
                      <a href="#management" className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:underline">Management</a>
                    </div>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>

            <a href="#programs" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:underline">Programs
              <svg className="ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton
                    as="a"
                    href="#ug-courses"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:underline"
                  >
                    UG Courses
                    <svg className={`ml-2 h-4 w-4 text-gray-500 ${open ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </DisclosureButton>
                  <DisclosurePanel>
                    <div className="ml-4 space-y-1">
                      <a href="#btech" className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:underline">B.Tech.</a>
                      <a href="#bba" className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:underline">BBA</a>
                      <a href="#bca" className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:underline">BCA</a>
                      <a href="#bcom" className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:underline">B.Com.</a>
                      <a href="#bsc" className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:underline">B.Sc.</a>
                    </div>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>

            <a href="#pg-courses" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:underline">PG Courses</a>
            <a href="#diploma-courses" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:underline">Diploma Courses</a>
            <a href="#admissions" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:underline">Admissions</a>
            <a href="#placements" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:underline">Placements</a>
            <a href="#contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 hover:underline">Contact</a>
          </div>
        </DisclosurePanel>
      </div>
    </Disclosure>
  )
}
