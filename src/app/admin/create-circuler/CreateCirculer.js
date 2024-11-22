"use client";

import React, { useState } from "react";
import { API_NODE_URL } from "@/configs/config";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";

function CreateCirculer() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [description, setDescription] = useState("");
  const [featuredImage, setFeaturedImage] = useState(null);
  const [galleryImg, setGalleryImg] = useState([]);
  const [date, setDate] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [featured, setFeatured] = useState("No");
  const [type, setType] = useState("news");
  const [tags, setTags] = useState([]);
  const [relatedLinks, setRelatedLinks] = useState([]);

  const handleFeaturedImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFeaturedImage(URL.createObjectURL(file));
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const uploadedImages = files.map((file) => URL.createObjectURL(file));
    setGalleryImg((prev) => [...prev, ...uploadedImages]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEvent = {
      title,
      shortDesc,
      description,
      featuredImage,
      galleryimg: galleryImg,
      date,
      pageUrl,
      featured,
      type,
      tags,
      relatedLinks,
    };

    try {
      const response = await fetch(`${API_NODE_URL}circuler/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      });
      const data = await response.json();
      if (data.status) {
        alert(data.message || "Circuler added successfully!");
        setTitle("");
        setShortDesc("");
        setDescription("");
        setFeaturedImage(null);
        setGalleryImg([]);
        setDate("");
        setPageUrl("");
        setFeatured("No");
        setType("circuler");
        setTags([]);
        setRelatedLinks([]);
      } else {
        alert(data.message || "Failed to add news/event.");
      }
    } catch (error) {
      console.error("Error adding news/event:", error);
      alert("Failed to add news/event.");
    }
  };

  const handleKeywordKeyPress = (e, setFunction, items, name) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      e.preventDefault();
      const newItem = e.target.value.trim();

      if (!items.includes(newItem.toLowerCase())) {
        setFunction((prev) => [...prev, newItem.toLowerCase()]);
      } else {
        alert(`This ${name} is already added!`);
      }

      e.target.value = "";
    }
  };

  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg p-4 mb-5 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex text-white items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-add"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
            <h2 className="font-novaSemi text-xl text-white tracking-wide">
              Add Circuler
            </h2>
          </div>
        </div>
      </div>
      <div className="my-5 w-max bg-white rounded-2xl shadow-md p-6">
        <form className="space-y-4">
          <div>
            <label htmlFor="title" className="block font-novaSemi">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              placeholder="Write a title..."
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-novaSemi">Short Description</label>
            <ReactQuill
              id="shortDesc"
              name="shortDesc"
              value={shortDesc}
              placeholder="Write here short description"
              onChange={(content) => setShortDesc(content)}
              className="bg-gray-50"
            />
          </div>

          <div>
            <label htmlFor="description" className="block font-novaSemi">
              Description
            </label>
            <ReactQuill
              id="description"
              name="description"
              value={description}
              placeholder="Write here full description"
              onChange={(content) => setDescription(content)}
              className="bg-gray-50"
            />
          </div>

          <div className="flex justify-between gap-5">
            <div>
              <label htmlFor="featuredImage" className="block font-novaSemi">
                Featured Image (Upload)
              </label>
              <input
                id="featuredImage"
                type="file"
                onChange={handleFeaturedImageUpload}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {featuredImage && (
                <div className="mt-2">
                  <img
                    src={featuredImage}
                    alt="Featured Preview"
                    className="w-40 h-40 object-cover rounded-md"
                  />
                </div>
              )}
            </div>

            <div>
              <label htmlFor="galleryImg" className="block font-novaSemi">
                Gallery Images (Upload)
              </label>
              <input
                id="galleryImg"
                type="file"
                onChange={handleImageUpload}
                multiple
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <div className="mt-2 flex flex-wrap gap-5">
                {galleryImg.map((img, index) => (
                  <span key={index} className="relative">
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-20 h-20 object-cover rounded-md m-1"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setGalleryImg(galleryImg.filter((_, i) => i !== index))
                      }
                      className="absolute top-0 right-0 text-black text-xl rounded-full -mt-2 -mr-2"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="pageUrl" className="block font-novaSemi">
              Page URL
            </label>
            <input
              id="pageUrl"
              type="text"
              value={pageUrl}
              onChange={(e) => setPageUrl(e.target.value)}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="w-full flex items-center gap-10">
            <div>
              <label htmlFor="date" className="block font-novaSemi">
                Date
              </label>
              <input
                id="date"
                type="date" // This changes the input to a date picker
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="featured" className="block font-novaSemi">
                Featured
              </label>
              <select
                id="featured"
                value={featured}
                onChange={(e) => setFeatured(e.target.value)}
                className="w-40 px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label htmlFor="type" className="block font-novaSemi">
                Type
              </label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-40 px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="circuler">Circuler</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="tags" className="block font-novaSemi">
              Tags
            </label>
            <input
              id="tags"
              type="text"
              onKeyDown={(e) => handleKeywordKeyPress(e, setTags, tags, "Tag")}
              placeholder="Press Enter to add a tag"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <div className="mt-2 flex flex-wrap">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-200 px-3 py-1 rounded-full mr-2 mb-2"
                >
                  {tag}
                  <button
                    className="text-xl"
                    type="button"
                    onClick={() => setTags(tags.filter((t) => t !== tag))}
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="relatedLinks" className="block font-novaSemi">
              Related Links
            </label>
            <input
              id="relatedLinks"
              type="text"
              onKeyDown={(e) =>
                handleKeywordKeyPress(e, setRelatedLinks, relatedLinks, "Link")
              }
              placeholder="Press Enter to add a related link"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <div className="mt-2 flex flex-wrap">
              {relatedLinks.map((link, index) => (
                <span
                  key={index}
                  className="bg-purple-200 px-3 py-1 rounded-full mr-2 mb-2"
                >
                  {link}
                  <button
                    className="text-xl"
                    type="button"
                    onClick={() =>
                      setRelatedLinks(relatedLinks.filter((l) => l !== link))
                    }
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-xl uppercase font-novaSemi text-sm mt-4 hover:bg-blue-600 hover:scale-105 transition duration-200 ease-linear"
          >
            Save News / Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCirculer;
