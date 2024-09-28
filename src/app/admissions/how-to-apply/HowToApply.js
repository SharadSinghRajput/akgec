"use client";

import React, { useState } from 'react';

const firstSteps = [
    {
        main: "CUCET has been divided into three different phases namely CUCET-I and CUCET-II. Each phase of CUCET is active for a specific period and their benefits might vary. Choose the phase which is active and running during the time of your application."
    },
    {
        title: "Log on and Generate User Id and Password at https://cucet.cuchd.in",
        content: "Log on to the official website of CUCET to start the registration process. Visit https://cucet.cuchd.in and follow the following steps."
    },
    {
        title: "Choose the running phase of CUCET",
        content: "AKGEC University Common Entrance test has three phases namely CUCET-I and CUCET-II. Each phase will be running one by one and early comers are availed extra benefits. During the time of application, the candidate will have to select the active phase which would be necessary for admissions into Engineering and Management courses and scholarships for all the programs."
    },
    {
        title: "Register by filling in your Name, Email, Contact Number and City",
        content: "After logging on to CUCET’s official website, the candidate has to register by filling in his details such as Name, Email, Contact Number and City. The required information is to be filled in on the registration columns available on the homepage of CUCET’s website."
    },
    {
        title: "Choose the discipline and program that interests you",
        content: "After providing the above information, the candidate needs to select the discipline and program of his interest that he wishes to apply for and then register."
    },
    {
        title: "Create your profile after registration",
        content: "After the above process has been completed, the candidate needs to complete his profile after logging into it using the User ID and password sent through Email and SMS. A candidate may also use a registered Email ID as a username to log in."
    },
    {
        title: "After successful registration, a confirmation message is sent through SMS/Email",
        content: "The candidate will receive the confirmation for successful registration on his/her registered contact number and Email address through an Email or SMS."
    }
];

const offlineFirstSteps = [
    {
        main: "Admission Office, AKGEC University, SCO 223, First Floor, Sector 36 D, Chandigarh, 160036"
    },
    {
        content: "To download the admission form, please visit www.cuchd.in."
    },
    {
        content: "Send duly filled admission form along with demand draft of Rs 1000/- drawn in name of “Chandigarh University” payable at Chandigarh at the following address:"
    },
];

const secondSteps = [
    {
        title: "After registration, download the e-Prospectus by paying Rs. 1000/- online",
        content: "The process following Registration requires you to download the e-Prospectus made available after candidate’s successful registration. The e-Prospectus includes the application form admission and to appear for the entrance test."
    },
    {
        title: "Fill application form for Entrance Test, Admission included in the e-prospectus",
        content: "After downloading the e-Prospectus, candidate needs to fill the application form for admission and to appear for the common entrance exam."
    }
];

const offlineSecondSteps = [
    {
        main: "Submit the admission form and receive prospectus on payment of Rs 1000/- from AKGEC University Campus or any local Admission Office of the University."
    },
];

const thirdSteps = [
    {
        title: "Book your seat by paying registration fee online through Payment Gateway or offline by generating Challan",
        content: "The registration fee can be paid online via net banking or using debit/credit cards through the payment gateway."
    },
    {
        title: "Log on to https://cucet.cuchd.in",
        content: "For the payment of registration fee, one needs to log on to CUCET’s website https://cucet.cuchd.in and further log into their respective account."
    },
    {
        title: "Log in to your account with your CUCET-ID or Registered Email ID",
        content: "Candidate needs to log in to his account using allotted CUCET-ID or Registered Email ID and password. The options following will lead to the payment of registration fee."
    },
    {
        title: "Fill the application form available after you log in to your profile",
        content: "The process would then require the candidate to fill the application form made available after logging in. The application form would require the candidate to fill his personal and academic information."
    }
];

const offlineThirdSteps = [
    {
        main: "Call Toll Free 1800 1212 88800 or email at admissions@cumail.in or SMS (Space) “YOUR NAME” to 9501437000"
    },
];

