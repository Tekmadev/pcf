import { blogPosts, getPostById } from "@/data/blog";
import Image from "next/image";
import { format } from "date-fns";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = getPostById(params.id);

  if (!post) {
    return {
      title: "Post Not Found | PFC Blog",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | PFC Blog`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getPostById(params.id);

  if (!post) {
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
                {post.category}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">
                {format(new Date(post.date), "MMMM d, yyyy")}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {post.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">{post.content}</div>

          {/* Author Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-500">
                  {post.author.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#292524]">
                  {post.author}
                </h3>
                <p className="text-gray-500">Flooring Expert</p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
