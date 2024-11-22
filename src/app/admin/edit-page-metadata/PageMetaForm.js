"use client";

import React, { useState, useEffect } from "react";
import { API_NODE_URL } from "@/configs/config";
import { useRouter, useSearchParams } from "next/navigation";

function UpdateMetaForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageid = searchParams.get("pageid"); // Get pageid from query parameters

  const [metatitle, setMetatitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState([]);
  const [path, setPath] = useState("");

  useEffect(() => {
    // Fetch existing metadata for the page
    if (pageid) {
      fetchMetadata();
    }
  }, [pageid]);

  const fetchMetadata = async () => {
    try {
      const response = await fetch(`${API_NODE_URL}meta/get?pageid=${pageid}`, {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);

      if (data.status) {
        const { metatitle, metaDescription, metaKeywords, path } = data.data;
        setMetatitle(metatitle || "");
        setMetaDescription(metaDescription || "");
        setMetaKeywords(metaKeywords || []);
        setPath(path || "");
      } else {
        alert(data.message || "Failed to fetch metadata.");
      }
    } catch (error) {
      console.error("Error fetching metadata:", error);
      alert("Error fetching metadata.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const metadata = {
      pageid,
      metatitle,
      metaDescription,
      metaKeywords,
      path,
    };

    try {
      const response = await fetch(`${API_NODE_URL}meta/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(metadata),
      });
      const data = await response.json();

      if (data.status) {
        alert(data.message || "Metadata updated successfully.");
      } else {
        alert(data.message || "Error updating metadata.");
      }
    } catch (error) {
      console.error("Error updating metadata:", error);
      alert("Error updating metadata.");
    }
  };

  const handleKeywordKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const newKeyword = e.target.value.trim();

      if (!metaKeywords.includes(newKeyword)) {
        setMetaKeywords((prevKeywords) => [...prevKeywords, newKeyword]);
      }

      e.target.value = "";
    }
  };

  const handleKeywordDelete = (keyword) => {
    setMetaKeywords(metaKeywords.filter((k) => k !== keyword));
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
        <h2 className="text-2xl font-bold mb-6">Update Page Metadata</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="page-id"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Page ID
            </label>
            <input
              id="page-id"
              type="text"
              value={pageid}
              disabled
              className="w-full border border-gray-300 rounded-md py-2 px-3 bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label
              htmlFor="metatitle"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Meta Title
            </label>
            <input
              id="metatitle"
              type="text"
              value={metatitle}
              onChange={(e) => setMetatitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="metaDescription"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Meta Description
            </label>
            <textarea
              id="metaDescription"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="metaKeywords"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Meta Keywords (press Enter to add)
            </label>
            <input
              id="metaKeywords"
              type="text"
              onKeyDown={handleKeywordKeyPress}
              placeholder="Press Enter to add a keyword"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="mt-2 flex flex-wrap">
              {metaKeywords.map((keyword, index) => (
                <span
                  key={index}
                  className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full mr-2 mb-2 flex items-center"
                >
                  {keyword}
                  <button
                    type="button"
                    onClick={() => handleKeywordDelete(keyword)}
                    className="ml-2 text-xl text-red-600 hover:text-red-800"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>
          <div>
            <label
              htmlFor="path"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Path
            </label>
            <input
              disabled
              id="path"
              type="text"
              value={path}
              onChange={(e) => setPath(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 bg-gray-100 cursor-not-allowed"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600"
          >
            Save Metadata
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateMetaForm;
