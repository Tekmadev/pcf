"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./ui/NavLink";
import { navItems } from "../data/navigation";
import { services } from "../data/services";
import {
  Menu,
  MenuItem,
  NavMenuLink,
  CategorySection,
  BlogPostItem,
} from "./ui/navbar-menu";
import { getRecentPosts } from "@/data/blog";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on a mobile device
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Group services by category
  const servicesByCategory = services.reduce((acc, service) => {
    const category = service.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  const recentPosts = getRecentPosts(3);

  const handleSetActive = (item: string | null) => {
    setActiveItem(item);
  };

  // Handle mobile menu item click for services and blog
  const handleMobileItemClick = (category: string) => {
    if (activeItem === category) {
      setActiveItem(null);
    } else {
      setActiveItem(category);
    }
  };

  // Animation variants
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      overflow: "hidden",
    },
    visible: {
      opacity: 1,
      height: "auto",
      overflow: "visible",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <nav className="bg-white py-4 shadow-sm relative z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative w-32 h-18 flex items-center">
              <Image
                src="/images/pfc.png"
                alt="PCF Logo"
                width={200}
                height={105}
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Menu setActive={handleSetActive}>
            {navItems.map((item) => {
              // Regular nav items (except SERVICES and BLOG)
              if (item.label !== "SERVICES" && item.label !== "BLOG") {
                return (
                  <NavLink key={item.href} href={item.href}>
                    {item.label}
                  </NavLink>
                );
              }

              // Services dropdown
              if (item.label === "SERVICES") {
                return (
                  <MenuItem
                    key={item.href}
                    setActive={handleSetActive}
                    active={activeItem}
                    item={item.label}
                    label={item.label}
                    href={item.href}
                  >
                    <div className="grid grid-cols-2 gap-6 min-w-[400px] max-w-[90vw]">
                      {Object.entries(servicesByCategory).map(
                        ([category, categoryServices]) => (
                          <CategorySection key={category} title={category}>
                            {categoryServices.map((service) => (
                              <NavMenuLink
                                key={service.href}
                                href={service.href}
                              >
                                {service.label}
                              </NavMenuLink>
                            ))}
                          </CategorySection>
                        )
                      )}
                    </div>
                  </MenuItem>
                );
              }

              // Blog dropdown
              if (item.label === "BLOG") {
                return (
                  <MenuItem
                    key={item.href}
                    setActive={handleSetActive}
                    active={activeItem}
                    item={item.label}
                    label={item.label}
                    href={item.href}
                  >
                    <div className="min-w-[350px] max-w-[90vw] space-y-4">
                      <h3 className="text-sm font-bold text-secondary border-b pb-2 mb-3">
                        Recent Posts
                      </h3>
                      <div className="space-y-4">
                        {recentPosts.map((post, index) => (
                          <BlogPostItem
                            key={index}
                            title={post.title}
                            description={post.description}
                            href={post.id}
                            src={post.image}
                            date={post.date}
                          />
                        ))}
                      </div>
                      <div className="pt-2 border-t">
                        <NavMenuLink
                          href="/blog"
                          className="text-sm font-semibold text-[#d6781c]"
                        >
                          View All Posts →
                        </NavMenuLink>
                      </div>
                    </div>
                  </MenuItem>
                );
              }

              return null;
            })}
          </Menu>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-secondary focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden bg-white pt-2 pb-4 px-4 absolute w-full shadow-lg z-50 left-0 overflow-hidden"
          >
            <div className="flex flex-col space-y-3 overflow-y-auto max-h-[80vh]">
              {navItems.map((item) => {
                // For non-dropdown menu items
                if (item.label !== "SERVICES" && item.label !== "BLOG") {
                  return (
                    <NavLink
                      key={item.href}
                      href={item.href}
                      isMobile={true}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  );
                }

                // Services dropdown in mobile
                if (item.label === "SERVICES") {
                  return (
                    <div key={item.href} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Link
                          href={item.href}
                          className="text-secondary hover:text-[#d6781c] font-medium transition-colors py-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                        <button
                          onClick={() => handleMobileItemClick(item.label)}
                          className="p-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 transition-transform text-secondary ${
                              activeItem === item.label ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>

                      <AnimatePresence>
                        {activeItem === item.label && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={dropdownVariants}
                            className="pl-4 border-l-2 border-[#d6781c] mt-2 overflow-hidden"
                          >
                            {Object.entries(servicesByCategory).map(
                              ([category, categoryServices]) => (
                                <div key={category} className="space-y-2 mb-4">
                                  <h4 className="font-semibold text-secondary">
                                    {category}
                                  </h4>
                                  <div className="space-y-2 pl-2">
                                    {categoryServices.map((service) => (
                                      <Link
                                        key={service.href}
                                        href={service.href}
                                        className="text-secondary hover:text-[#d6781c] block py-1 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {service.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // Blog dropdown in mobile
                if (item.label === "BLOG") {
                  return (
                    <div key={item.href} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Link
                          href={item.href}
                          className="text-secondary hover:text-[#d6781c] font-medium transition-colors py-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                        <button
                          onClick={() => handleMobileItemClick(item.label)}
                          className="p-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 transition-transform text-secondary ${
                              activeItem === item.label ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>

                      <AnimatePresence>
                        {activeItem === item.label && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={dropdownVariants}
                            className="pl-4 border-l-2 border-[#d6781c] mt-2 overflow-hidden"
                          >
                            <h4 className="font-semibold text-secondary mb-4">
                              Recent Posts
                            </h4>
                            <div className="space-y-4">
                              {recentPosts.map((post, index) => (
                                <Link
                                  key={index}
                                  href={`/blog/${post.id}`}
                                  className="flex space-x-3 group py-1"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <div className="w-12 h-12 relative rounded-md overflow-hidden flex-shrink-0">
                                    <Image
                                      src={post.image}
                                      fill
                                      alt={post.title}
                                      className="object-cover"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="text-sm font-semibold text-secondary group-hover:text-[#d6781c] transition-colors">
                                      {post.title}
                                    </h5>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <Link
                              href="/blog"
                              className="block text-[#d6781c] font-semibold text-sm mt-4"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              View All Posts →
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
