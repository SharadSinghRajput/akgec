"use client";

import React, { useState, useEffect } from "react";
import { API_NODE_URL } from "@/configs/config";
import { useRouter } from "next/navigation";

function PageMetaForm() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [selectedPage, setSelectedPage] = useState(null);
  const [metatitle, setMetatitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState([]);
  const [path, setPath] = useState("");
  const [allPages, setAllPages] = useState([]);
  const [displayedPages, setDisplayedPages] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [pageIndex, setPageIndex] = useState(10);
  const [hasMore, setHasMore] = useState(true);

  const fetchPages = async (searchTerm = "") => {
    console.log(searchTerm);

    try {
      const response = await fetch(`${API_NODE_URL}slug/getParents`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: searchTerm, page: 1, limit: 10 }),
      });
      const data = await response.json();
      console.log(data);

      const fetchedPages = data?.data?.pages || [];
      console.log(fetchedPages);

      const filteredPages = fetchedPages.filter(page => page.page_id !== 0);

      if (filteredPages.length === 0) {
        setAllPages([]);
        setDisplayedPages([{ name: "No pages found", pageid: null }]);
        setHasMore(false);
      } else {
        setAllPages(filteredPages);
        setDisplayedPages(filteredPages.slice(0, 10));
        setHasMore(filteredPages.length > 10);
      }
    } catch (error) {
      console.error("Error fetching pages:", error);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handleInputChange = (e) => {
    setSelectedPage(null);
    const value = e.target.value;
    setSearchValue(value);

    if (value.length > 0) {
      fetchPages(value);
      setShowDropdown(true);
    } else {
      setDisplayedPages(allPages.slice(0, 10));
      setShowDropdown(false);
    }
  };

  const handlePageSelect = (page) => {
    setSearchValue(page.pageid);
    setSelectedPage(page);
    setShowDropdown(false);
  };

  const handleShowMore = () => {
    const newIndex = pageIndex + 10;
    setDisplayedPages(allPages.slice(0, newIndex));
    setPageIndex(newIndex);
    if (newIndex >= allPages.length) {
      setHasMore(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedPage) {
      alert("Please select a page.");
      return;
    }

    const metadata = {
      pageid: selectedPage.page_id,
      metatitle,
      metaDescription,
      metaKeywords: metaKeywords,
      path,
    };
    console.log(metadata);

    try {
      const response = await fetch(`${API_NODE_URL}meta/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(metadata),
      });
      const data = await response.json();
      console.log(data);

      if (data.status) {
        alert(data.message);
      } else {
        alert(data.message || "Error updating metadata.");
      }
    } catch (error) {
      console.error("Error add metadata:", error);
      alert(data.message);
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
      <div className="flex gap-2 cursor-pointer mb-4" onClick={() => router.back()} >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-undo-dot"> <path d="M21 17a9 9 0 0 0-15-6.7L3 13" /> <path d="M3 7v6h6" /><circle cx="12" cy="17" r="1" /></svg>
        <span>Back</span>
      </div>
      <div className="m-10 mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Page Metadata</h2>
        <form className="space-y-4">
          <div className="relative">
            <label
              htmlFor="page-id"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Search Page ID
            </label>
            <input
              id="page-id"
              type="text"
              value={selectedPage ? selectedPage?.name : searchValue}
              onChange={handleInputChange}
              placeholder="Search by Page ID"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {showDropdown && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
                {displayedPages.map((page) => (
                  <li
                    key={page.pageid}
                    onClick={() => handlePageSelect(page)}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  >
                    {page.pageid} - {page.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {hasMore && displayedPages.length > 0 && (
            <button
              type="button"
              onClick={handleShowMore}
              className="mt-2 text-blue-500 hover:underline"
            >
              Show More
            </button>
          )}

          {selectedPage && (
            <>
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
                  id="path"
                  type="text"
                  value={path}
                  onChange={(e) => setPath(e.target.value)}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600"
              >
                Save Metadata
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default PageMetaForm;
