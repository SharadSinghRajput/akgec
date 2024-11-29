"use client";

import React, { useState, useEffect } from "react";
import { API_NODE_URL } from "@/configs/config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateDepartment() {
  const [formData, setFormData] = useState({
    name: "",
    school: "", // Holds selected school ID
    description: "",
    departmentCode: "",
    // headOfDepartment: "",
    programsOffered: "",
  });

  const [schools, setSchools] = useState([]); // State to hold school options
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [showDropdown, setShowDropdown] = useState(false); // Toggle dropdown visibility

  // Fetch schools for the dropdown
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch(
          `${API_NODE_URL}school/search?search=${searchQuery}`
        );
        const result = await response.json();
        if (result.status) {
          setSchools(
            Array.isArray(result?.data?.schools) ? result?.data?.schools : []
          );
        } else {
          toast.error(result.message || "Failed to fetch schools.");
          setSchools([]);
        }
      } catch (err) {
        console.error("Error fetching schools:", err);
        toast.error("An error occurred while fetching schools.");
        setSchools([]);
      }
    };
    fetchSchools();
  }, [searchQuery]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSchoolSelect = (school) => {
    setFormData({ ...formData, school: school._id }); // Set selected school ID
    setSearchQuery(school.name); // Display school name in input
    setShowDropdown(false); // Hide dropdown
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const progressBar = document.getElementById("progress-bar");

    try {
      progressBar.style.width = "0%";
      progressBar.style.transition = "none";
      requestAnimationFrame(() => {
        progressBar.style.transition = "width 0.5s ease";
        progressBar.style.width = "100%";
      });

      const response = await fetch(`${API_NODE_URL}department/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.status) {
        toast.success("Department added successfully!");
        setFormData({
          name: "",
          school: "",
          description: "",
          departmentCode: "",
          // headOfDepartment: "",
          programsOffered: "",
        });
        setSearchQuery("");
      } else {
        toast.error(result.message || "Failed to add department.");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("An error occurred while processing your request.");
    } finally {
      progressBar.style.width = "0%";
    }
  };

  return (
    <div className="w-full mb-10">
      <div
        id="progress-bar"
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50"
      ></div>
      <div className="bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg p-4 mb-5 shadow-lg">
        <h2 className="font-novaSemi text-xl text-white tracking-wide">
          Add New Department
        </h2>
      </div>
      <div className="max-w-md bg-white shadow-md rounded-2xl p-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {[
            { label: "Department Name", name: "name", type: "text" },
            { label: "Description", name: "description", type: "text" },
            { label: "Department Code", name: "departmentCode", type: "text" },
            // {
            //   label: "Head of Department",
            //   name: "headOfDepartment",
            //   type: "text",
            // },
            {
              label: "Programs Offered",
              name: "programsOffered",
              type: "text",
            },
          ].map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name]}
                onChange={handleInputChange}
                placeholder={`Enter ${field.label.toLowerCase()}...`}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          {/* Custom Searchable Dropdown */}
          <div>
            <label
              htmlFor="schoolSearch"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              School
            </label>
            <input
              id="schoolSearch"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowDropdown(true)}
              placeholder="Search and select school..."
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {showDropdown && (
              <ul className="border border-gray-300 mt-1 max-h-40 overflow-y-auto rounded-md bg-white shadow-md">
                {(Array.isArray(schools) ? schools : [])
                  .filter((school) =>
                    school.name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .map((school) => (
                    <li
                      key={school.id}
                      onClick={() => handleSchoolSelect(school)}
                      className="px-3 py-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                    >
                      {school.name}
                    </li>
                  ))}
              </ul>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md uppercase font-novaSemi text-sm mt-4 hover:bg-green-600 hover:scale-105 transition duration-200 ease-linear"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default CreateDepartment;
