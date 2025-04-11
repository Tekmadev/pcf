export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "hardwood-flooring-maintenance",
    title: "The Ultimate Guide to Hardwood Flooring Maintenance",
    description:
      "Learn the best practices for maintaining your hardwood floors and keeping them looking beautiful for years to come.",
    content:
      "Hardwood floors are a beautiful and durable choice for any home...",
    image: "/images/blog/flooring2.webp",
    date: "2024-03-15",
    author: "John Smith",
    category: "Flooring",
    tags: ["Hardwood", "Maintenance", "Cleaning"],
  },
  {
    id: "paver-sealing-benefits",
    title: "Why Professional Paver Sealing is Essential for Your Outdoor Space",
    description:
      "Discover the benefits of professional paver sealing and how it can extend the life of your outdoor surfaces.",
    content:
      "Paver sealing is an essential part of maintaining your outdoor living space...",
    image: "/images/blog/blog2.png",
    date: "2024-03-10",
    author: "Sarah Johnson",
    category: "Outdoor",
    tags: ["Pavers", "Sealing", "Outdoor"],
  },
  {
    id: "spring-cleaning-tips",
    title:
      "Spring Cleaning: Professional Tips for Refreshing Your Home's Surfaces",
    description:
      "Get your home ready for spring with these professional cleaning tips from our experts.",
    content:
      "Spring cleaning is the perfect time to refresh your home's surfaces...",
    image: "/images/blog/blog3.png",
    date: "2024-03-05",
    author: "Mike Williams",
    category: "Cleaning",
    tags: ["Spring Cleaning", "Maintenance", "Tips"],
  },
  {
    id: "flooring-trends-2024",
    title: "Top Flooring Trends to Watch in 2024",
    description:
      "Stay ahead of the curve with the latest flooring trends and design ideas for your home.",
    content:
      "The flooring industry is constantly evolving with new trends and technologies...",
    image: "/images/blog/blog4.png",
    date: "2024-02-28",
    author: "Emily Davis",
    category: "Flooring",
    tags: ["Trends", "Design", "Flooring"],
  },
];

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getPostById(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}