const OnlineStepSection = ({ title, steps, isOpen, toggle }) => (
    <div className="border">
        <h2 className={`${isOpen ? 'bg-indigo-950 text-white' : ''}`}>
            <button
                className="flex py-4 px-5 font-novaReg w-full"
                onClick={toggle}
            >
                {title}
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto">
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                )}
            </button>
        </h2>
        {isOpen && (
            <div className="content py-4 px-5">
                <div className='block overflow-x-auto'>
                    {steps.map((step, index) => (
                        <div key={index} className="mb-4">
                            <p className='font-novaReg mb-4'>{step.main}</p>
                            <h5 className="font-novaReg text-xl mb-2">{step.title}</h5>
                            <p className="mb-6 font-novaReg">{step.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
);

const OfflineStepSection = ({ title, steps, isOpen, toggle }) => (
    <div className="border">
        <h2 className={`${isOpen ? 'bg-indigo-950 text-white' : ''}`}>
            <button
                className="flex py-4 px-5 font-novaReg w-full"
                onClick={toggle}
            >
                {title}
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto">
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                )}
            </button>
        </h2>
        {isOpen && (
            <div className="content py-4 px-5">
                <div className='block overflow-x-auto'>
                    <ul className="mb-4 pl-5 list-disc">
                        {steps.slice(1).map((step, index) => (
                            <li key={index} className="mb-2 font-novaReg">{step.content}</li>
                        ))}
                    </ul>
                    <p className="font-novaBold mb-4">{steps[0].main}</p>
                </div>
            </div>
        )}
    </div>
);

export const HowToApply = () => {
    const [openIndexOnline, setOpenIndexOnline] = useState(0);
    const [openIndexOffline, setOpenIndexOffline] = useState(0);

    const toggleOnlineContent = (index) => {
        setOpenIndexOnline(openIndexOnline === index ? null : index);
    };

    const toggleOfflineContent = (index) => {
        setOpenIndexOffline(openIndexOffline === index ? null : index);
    };

    return (
        <div className="px-3">
            <h1 className="text-2xl md:text-4xl font-novaReg mb-2.5 w-full">AKGEC University Admissions 2024</h1>
            <h3 className="text-xl md:text-[32px] font-novaReg mb-8 w-full">How to Apply AKGEC University Admissions 2024</h3>
            <hr className="w-full my-4" />

            {/* Online Mode Section */}
            <div className="w-full">
                <h4 className="mb-2 text-xl md:text-2xl font-novaReg">Online Mode - CUCET Registration</h4>
                <OnlineStepSection
                    title="Step 1 - Register at CUCET"
                    steps={firstSteps}
                    isOpen={openIndexOnline === 0}
                    toggle={() => toggleOnlineContent(0)}
                />
                <OnlineStepSection
                    title="Step 2 - Download E-Prospectus"
                    steps={secondSteps}
                    isOpen={openIndexOnline === 1}
                    toggle={() => toggleOnlineContent(1)}
                />
                <OnlineStepSection
                    title="Step 3 - Complete Application Process"
                    steps={thirdSteps}
                    isOpen={openIndexOnline === 2}
                    toggle={() => toggleOnlineContent(2)}
                />
            </div>
            <br />
            <br />
            <div className="w-full">
                <h4 className="mb-2 text-xl md:text-2xl font-novaReg">Offline Mode - CUCET Registration</h4>
                <OfflineStepSection
                    title="Option 1 - Download Admission Form"
                    steps={offlineFirstSteps}
                    isOpen={openIndexOffline === 0}
                    toggle={() => toggleOfflineContent(0)}
                />
                <OfflineStepSection
                    title="Option 2 - Submit Admission Form"
                    steps={offlineSecondSteps}
                    isOpen={openIndexOffline === 1}
                    toggle={() => toggleOfflineContent(1)}
                />
                <OfflineStepSection
                    title="Option 3 - Email/ SMS"
                    steps={offlineThirdSteps}
                    isOpen={openIndexOffline === 2}
                    toggle={() => toggleOfflineContent(2)}
                />
            </div>
        </div>
    );
};
