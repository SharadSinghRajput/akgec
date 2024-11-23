"use client";

import PageDetailsForm from "./PageDetails"; 
import { useSearchParams } from "next/navigation";

const EditAnnouncement = () => {
  const searchParams = useSearchParams();
  const page_id = searchParams.get("page_id");

  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg p-4 mb-5 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex text-white items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-add"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
            <h2 className="font-novaSemi text-xl text-white tracking-wide">
              Edit Page
            </h2>
          </div>
        </div>
      </div>
      {page_id ? (
        <PageDetailsForm page_id={page_id} />
      ) : (
        <div className="text-center text-gray-600">Loading page details...</div>
      )}
    </div>
  );
}

export default EditAnnouncement;