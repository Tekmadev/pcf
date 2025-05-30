"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface EditBlogFormProps {
    blog: {
        id: string;
        title: string;
        description: string;
        image: string;
        category: string;
    }
}

export default function EditBlogForm({ blog }: EditBlogFormProps) {
    const router = useRouter();
    const [title, setTitle] = useState(blog.title);
    const [category, setCategory] = useState(blog.category);
    const [description, setDescription] = useState(blog.description);
    const [imageUrl, setImageUrl] = useState(blog.image);

    const [champ, setChamp] = useState({
        title: blog.title,
        category: blog.category,
        description: blog.description,
        imageUrl: blog.image || "",
    });
    const [message, setMessage] = useState("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setChamp(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const { data, error } = await supabase
                .from("blogs")
                .update({
                    title: champ.title,
                    description: champ.description,
                    image: champ.imageUrl,
                    category: champ.category,
                })
                .eq("id", blog.id)
                .select()
                .single();

            if (error) {
                setError("Error updating blog");
                console.error("Error:", error);
            } else {
                setMessage("Blog updated successfully!");
                setTimeout(() => {
                    router.push("/admin/dashboard");
                }, 2000);
            }
        } catch (err) {
            setError("An unexpected error occurred");
            console.error("Error:", err);
        }
    };

    return (
        <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
                {error && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-sm text-red-600">{error}</p>
                    </div>
                )}
                {message && (
                    <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-sm text-green-600">{message}</p>
                    </div>
                )}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Blog Image
                    </label>
                    <div className="flex items-center space-x-4">
                        <div className="relative h-32 w-32">
                            {champ.imageUrl ? (
                                <Image
                                    src={champ.imageUrl}
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
                                name="image"
                                onChange={handleChange}
                                className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-[#d6781c] file:text-white
                        hover:file:bg-[#c66812]"
                            />
                            {champ.imageUrl && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setImageUrl("");
                                        setChamp(prev => ({ ...prev, imageUrl: "" }));
                                    }}
                                    className="text-sm text-red-600 hover:text-red-800"
                                >
                                    Remove image
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={champ.title}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d6781c] focus:ring-[#d6781c] sm:text-sm"
                        placeholder="Enter blog title"
                    />
                </div>

                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                        Content
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={champ.description}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d6781c] focus:ring-[#d6781c] sm:text-sm"
                        placeholder="Write your blog content here..."
                    />
                </div>

                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        Category
                    </label>
                    <select
                        id="category"
                        name="category"
                        value={champ.category}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d6781c] focus:ring-[#d6781c] sm:text-sm"
                    >
                        <option value="">Select a category</option>
                        <option value="Outdoor">Outdoor</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Flooring">Flooring</option>
                        <option value="Business">Business</option>
                    </select>
                </div>

                <div className="flex justify-end space-x-4">
                    <Link
                        href="/admin/dashboard"
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#d6781c] hover:bg-[#c66812] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d6781c] ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {loading ? "Saving..." : "Save changes"}
                    </button>
                </div>
            </form>
        </div>
    );
}
