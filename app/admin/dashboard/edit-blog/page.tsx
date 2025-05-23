"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function EditBlog() {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState("https://images.unsplash.com/photo-1499750310107-5fef28a66643");

  // Static data for demonstration
  const blogData = {
    title: "Getting Started with Next.js",
    description: "Learn the basics of Next.js and how to build modern web applications",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-800">Edit Blog</h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <form className="space-y-6">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blog Image
                </label>
                <div className="flex items-center space-x-4">
                  <div className="relative h-32 w-32">
                    {imagePreview ? (
                      <Image
                        src={imagePreview}
                        alt="Blog preview"
                        fill
                        className="rounded-lg object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400">No image</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <input
                      type="file"
                      accept="image/*"
                      className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-[#d6781c] file:text-white
                        hover:file:bg-[#c66812]"
                    />
                    {imagePreview && (
                      <button
                        type="button"
                        className="text-sm text-red-600 hover:text-red-800"
                      >
                        Remove Image
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  defaultValue={blogData.title}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d6781c] focus:ring-[#d6781c] sm:text-sm"
                />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  defaultValue={blogData.description}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d6781c] focus:ring-[#d6781c] sm:text-sm"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  id="category"
                  defaultValue={blogData.category}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d6781c] focus:ring-[#d6781c] sm:text-sm"
                >
                  <option value="Technology">Technology</option>
                  <option value="Design">Design</option>
                  <option value="Business">Business</option>
                  <option value="Lifestyle">Lifestyle</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4">
                <Link
                  href="/admin/dashboard"
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#d6781c] hover:bg-[#c66812] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d6781c]"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}