"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    try {
      // Replace these with your actual EmailJS service, template, and user ID
      const result = await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"
      );

      if (result.status === 200) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        // Optional: Redirect after successful submission
        // setTimeout(() => {
        //   router.push('/thank-you');
        // }, 2000);
      } else {
        throw new Error("Something went wrong with the submission");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
      setErrorMessage(
        "There was a problem sending your message. Please try again or contact us directly."
      );
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-secondary mb-6 relative after:absolute after:content-[''] after:w-12 after:h-1 after:bg-[#d6781c] after:bottom-0 after:left-0 pb-3">
        Send Us a Message
      </h2>

      {formStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
          Thank you for your message! We'll get back to you as soon as possible.
        </div>
      )}

      {formStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-secondary mb-1"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c] text-secondary"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-secondary mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c] text-secondary"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-secondary mb-1"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c] text-secondary"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-secondary mb-1"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c] text-secondary resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={formStatus === "submitting"}
          className={`w-full bg-[#d6781c] hover:bg-[#c2410c] text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 ${
            formStatus === "submitting" ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {formStatus === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
