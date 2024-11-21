"use client";
import React, { useState, useEffect } from "react";
import { API_NODE_URL } from "@/configs/config";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useRouter, useSearchParams } from "next/navigation";

const EditNewsAndEvent = ({ setActiveBtn }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sid = searchParams.get("sid");

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

  console.log(router);
  

  useEffect(() => {``
    if (sid) {
      const fetchEventData = async () => {
        try {
          const response = await fetch(`${API_NODE_URL}news-and-event/get?sid=${sid}`);
          const data = await response.json();
          console.log(data);
          
          if (data.status && data.data) {
            const event = data.data;
            setTitle(event.title);
            setShortDesc(event.shortDesc);
            setDescription(event.description);
            setFeaturedImage(event.featuredImage);
            setGalleryImg(event.galleryimg || []);
            setDate(event.date);
            setPageUrl(event.pageUrl);
            setFeatured(event.featured);
            setType(event.type);
            setTags(event.tags || []);
            setRelatedLinks(event.relatedLinks || []);
            setActiveBtn(5);
          } else {
            alert(data.message);
          }
        } catch (error) {
          console.error("Error fetching event data:", error);
        }
      };

      fetchEventData();
    }
  }, [sid]);

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

    const updatedEvent = {
      sid,
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
      const response = await fetch(`${API_NODE_URL}news-and-event/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedEvent),
      });
      const data = await response.json();
      if (data.status) {
        alert(data.message || "News/Event updated successfully!");
        setTitle("");
        setShortDesc("");
        setDescription("");
        setFeaturedImage(null);
        setGalleryImg([]);
        setDate("");
        setPageUrl("");
        setFeatured("No");
        setType("news");
        setTags([]);
        setRelatedLinks([]);
      } else {
        alert(data.message || "Failed to update news/event.");
      }
    } catch (error) {
      console.error("Error updating news/event:", error);
      alert("Failed to update news/event.");
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
    <div className="w-[70%] m-10 mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex gap-2 cursor-pointer mb-4" onClick={() => router.back()}>
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
      <h2 className="text-2xl font-bold mb-6">Edit News/Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block font-semibold">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block font-semibold">Short Description</label>
          <ReactQuill
            id="shortDesc"
            value={shortDesc}
            onChange={setShortDesc}
            className="border rounded-md"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block font-semibold">
            Description
          </label>
          <ReactQuill
            id="description"
            value={description}
            onChange={setDescription}
            className="w-full border rounded-md"
          />
        </div>

        {/* Featured Image */}
        <div>
          <label htmlFor="featuredImage" className="block font-semibold">
            Featured Image (Upload)
          </label>
          <input
            id="featuredImage"
            type="file"
            onChange={handleFeaturedImageUpload}
            className="w-full border rounded-md p-2"
          />
          {featuredImage && (
            <div className="mt-2">
              <img src={featuredImage} alt="Featured Preview" className="w-40 h-40 object-cover rounded-md" />
            </div>
          )}
        </div>

        {/* Gallery Images */}
        <div>
          <label htmlFor="galleryImg" className="block font-semibold">
            Gallery Images (Upload)
          </label>
          <input
            id="galleryImg"
            type="file"
            onChange={handleImageUpload}
            multiple
            className="w-full border rounded-md p-2"
          />
          <div className="mt-2 flex flex-wrap gap-5">
            {galleryImg.map((img, index) => (
              <span key={index} className="relative">
                <img src={img} alt={`Gallery ${index + 1}`} className="w-20 h-20 object-cover rounded-md m-1" />
                <button
                  type="button"
                  onClick={() => setGalleryImg(galleryImg.filter((_, i) => i !== index))}
                  className="absolute top-0 right-0 text-black text-xl rounded-full -mt-2 -mr-2"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Date Input */}
        <div>
          <label htmlFor="date" className="block font-semibold">
            Date
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Other Inputs */}
        <div>
          <label htmlFor="pageUrl" className="block font-semibold">
            Page URL
          </label>
          <input
            id="pageUrl"
            type="text"
            value={pageUrl}
            onChange={(e) => setPageUrl(e.target.value)}
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label htmlFor="featured" className="block font-semibold">
            Featured
          </label>
          <select
            id="featured"
            value={featured}
            onChange={(e) => setFeatured(e.target.value)}
            className="w-full border rounded-md p-2"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div>
          <label htmlFor="type" className="block font-semibold">
            Type
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border rounded-md p-2"
          >
            <option value="news">News</option>
            <option value="event">Event</option>
          </select>
        </div>

        {/* Tags */}
        <div>
          <label htmlFor="tags" className="block font-semibold">
            Tags
          </label>
          <input
            id="tags"
            type="text"
            placeholder="Press Enter to add tags"
            onKeyDown={(e) => handleKeywordKeyPress(e, setTags, tags, "tag")}
            className="w-full border rounded-md p-2"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-blue-200 px-2 py-1 rounded-full text-sm flex items-center">
                {tag}
                <button
                  type="button"
                  onClick={() => setTags(tags.filter((_, i) => i !== index))}
                  className="ml-2 text-red-500 font-semibold"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Related Links */}
        <div>
          <label htmlFor="relatedLinks" className="block font-semibold">
            Related Links
          </label>
          <input
            id="relatedLinks"
            type="text"
            placeholder="Press Enter to add related links"
            onKeyDown={(e) => handleKeywordKeyPress(e, setRelatedLinks, relatedLinks, "link")}
            className="w-full border rounded-md p-2"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {relatedLinks.map((link, index) => (
              <span key={index} className="bg-green-200 px-2 py-1 rounded-full text-sm flex items-center">
                {link}
                <button
                  type="button"
                  onClick={() => setRelatedLinks(relatedLinks.filter((_, i) => i !== index))}
                  className="ml-2 text-red-500 font-semibold"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Update News/Event
        </button>
      </form>
    </div>
  );
}

export default EditNewsAndEvent;
