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
        const response = await fetch(
          `${API_NODE_URL}slug/getbytype?type=Circuler`
        );
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

  // const handleDelete = async (id) => {
  //   if (window.confirm("Are you sure you want to delete this event?")) {
  //     try {
  //       const response = await fetch(
  //         `${API_NODE_URL}news-and-event/delete/${id}`,
  //         {
  //           method: "DELETE",
  //         }
  //       );
  //       const data = await response.json();
  //       if (data.status) {
  //         setNewsAndEvents(newsAndEvents.filter((event) => event.id !== id));
  //         alert(data.message || "Event deleted successfully!");
  //       } else {
  //         alert("Failed to delete event.");
  //       }
  //     } catch (error) {
  //       console.error("Error deleting event:", error);
  //       alert("Failed to delete event.");
  //     }
  //   }
  // };
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
              News And Event List
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
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Short Desc</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Type</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {newsAndEvents.length > 0 ? (
                newsAndEvents.map((event) => (
                  <tr key={event.id}>
                    {/* <td className="border px-4 py-2">
                        <img
                          src={event.featuredImage}
                          alt={event.title}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                      </td> */}
                    <td className="border px-4 py-2">{event.name}</td>
                    <td className="border px-4 py-2">{event.shortDesc}</td>
                    <td className="border px-4 py-2">
                      {event?.date?.split("T")[0]}
                    </td>
                    <td className="border px-4 py-2">{event.type}</td>
                    <td className="border px-4 py-2">
                      {event.status ? "Active" : "Inactive"}
                    </td>
                    <td className="border px-4 py-2">
                      <div className="flex justify-start space-x-2">
                        <button
                          onClick={() =>
                            router.push(
                              `/admin/edit-news-and-event?sid=${event?.sid}`
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

export default CirculerList;