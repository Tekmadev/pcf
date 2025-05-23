"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();
  const blogs = [
    {
      id: "1",
      title: "Getting Started with Next.js",
      category: "Technology",
      description: "Learn the basics of Next.js and how to build modern web applications",
      date: "2024-03-20",
      imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
    },
    {
      id: "2",
      title: "The Future of Web Development",
      category: "Technology",
      description: "Exploring upcoming trends and technologies in web development",
      date: "2024-03-19",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      id: "3",
      title: "Best Practices in React",
      category: "Technology",
      description: "Essential tips and tricks for writing better React code",
      date: "2024-03-18",
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee"
    }
  ];

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      router.push("/admin")
      if (error) {
        console.log("Error while logout")
        return;
      }
      console.log("logout succesfully");
    } catch {
      console.log("Different Error while logout")
    }
  }

  //console.log("logout succesfuly", error)

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
                onClick={handleLogout}
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
                        Description
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
                    {blogs.map((blog) => (
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
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500 max-w-xs truncate">
                            {blog.description}
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