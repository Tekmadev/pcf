import { blogPosts } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

export const metadata = {
  title: "Blog | PCF - Precision Flooring & Contracting",
  description:
    "Expert insights, tips, and trends in flooring and home improvement from PCF professionals.",
};

export default async function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-secondary py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Expert insights, tips, and trends in flooring and home improvement
              from our professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[#d6781c] font-medium">
                {featuredPost.category}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">
                {format(new Date(featuredPost.date), "MMMM d, yyyy")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#292524] mb-4">
              {featuredPost.title}
            </h2>
            <p className="text-lg text-[#292524]/80 mb-6">
              {featuredPost.description}
            </p>
            <Link
              href={`/blog/${featuredPost.id}`}
              className="inline-flex items-center text-[#d6781c] font-medium hover:text-[#c66812] transition-colors"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[#d6781c] text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500 text-sm">
                    {format(new Date(post.date), "MMMM d, yyyy")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#292524] mb-3">
                  {post.title}
                </h3>
                <p className="text-[#292524]/80 mb-4 line-clamp-2">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-[#d6781c] text-sm font-medium hover:text-[#c66812] transition-colors"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
