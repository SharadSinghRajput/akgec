"use client";

import React, { useEffect, useState } from "react";
import { API_NODE_URL } from "@/configs/config";
import { useRouter } from "next/navigation";

const CirculerList = () => {
  const router = useRouter();
  const [newsAndEvents, setNewsAndEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_NODE_URL}news-and-event/getAll`);
        const data = await response.json();
        console.log(data);

        setNewsAndEvents(data.data || []);
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
          setNewsAndEvents(newsAndEvents.filter((event) => event.id !== id));
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
    <div className="max-w-md">
      <div
        className="flex gap-2 cursor-pointer mb-4"
        onClick={() => router.back()}
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
          className="lucide lucide-undo-dot"
        >
          <path d="M21 17a9 9 0 0 0-15-6.7L3 13" />
          <path d="M3 7v6h6" />
          <circle cx="12" cy="17" r="1" />
        </svg>
        <span>Back</span>
      </div>
      <div className="m-10 mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">News/Events List</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Type</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {newsAndEvents.length > 0 ? (
                newsAndEvents.map((event) => (
                  <tr key={event.id}>
                    <td className="border px-4 py-2">
                      <img
                        src={event.featuredImage}
                        alt={event.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </td>
                    <td className="border px-4 py-2">{event.title}</td>
                    <td className="border px-4 py-2">{event.date}</td>
                    <td className="border px-4 py-2">{event.type}</td>
                    <td className="border px-4 py-2">
                      <div className="flex justify-start space-x-2">
                        <button
                          onClick={() =>
                            router.push(`/admin/edit-news-and-event?sid=${event?.sid}`)
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
}

export default CirculerList;
