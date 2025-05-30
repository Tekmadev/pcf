import EditBlogForm from "./EditBlogForm";
import { supabase } from "@/lib/supabase";

export async function generateStaticParams() {
  const { data: blogs } = await supabase.from("blogs").select("id");
  return blogs?.map((blog) => ({
    id: blog.id,
  })) || [];
}

export default async function EditBLogPage({params}: {params: {id: string}}){
  const {data: blog} = await supabase.from("blogs").select("*").eq("id", params.id).single();

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Blog non trouvé</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Modifier le Blog</h1>
          <EditBlogForm blog={blog} />
        </div>
      </div>
    </div>
  );
}