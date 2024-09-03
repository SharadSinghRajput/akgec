"use client";
import React from 'react';
import { Star } from './SVG'

const MilestonesSection = () => {
  const milestones = [
    {
      rank: '77',
      sup: 'th',
      description: 'Universities In India By INDIA TODAY Rankings 2024',
    },
    {
      rank: '80',
      sup: 'th',
      description: 'Universities In India By THE WEEK Rankings 2024',
    },
    {
      rank: '251',
      sup: 'st',
      description: 'Universities In India By NIRF Rankings 2020',
    },
    {
      rank: '44',
      sup: 'th',
      description: 'Universities In India By OUTLOOK Rankings 2024',
    },
    {
      rank: '61',
      sup: 'st',
      description: 'Universities In India By IIRF Rankings 2023',
    },
    {
      rank: '149',
      sup: 'th',
      description: 'Universities In India By TOI Rankings 2024',
    },
  ];

  return (
    <div className="max-w-[1450px] mx-auto py-12 bg-white">
      <div className="text-center mb-10 ">
        <div className='flex gap-1 justify-center text-yellow-400'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>

        </div>
        <h2 className="text-5xl font-novaLight text-gray-800 mt-5">A Journey of Exceptional Achievements!</h2>
        <div className="my-14 flex justify-center space-x-14 max-lg:grid max-lg:grid-cols-4 max-sm:grid-cols-3 max-lg:space-x-0 max-lg:gap-4 max-lg:p-5">
          {/* Add your images or logos here */}
          <img src="/image/company-logos/india_today.webp" alt="India Today" className="h-12" />
          <img src="/image/company-logos/the_week.webp" alt="The Week" className="h-12" />
          <img src="/image/company-logos/nirf.webp" alt="NIRF" className="h-12" />
          <img src="/image/company-logos/outlook.webp" alt="Outlook" className="h-12" />
          <img src="/image/company-logos/iirf.webp" alt="IIRF" className="h-12" />
          <img src="/image/company-logos/times-of-india.webp" alt="TTI" className="h-12" />
        </div>
      </div>
      <div className="flex justify-between space-x-0 max-lg:space-x-0 mx-auto max-lg:grid max-lg:grid-cols-3 max-md:grid-cols-2 max-lg:justify-start max-lg:gap-y-5">
        {milestones.map((milestone, index) => (
          <div key={index} className="text-left border-l border-gray-400 px-3">
            <p className="text-xs uppercase font-novaSemi text-gray-900 max-lg:text-xs">Ranked</p>
            <p className="text-5xl font-novaLight text-gray-900 max-lg:text-2xl">{milestone.rank}<sup className='text-3xl font-novaLight max-lg:text-lg'>th</sup></p>
            <p className="text-sm font-novaReg text-black max-lg:text-[10px]">among The Best</p>
            <p className="text-[15px] text-gray-800 font-novaSemi capitalize max-lg:text-[10px]">{milestone.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestonesSection;
