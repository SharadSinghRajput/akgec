import React from 'react'
import ApplicationTable from './ApplicationTable';

const DashboardSection2 = () => {
    return (
        <div className="mt-8 grid grid-cols-5 gap-8 px-8">
            <div className='col-span-3 bg-white border border-gray-200 p-6 shadow-md'>
                <ApplicationTable />
            </div>
            <div className="col-span-2 bg-white border border-gray-200 p-6 shadow-md">

            </div>
        </div>
    )
}

export default DashboardSection2