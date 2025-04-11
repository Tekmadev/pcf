"use client";

import Link from "next/link";
import Image from "next/image";
import { FormEvent, useState } from "react";
import FooterLink from "./ui/FooterLink";
import { quickLinks } from "../data/footerLinks";
import { services } from "../data/services";
import { usePathname } from "next/navigation";

const Footer = () => {
  const [email, setEmail] = useState("");
  const pathname = usePathname();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the newsletter subscription
    console.log("Subscribing email:", email);
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="bg-background-light text-secondary-dark">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/pfc.png"
                  alt="PFC Logo"
                  width={150}
                  height={78}
                  className="mb-4"
                />
              </Link>
              <p className="text-secondary mb-4">
                Your trusted partner for all home and commercial improvement
                needs in the Ottawa area.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3b5998] rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6 relative after:absolute after:content-[''] after:w-12 after:h-1 after:bg-[#d6781c] after:bottom-0 after:left-0 pb-3">
              Our Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink
                    href={link.href}
                    className={
                      pathname === link.href ||
                      (link.href === "/services" &&
                        pathname.includes("/services"))
                        ? "text-[#d6781c]"
                        : ""
                    }
                  >
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6 relative after:absolute after:content-[''] after:w-12 after:h-1 after:bg-[#d6781c] after:bottom-0 after:left-0 pb-3">
              Our Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {services.map((service) => (
                <FooterLink
                  key={service.href}
                  href={service.href}
                  className={pathname === service.href ? "text-[#d6781c]" : ""}
                >
                  {service.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6 relative after:absolute after:content-[''] after:w-12 after:h-1 after:bg-[#d6781c] after:bottom-0 after:left-0 pb-3">
              Newsletter
            </h3>
            <p className="text-secondary mb-6">
              Subscribe to our newsletter to get our latest updates and news
              about our services.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c] text-secondary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#d6781c] hover:bg-[#c2410c] text-white font-medium py-3 px-4 rounded-md transition-colors duration-300"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 mt-8 border-t border-gray-300 text-center">
          <p className="text-secondary">
            &copy; {new Date().getFullYear()} Precision Flooring & Contracting.
            All rights reserved.
          </p>
          <p className="text-secondary mt-2">
            Developed by{" "}
            <a href="https://www.tekmadev.com" target="_blank" rel="noopener noreferrer">
              Tekmadev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
