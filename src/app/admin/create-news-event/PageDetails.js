"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { API_NODE_URL } from '@/configs/config';

export default function PageDetails({ allData, parentPage }) {

    const [formData, setFormData] = useState({
        parentPage: parentPage?.name,
        pageTitle: allData?.name,
        subCategory: '',
        date: '',
        language: 'English',
        shortDescription: '',
        pageDescription: '',
        shortName: '',
        secondaryType: '',
        relatedTag: '',
        banner: null,
        featuredImage: null,
        mainReportImage: null,
        metaTitle: '',
        metaDescription: '',
        keywords: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleQuillChange = (content, field) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: content,
        }));
    };


    const handleFileChange = (e, field) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: e.target.files[0],
        }));
    };
    const insertPage = async () => {
        const datas = {
            parent_id: parentPage.page_id,
            name: formData?.pageTitle,
            date: formData?.date,
            shortdesc: formData?.shortDescription,
            description: formData?.pageDescription,
            metatitle: formData?.metaTitle,
            metadesc: formData?.metaDescription,
            keywords_tag: formData?.keywords,
            featured_img: formData?.featuredImage,
            type: allData?.type,
        }
        console.log(datas);

        try {
            const response = await fetch(`${API_NODE_URL}slug/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...datas }),
            });
            const data = await response.json();

            const fetchedPages = data.data.pages || [];

            if (data.status) {
                alert("Page Inserted Successfully ")
            } else {
                alert('Something went wrong : ', fetchedPages?.message)
            }
        } catch (error) {
            console.error("Error fetching parent pages:", error);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        insertPage();
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg cursor-pointer hover:bg-red-200 transition-colors">
                Click Here to Generate Page Meta Using AI (Artificial Intelligence)
            </div>
            <h2 className="text-2xl font-bold mb-6">Add Page Details</h2>
            <div className="space-y-6">
                <section>
                    <h3 className="text-lg font-semibold mb-4">Basis Detail</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="parentPage" className="block text-sm font-medium text-gray-700 mb-1">Choose Parent Page</label>
                            <input type="text" id="parentPage" name="parentPage" value={formData.parentPage} onChange={handleChange} className="w-full p-2 border rounded"/>
                        </div>
                    </div>
                </section>
                <section>
                    <h3 className="text-lg font-semibold mb-4">Page Detail</h3>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="pageTitle" className="block text-sm font-medium text-gray-700 mb-1">Page Title*</label>
                            <input
                                type="text"
                                id="pageTitle"
                                name="pageTitle"
                                value={formData.pageTitle}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            <div>
                                <label htmlFor="pageDate" className="block text-sm font-medium text-gray-700 mb-1">Page Date*</label>
                                <input
                                    type="date"
                                    id="pageDate"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label htmlFor="pageType" className="block text-sm font-medium text-gray-700 mb-1">Select Page Type*</label>
                                <select
                                    id="pageType"
                                    name="pageType"
                                    value={allData?.type}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Select Page Type</option>
                                    <option value="News">News</option>
                                    <option value="Event">Event</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700 mb-1">Short Description*</label>
                        <ReactQuill
                            id="shortDescription"
                            name="shortDescription"
                            value={formData.shortDescription}
                            onChange={(content) => handleQuillChange(content, 'shortDescription')}
                            className="border rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="pageDescription" className="block text-sm font-medium text-gray-700 mb-1">Page Description*</label>
                        <ReactQuill
                            id="pageDescription"
                            name="pageDescription"
                            value={formData.pageDescription}
                            onChange={(content) => handleQuillChange(content, 'pageDescription')}
                            className="border rounded"
                        />
                    </div>
                </section>
                <section className="grid grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="shortName" className="block text-sm font-medium text-gray-700 mb-1">Short Name*</label>
                        <input
                            type="text"
                            id="shortName"
                            name="shortName"
                            value={formData.shortName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="secondaryType" className="block text-sm font-medium text-gray-700 mb-1">Secondary Type</label>
                        <input
                            type="text"
                            id="secondaryType"
                            name="secondaryType"
                            value={formData.secondaryType}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="relatedTag" className="block text-sm font-medium text-gray-700 mb-1">Related Tag*</label>
                        <input
                            type="text"
                            id="relatedTag"
                            name="relatedTag"
                            value={formData.relatedTag}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                </section>
                <section className="grid grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="banner" className="block text-sm font-medium text-gray-700 mb-1">Upload Banner*</label>
                        <div className="border-2 border-dashed border-gray-300 p-4 text-center">
                            <p className="text-sm text-gray-500 mb-2">File should be an image with webp extension</p>
                            <p className="text-sm text-gray-500 mb-2">(936 W X 337 H)</p>
                            <input
                                type="file"
                                accept="image/webp"
                                onChange={(e) => handleFileChange(e, 'banner')}
                                className="hidden"
                                id="uploadBanner"
                            />
                            <label htmlFor="uploadBanner" className="bg-blue-500 text-white px-4 py-2 rounded mr-2 cursor-pointer">Choose file</label>
                            <span className="text-sm text-gray-500">{formData.banner ? formData.banner.name : 'No file chosen'}</span>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700 mb-1">Upload Featured Image*</label>
                        <div className="border-2 border-dashed border-gray-300 p-4 text-center">
                            <p className="text-sm text-gray-500 mb-2">File should be an image with webp extension</p>
                            <p className="text-sm text-gray-500 mb-2">(100 W x 75 H)</p>
                            <input
                                type="file"
                                accept="image/webp"
                                onChange={(e) => handleFileChange(e, 'featuredImage')}
                                className="hidden"
                                id="uploadFeaturedImage"
                            />
                            <label htmlFor="uploadFeaturedImage" className="bg-blue-500 text-white px-4 py-2 rounded mr-2 cursor-pointer">Choose file</label>
                            <span className="text-sm text-gray-500">{formData.featuredImage ? formData.featuredImage.name : 'No file chosen'}</span>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="mainReportImage" className="block text-sm font-medium text-gray-700 mb-1">Upload Main Report Image*</label>
                        <div className="border-2 border-dashed border-gray-300 p-4 text-center">
                            <p className="text-sm text-gray-500 mb-2">File should be an image with webp extension</p>
                            <p className="text-sm text-gray-500 mb-2">(Banner Size: 936 W X 337 H)</p>
                            <input
                                type="file"
                                accept="image/webp"
                                onChange={(e) => handleFileChange(e, 'mainReportImage')}
                                className="hidden"
                                id="uploadMainReportImage"
                            />
                            <label htmlFor="uploadMainReportImage" className="bg-blue-500 text-white px-4 py-2 rounded mr-2 cursor-pointer">Choose file</label>
                            <span className="text-sm text-gray-500">{formData.mainReportImage ? formData.mainReportImage.name : 'No file chosen'}</span>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-lg font-semibold mb-4">Page Meta Detail</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700 mb-1">Meta Title*</label>
                            <input
                                type="text"
                                id="metaTitle"
                                name="metaTitle"
                                value={formData.metaTitle}
                                onChange={handleChange}
                                className="w-full p-2 border rounded h-12" // Set a fixed height
                            />
                        </div>
                        <div>
                            <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-1">Meta Description*</label>
                            <textarea
                                id="metaDescription"
                                name="metaDescription"
                                rows={1} // Set rows to 1
                                value={formData.metaDescription}
                                onChange={handleChange}
                                className="w-full p-2 border rounded resize-none h-12" // Set a fixed height and make it non-resizable
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">Keywords*</label>
                            <input
                                type="text"
                                id="keywords"
                                name="keywords"
                                value={formData.keywords}
                                onChange={handleChange}
                                className="w-full p-2 border rounded h-12" // Set a fixed height
                            />
                        </div>
                    </div>
                </section>


                <section>
                    <h3 className="text-lg font-semibold mb-4">Add Images</h3>
                    <input
                        type="file"
                        accept="image/webp"
                        onChange={(e) => handleFileChange(e, 'mainReportImage')}
                        className="hidden"
                        id="uploadMainReportImage"
                    />
                    <label htmlFor="uploadMainReportImage" className="bg-blue-500 text-white px-4 py-2 rounded mr-2 cursor-pointer">Add Image</label>
                    <span className="text-sm text-gray-500 hidden">{formData.mainReportImage ? formData.mainReportImage.name : 'No file chosen'}</span>
                </section>
            </div>

            <div className="mt-6">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded  mx-auto">Submit</button>
            </div>


        </form>
    );
}
