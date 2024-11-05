"use client";

import Link from 'next/link';
import React from 'react';

const years = [
  { title: '2024-25', url: '/conferences-2024-25' },
  { title: '2022-23', url: '/conferences-2022-23' },
  { title: '2021-22', url: '/conferences-2019-20' },
  { title: '2019-20', url: '/conferences-2019-20' },
  { title: '2018-19', url: '/pdf/conferences/CONFERENCES_2018-19.pdf' },
  { title: '2017-18', url: '/pdf/conferences/CONFERENCES-2017-18.pdf' }
];

const Conference = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h3 className="text-4xl font-novaBold text-center mb-6">Conferences</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {years.map((year) => (
          <Link key={year.title} href={year.url} className="w-full py-6 text-lg font-semibold bg-gray-800 hover:bg-gray-700 text-white text-center rounded-lg">
            CONFERENCES AND SEMINARS IN {year.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Conference;
