"use client"
import "@/styles/globals.css";
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Home, LogOut, ReplaceAll, CalendarRange, ChevronUp, ChevronDown, RefreshCcwDot, FilePlus2, LayoutDashboard } from 'lucide-react'

const navLinks = [
    {
        icon: LayoutDashboard,
        label: 'Dashboard',
        href: '/admin'
    },
    {
        icon: FilePlus2,
        label: 'Page',
        nestedLinks: [
            { label: 'Add New Page', href: '/admin/create-page' },
            { label: 'List of Pages', href: '/admin/page-list' }
        ]
    },
    {
        icon: ReplaceAll,
        label: 'Meta Data',
        nestedLinks: [
            { label: 'Add Meta Data', href: '/admin/page-metadata' },
            { label: 'List of Meta', href: '/admin/metadata-list' }
        ]
    },
    {
        icon: CalendarRange,
        label: 'News & Event',
        nestedLinks: [
            { label: 'Add News & Event', href: '/admin/create-news-event' },
            { label: 'List of News & Event', href: '/admin/list-news-event' }
        ]
    },
    {
        icon: RefreshCcwDot,
        label: 'Circuler',
        nestedLinks: [
            { label: 'Add Circuler', href: '/admin/create-circuler' },
            { label: 'List of Circuler', href: '/admin/circuler-list' }
        ]
    }
]

export default function SideBar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(true)
    const [expandedSections, setExpandedSections] = useState({})

    useEffect(() => {
        const userDataDATA = localStorage.getItem("user");

        if (!userDataDATA) {
            router.push('/admin')
        }

    }, []);

    const toggleSection = (index) => {
        setExpandedSections(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    const isActive = (href) => router.pathname === href;

    const handleClick = () => {
        localStorage.removeItem('user');
        router.push("/");
    }

    return (
        <div className={`flex flex-col h-screen bg-gray-800 text-white transition-all duration-300 ${isOpen ? 'w-80' : 'w-20'}`}>
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <h1 className={`text-xl font-bold ${isOpen ? 'block' : 'hidden'}`}>Admin Panel</h1>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="hidden max-lg:block p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M11 19l-7-7 7-7m8 14l-7-7 7-7" : "M13 5l7 7-7 7M5 5l7 7-7 7"} />
                    </svg>
                </button>
            </div>
            <nav className="flex-1">
                <ul className="p-4 space-y-4">
                    {navLinks.map((item, index) => (
                        <li key={index}>
                            {!item.nestedLinks ? (
                                <Link href={item.href} className={`p-2 flex items-center rounded-md hover:bg-gray-700 ${isActive(item.href) ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                                    <item.icon className={`w-6 h-6 ${isOpen ? "mr-4" : null}`} />
                                    <span className={`${isOpen ? 'block' : 'hidden'}`}>{item.label}</span>
                                </Link>
                            ) : (
                                <div onClick={() => toggleSection(index)} className={`p-2 flex justify-between items-center rounded-md cursor-pointer hover:bg-gray-700 ${expandedSections[index] ? "bg-gray-700" : null}`}>
                                    <div className="flex items-center">
                                        <item.icon className={`w-6 h-6 ${isOpen ? "mr-4" : null}`} />
                                        <span className={` ${isOpen ? 'block' : 'hidden'} `}>{item.label}</span>
                                    </div>
                                    {expandedSections[index] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                </div>
                            )}
                            {item.nestedLinks && (
                                <ul
                                    className={`pl-6 space-y-1 overflow-hidden ${expandedSections[index] ? 'max-h-screen' : 'max-h-0'} ${isOpen ? 'block' : 'hidden'}`}
                                >
                                    {item.nestedLinks.map((nestedItem, nestedIndex) => (
                                        <li key={nestedIndex} className="mt-2 pl-4">
                                            <Link href={nestedItem.href} className="block p-1.5 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white">
                                                {nestedItem.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="p-4 border-t border-gray-700">
                <div className="flex items-center mb-4">
                    <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="User avatar"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div className={isOpen ? 'block' : 'hidden'}>
                        <p className="font-semibold">John Doe</p>
                        <p className="text-sm text-gray-400">john@example.com</p>
                    </div>
                </div>
                <ul className="space-y-2">
                    <li>
                        <Link href="/" className="flex items-center p-2 rounded-md hover:bg-gray-700">
                            <Home className={`w-6 h-6 ${isOpen ? "mr-4" : null}`} />
                            <span className={isOpen ? 'block' : 'hidden'}>Home</span>
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => handleClick()} className="flex items-center w-full p-2 rounded-md hover:bg-gray-700">
                            <LogOut className={`w-6 h-6 ${isOpen ? "mr-4" : null}`} />
                            <span className={isOpen ? 'block' : 'hidden'}>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
