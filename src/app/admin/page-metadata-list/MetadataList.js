"use client";

import React, { useEffect, useState } from "react";
import { API_NODE_URL } from "@/configs/config";
import { useRouter } from "next/navigation";

const MetaDataList = () => {
  const router = useRouter();
  const [MetaData, setMetaData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_NODE_URL}meta/list`);
        const data = await response.json();
        console.log(data);

        setMetaData(data.data || []);
      } catch (error) {
        console.error("Error fetching news and events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        const response = await fetch(
          `${API_NODE_URL}news-and-event/delete/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();
        if (data.status) {
          setMetaData(MetaData.filter((event) => event.id !== id));
          alert(data.message || "Event deleted successfully!");
        } else {
          alert("Failed to delete event.");
        }
      } catch (error) {
        console.error("Error deleting event:", error);
        alert("Failed to delete event.");
      }
    }
  };

  return (
    <div className="w-full pr-10">
      <div className="bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg p-4 mb-5 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex text-white items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-list"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <circle cx="4" cy="6" r="1" />
              <circle cx="4" cy="12" r="1" />
              <circle cx="4" cy="18" r="1" />
            </svg>

            <h2 className="font-novaSemi text-xl text-white tracking-wide">
              Mata Data List
            </h2>
          </div>
        </div>
      </div>
      <div className=" bg-white rounded-lg shadow-md p-6">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Meta Title</th>
                <th className="border px-4 py-2">Meta Description</th>
                <th className="border px-4 py-2">Path</th>
                <th className="border px-4 py-2">Meta Keywords</th>
                <th className="border px-4 py-2">Page</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {MetaData.length > 0 ? (
                MetaData.map((event) => (
                  <tr key={event._id}>
                    <td className="border text-sm px-4 py-2">{event.metatitle}</td>
                    <td className="border text-sm px-4 py-2">{event.metaDescription}</td>
                    <td className="border text-sm px-4 py-2">{event.metaKeywords}</td>
                    <td className="border text-sm px-4 py-2">{event.path}</td>
                    <td className="border text-sm px-4 py-2">{event.pageName}</td>
                    <td className="border text-sm px-4 py-2">
                      <div className="flex justify-start space-x-2">
                        <button
                          onClick={() =>
                            router.push(
                              `/admin/edit-page-metadata?pageid=${event?.pageid}`
                            )
                          }
                          className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-pencil"
                          >
                            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                            <path d="m15 5 4 4" />
                          </svg>
                        </button>
                        <button
                          disabled
                          onClick={() => handleDelete(event.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5 text-white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center p-4">
                    No news or events found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MetaDataList;
