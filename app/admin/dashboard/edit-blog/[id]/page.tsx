"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function EditBlog({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    imageUrl: "",
  });
  const [imagePreview, setImagePreview] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .eq("id", params.id)
          .single();

        if (error) {
          setError("Erreur lors du chargement du blog");
          console.error("Erreur:", error);
        } else {
          setFormData({
            title: data.title,
            category: data.category,
            content: data.description,
            imageUrl: data.image || "",
          });
          if (data.image) {
            setImagePreview(data.image);
          }
        }
      } catch (err) {
        setError("Une erreur inattendue s'est produite");
        console.error("Erreur:", err);
      }
    };

    fetchBlog();
  }, [params.id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Réinitialiser l'erreur quand l'utilisateur modifie un champ
  };

  const validateForm = () => {
    if (!formData.title.trim()) {
      setError("Le titre est requis");
      return false;
    }
    if (!formData.category) {
      setError("La catégorie est requise");
      return false;
    }
    if (!formData.content.trim()) {
      setError("Le contenu est requis");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("blogs")
        .update({
          title: formData.title,
          description: formData.content,
          image: formData.imageUrl,
          category: formData.category,
        })
        .eq("id", params.id)
        .select()
        .single();

      if (error) {
        setError("Erreur lors de la mise à jour du blog");
        console.error("Erreur:", error);
      } else {
        console.log("Blog mis à jour avec succès:", data);
        router.push("/admin/dashboard");
      }
    } catch (err) {
      setError("Une erreur inattendue s'est produite");
      console.error("Erreur:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-800">Modifier le Blog</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/admin/dashboard"
                className="text-gray-600 hover:text-gray-900"
              >
                Retour au Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image du Blog
                </label>
                <div className="flex items-center space-x-4">
                  <div className="relative h-32 w-32">
                    {imagePreview ? (
                      <Image
                        src={imagePreview}
                        alt="Aperçu du blog"
                        fill
                        className="rounded-lg object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400">Pas d'image</span>
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
                    {imagePreview && (
                      <button
                        type="button"
                        onClick={() => {
                          setImagePreview("");
                          setFormData({ ...formData, imageUrl: "" });
                        }}
                        className="text-sm text-red-600 hover:text-red-800"
                      >
                        Supprimer l'image
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Titre
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d6781c] focus:ring-[#d6781c] sm:text-sm"
                  placeholder="Entrez le titre du blog"
                />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                  Contenu
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d6781c] focus:ring-[#d6781c] sm:text-sm"
                  placeholder="Écrivez le contenu de votre blog ici..."
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Catégorie
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d6781c] focus:ring-[#d6781c] sm:text-sm"
                >
                  <option value="">Sélectionnez une catégorie</option>
                  <option value="news">Outdoor</option>
                  <option value="technology">Cleaning</option>
                  <option value="lifestyle">Flooring</option>
                  <option value="business">Business</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4">
                <Link
                  href="/admin/dashboard"
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Annuler
                </Link>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#d6781c] hover:bg-[#c66812] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d6781c] ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Mise à jour..." : "Enregistrer les modifications"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}