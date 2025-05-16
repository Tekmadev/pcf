"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import pfcLogo from "@/public/images/pfc.png";
import googleLogo from "@/public/images/google-logo.svg";

export default function AdminPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-lg">
        <div className="p-8 min-h-[42vh]">
          <div className="flex justify-center mb-8">
            <Image src={pfcLogo} alt="PCF Logo" width={100} height={50} />
          </div>
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#d6781c] font-semibold"
            >
              {isLogin ? "Switch to Sign Up" : "Switch to Login"}
            </button>
          </div>
          <div className="relative h-70 overflow-hidden">
            <div
              className={`absolute inset-0 transition-transform duration-500 transform ${
                isLogin
                  ? "translate-x-0 opacity-100 pointer-events-auto"
                  : "translate-x-full opacity-0 pointer-events-none"
              } flex flex-col justify-center items-center`}
            >
              <h2 className="text-2xl font-bold mb-4">Login</h2>
              <form className="space-y-4 w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#d6781c] text-white py-2 rounded-md hover:bg-[#c66812] transition-colors"
                >
                  Login
                </button>
              </form>
              <div className="flex justify-center mt-4">
                <button className="flex items-center space-x-2 border px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  <Image
                    src={googleLogo}
                    alt="Google Logo"
                    width={20}
                    height={20}
                  />
                  <span>Login with Google</span>
                </button>
              </div>
            </div>
            <div
              className={`absolute inset-0 transition-transform duration-500 transform ${
                isLogin
                  ? "-translate-x-full opacity-0 pointer-events-none"
                  : "translate-x-0 opacity-100 pointer-events-auto"
              } flex flex-col justify-center items-center`}
            >
              <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
              <form className="space-y-4 w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#d6781c] text-white py-2 rounded-md hover:bg-[#c66812] transition-colors"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Link href="/" className="text-[#d6781c] font-semibold">
              Back to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}