"use client";

import { useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function EmailJSInit() {
  useEffect(() => {
    // Initialize EmailJS
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  return null; // This component doesn't render anything
}
