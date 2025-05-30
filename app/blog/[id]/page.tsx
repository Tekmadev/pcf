import { blogPosts, getPostById } from "@/data/blog";
import Image from "next/image";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

interface Blog {
  id:string;
  title : string;
  descripiton: string;
  image: string;
  category: string;
  created_at: string;
}

export async function generateStaticParams() {
  const { data: blogs } = await supabase.from("blogs").select("id");
  return blogs?.map((blog) => ({
    id: blog.id,
  })) || [];
}

export default async function BlogPostPage({ params }: { params: {id: string}}) {
  const {data: blog, error} = await supabase.from("blogs").select("*").eq("id", params.id).single();

  if (error || !blog){
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-secondary py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[#d6781c] font-medium">
                {blog.category}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">
                {format(new Date(blog.created_at), "MMMM d, yyyy")}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {blog.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {blog.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">{blog.description}</div>

          {/* Author Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-[#d6781c] flex items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {blog.title.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#292524] mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600">Published on {format(new Date(blog.created_at), "MMMM d, yyyy")}</p>
                <p className="text-[#d6781c] font-medium mt-1">{blog.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
