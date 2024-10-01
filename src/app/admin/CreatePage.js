"use client";
import React, { useState, useEffect } from "react";
import PageDetailsForm from "./PageDetails"; // Ensure this points to the correct path
import { API_NODE_URL } from "@/configs/config";

function CreatePage() {
    const [showPageDetails, setShowPageDetails] = useState(false);
    const [allPages, setAllPages] = useState([]); // To hold all pages from API
    const [displayedPages, setDisplayedPages] = useState([]); // To hold currently displayed pages
    const [searchValue, setSearchValue] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [pageIndex, setPageIndex] = useState(10); // To track how many pages to show initially
    const [hasMore, setHasMore] = useState(true); // For 'Show More' button
    const [selectedPage, setSelectedPage] = useState(null); // To store the selected parent page
    const [title, setTitle] = useState(""); // To hold title input
    const [pageType, setPageType] = useState("About"); // Default page type

    // Fetch pages from the API using fetch
    const fetchPages = async (searchTerm = "") => {
        try {
            const response = await fetch(`${API_NODE_URL}slug/getParents`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query: searchTerm, page: 1, limit: 10 }), // Always request 10 pages
            });
            const data = await response.json();

            const fetchedPages = data.data.pages || [];

            if (fetchedPages.length === 0) {
                // No pages returned, show only the default
                setAllPages([]);
                setDisplayedPages([{ name: "This is parent page", reportId: null }]); // Default page
                setHasMore(false); // No more pages to show
            } else {
                // Pages are returned, show them
                setAllPages(fetchedPages); // Set all pages from API
                setDisplayedPages(fetchedPages.slice(0, 10)); // Show the first 10 pages
                setHasMore(fetchedPages.length > 10); // Check if more than 10 exist
            }
        } catch (error) {
            console.error("Error fetching parent pages:", error);
        }
    };

    // Initial fetch when the component mounts
    useEffect(() => {
        fetchPages(); // Fetch without search term initially
    }, []);

    // Handler for input change
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);

        if (value.length > 0) {
            // Fetch pages that match the search term
            fetchPages(value);
            setShowDropdown(true); // Show dropdown on search
        } else {
            // If no input, show the first 10 default pages again
            setDisplayedPages(allPages.slice(0, 10)); // Default 10 pages
            setShowDropdown(false); // Hide dropdown if nothing is entered
        }
    };

    // Handle selection of a suggestion
    const handleSuggestionClick = (page) => {
        console.log(page);
        
        setSearchValue(page.name); // Show the name in the input
        setSelectedPage(page); // Set the selected page
        setShowDropdown(false); // Hide the dropdown after selection
    };

    // Handle 'Show More' button click
    const handleShowMore = () => {
        const newIndex = pageIndex + 10;
        setDisplayedPages(allPages.slice(0, newIndex)); // Show next 10 pages
        setPageIndex(newIndex); // Update index
        if (newIndex >= allPages.length) {
            setHasMore(false); // Hide 'Show More' if no more pages
        }
    };

    // Handle the Add button click
    const handleAddClick = () => {
        // Validation
        if (!selectedPage) {
            alert("Please select a parent page.");
            return;
        }
        if (!title) {
            alert("Please enter a title.");
            return;
        }

        // Proceed to PageDetailsForm
        setShowPageDetails(true);
    };

    return (
        <div>
            {!showPageDetails && (
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-6">Add</h2>
                    <form className="space-y-4">
                        <div className="relative">
                            <label
                                htmlFor="parent-page"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Choose Parent Page
                            </label>
                            <input
                                id="parent-page"
                                type="text"
                                value={searchValue}
                                onChange={handleInputChange}
                                placeholder="Search and Choose Page"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            {/* Dropdown for suggestions */}
                            {showDropdown && (
                                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
                                    {displayedPages.map((page, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleSuggestionClick(page)}
                                            className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                        >
                                            {/* Display both name and page_id */}
                                            {page.name} {page?.page_id && ` - Page Id : ${page.page_id}`}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* 'Show More' button */}
                            {hasMore && displayedPages.length > 0 && (
                                <button
                                    type="button"
                                    onClick={handleShowMore}
                                    className="mt-2 text-blue-500 hover:underline"
                                >
                                    Show More
                                </button>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Title*
                            </label>
                            <input
                                id="title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="page-type"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Select Page Type*
                            </label>
                            <select
                                id="page-type"
                                value={pageType}
                                onChange={(e) => setPageType(e.target.value)}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>News</option>
                                <option>Event</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        <div className="flex space-x-4 pt-4">
                            <button
                                onClick={handleAddClick}
                                type="button"
                                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
                            >
                                Add
                            </button>
                            <button
                                type="button"
                                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
                                onClick={() => {
                                    setShowPageDetails(false);
                                    setSearchValue("");
                                    setTitle("");
                                    setSelectedPage(null);
                                    setPageType("About"); // Reset to default type
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
            {console.log(selectedPage)
            }
            {showPageDetails && (
                <PageDetailsForm
                    parentPage={selectedPage}
                    title={title}
                    pageType={pageType}
                />
            )}
        </div>
    );
}

export default CreatePage;
