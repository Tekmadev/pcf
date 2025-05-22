"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleDelete = async (id: string) => {
    try {
      // Delete logic will be implemented here
      setMessage("Blog deleted successfully");
      setTimeout(() => setMessage(""), 5000);
    } catch (error) {
      setError("Error while deleting");
      setTimeout(() => setError(""), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => router.push("/admin")}
                className="text-gray-600 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Blog Management</h2>
                <Link
                  href="/admin/dashboard/new-blog"
                  className="bg-[#d6781c] text-white px-4 py-2 rounded-md hover:bg-[#c66812] transition-colors"
                >
                  Add Blog
                </Link>
              </div>

              {/* Messages */}
              {message && (
                <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-md">
                  {message}
                </div>
              )}
              {error && (
                <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
                  {error}
                </div>
              )}

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Image
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {blogs.map((blog: any) => (
                      <tr key={blog.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-10 w-10 relative">
                            <Image
                              src={blog.imageUrl}
                              alt={blog.title}
                              fill
                              className="rounded-md object-cover"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {blog.title}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{blog.category}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {new Date(blog.date).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-3">
                            <Link
                              href={`/admin/dashboard/edit-blog/${blog.id}`}
                              className="text-[#d6781c] hover:text-[#c66812]"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(blog.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}