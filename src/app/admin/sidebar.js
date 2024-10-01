"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Home, BarChart2, Users, Settings, HelpCircle, LogOut,TvMinimal  } from 'lucide-react'

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className={`flex flex-col h-screen bg-gray-800 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <h1 className={`text-xl font-bold ${isOpen ? 'block' : 'hidden'}`}>Dashboard</h1>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M11 19l-7-7 7-7m8 14l-7-7 7-7" : "M13 5l7 7-7 7M5 5l7 7-7 7"} />
                    </svg>
                </button>
            </div>
            <nav className="flex-1 overflow-y-auto">
                <ul className="p-2 space-y-2">
                    {[
                        { icon: Home, label: 'Home', href: '/' },
                        { icon: TvMinimal, label: 'Dashboard', href: '/admin' },
                        { icon: BarChart2, label: 'Analytics', href: '/analytics' },
                        { icon: Users, label: 'Users', href: '/users' },
                        { icon: Settings, label: 'Settings', href: '/settings' },
                    ].map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                                <item.icon className="w-6 h-6 mr-4" />
                                <span className={isOpen ? 'block' : 'hidden'}>{item.label}</span>
                            </Link>
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
                        <Link href="/help" className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                            <HelpCircle className="w-6 h-6 mr-4" />
                            <span className={isOpen ? 'block' : 'hidden'}>Help</span>
                        </Link>
                    </li>
                    <li>
                        <button className="flex items-center w-full p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
                            <LogOut className="w-6 h-6 mr-4" />
                            <span className={isOpen ? 'block' : 'hidden'}>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}