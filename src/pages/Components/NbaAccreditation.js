const name = [
    {
        name: 'Computer Science & Engineering',
        title: 'Accredited up to June 2025',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Electronics & Communication Engineering',
        title: 'Accredited up to June 2025',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Electrical & Electronics Engineering',
        title: 'Accredited up to June 2025',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Information Technology',
        title: 'Accredited up to June 2025',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Mechanical Engineering',
        title: 'Accredited up to June 2025',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
];

export default function Example() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-7xl  align-middle p-10">
                        <table className="min-w-full divide-y divide-gray-300  border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-sm font-semibold text-gray-900 sm:pl-0 border-b border-gray-300">
                                        Name of the Program
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 border-b border-gray-300">
                                        Accreditation Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {name.map((program) => (
                                    <tr key={program.name}>
                                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0 border-b border-gray-300">
                                            <div className="flex items-center p-4">
                                                <div className="h-11 w-11 flex-shrink-0">
                                                    <img alt="" src={program.image} className="h-11 w-11 rounded-full" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="font-medium text-gray-900">{program.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 border-b border-gray-300">
                                            <div className="text-gray-900">{program.title}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
