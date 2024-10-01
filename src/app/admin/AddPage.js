"use client"; // This directive is required for client-side rendering in Next.js
import { CirclePlus, Film } from "lucide-react";
import CreatePage from "./CreatePage";

import { useState } from "react";

export default function PageCreator() {
    const [activeBtn, setActiveBtn] = useState(1)
    return (
        <div className="min-h-screen w-full py-20 bg-gray-100 p-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mb-4">
                <div className="flex space-x-4 ">
                    <button onClick={() => setActiveBtn(1)} className="flex-1 bg-purple-100 text-purple-700 gap-4 hover:bg-purple-200 py-2 px-4 rounded-md flex items-center justify-center">
                        <Film />
                        Page
                    </button>
                    <button onClick={() => setActiveBtn(2)} className="flex-1 bg-purple-100 text-purple-700 gap-4 hover:bg-purple-200 py-2 px-4 rounded-md flex items-center justify-center">
                        <CirclePlus />
                        Add New Page
                    </button>
                </div>
            </div>
            {
                // activeBtn === 1 && 
            }
            {
                activeBtn === 2 && <CreatePage />
            }

        </div>
    );
}
