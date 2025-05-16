"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import pfcLogo from "@/public/images/pfc.png";
import googleLogo from "@/public/images/google-logo.svg";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [emailValidationVisible, setEmailValidationVisible] = useState(false);
  const [passwordValidationVisible, setPasswordValidationVisible] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    if (email.length > 0) {
      setEmailValidationVisible(true);
      const timer = setTimeout(() => {
        setEmailValidationVisible(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [email]);

  useEffect(() => {
    if (password.length > 0) {
      setPasswordValidationVisible(true);
      const timer = setTimeout(() => {
        setPasswordValidationVisible(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [password]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email || !password) {
      setError("Please fill in all fields");
      setTimeout(()=>{
        setError("")
      },5000);
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format");
      setTimeout(()=>{
        setError("")
      },5000);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Login error:", error.message);
        if (error.message.includes("Invalid login credentials")) {
          setError("Invalid email or password");
          setTimeout(()=>{
            setError("")
          },5000);
        } else {
          setError(`Login error: ${error.message}`);
          setTimeout(()=>{
            setError("")
          },5000);
        }
      } else {
        console.log("Login successful");
        router.push("/admin/dashboard");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("An unexpected error occurred");
      setTimeout(()=>{
        setError("")
      },5000);
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setMessage("")

    if(!validateEmail(email)){
      setError("Invalid email format")
      setTimeout(()=>{
        setError("")
      },5000);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({ 
        email, 
        password,
        options: {
          data:{
            name:name,
          },
        },
      });

      if (error) {
        if (error.message.toLowerCase().includes('already registered') || 
            error.message.toLowerCase().includes('already exists') ||
            error.message.toLowerCase().includes('already in use')) {
          setError("This email is already in use")
          setTimeout(()=>{
            setError("")
          },5000);
        } else {
          console.error("Signup error:", error.message)
          setError(`Error: ${error.message}`)
          setTimeout(()=>{
            setError("")
          },5000);
        }
      } else if (data?.user?.identities?.length === 0) {
        setError("This email is already in use")
      } else {
        console.log("User registered:", data)
        setMessage("Registration successful! Please check your email to confirm your account.")
        setName("")
        setEmail("")
        setPassword("")
        setTimeout(()=>{
          setMessage("")
        },5000);
      }
    } catch (err) {
      console.error("Unexpected error:", err)
      setError("An unexpected error occurred. Please try again.")
      setTimeout(()=>{
        setError("")
      },5000);
    } 
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xl">
        <div className="p-10 min-h-[55vh]">
          <div className="flex justify-center mb-8">
            <Image src={pfcLogo} alt="PCF Logo" width={110} height={55} />
          </div>
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#d6781c] font-semibold text-base hover:text-[#c66812] transition-colors"
            >
              {isLogin ? "Switch to Sign Up" : "Switch to Login"}
            </button>
          </div>
          <div className="relative h-[450px] overflow-hidden">
            <div
              className={`absolute inset-0 transition-transform duration-500 transform ${isLogin
                ? "translate-x-0 opacity-100 pointer-events-auto"
                : "translate-x-full opacity-0 pointer-events-none"
                } flex flex-col justify-center items-center`}
            >
              <h2 className="text-2xl font-bold mb-6">Login</h2>
              <form className="space-y-5 w-full max-w-sm" onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#d6781c] text-white py-2.5 text-base rounded-md hover:bg-[#c66812] transition-colors"
                >
                  {isLogin ? "Login" : "Sign Up"}
                </button>
                {message && (
                  <p className="text-green-600 text-sm mt-2 bg-green-50 px-3 py-1.5 rounded-md">{message}</p>
                )}
                {error && (
                  <p className="text-red-600 text-sm mt-2 bg-red-50 px-3 py-1.5 rounded-md">{error}</p>
                )}
              </form>
              <div className="flex justify-center mt-5">
                <button className="flex items-center space-x-2 border px-5 py-2.5 rounded-md hover:bg-gray-100 transition-colors">
                  <Image
                    src={googleLogo}
                    alt="Google Logo"
                    width={20}
                    height={20}
                  />
                  <span className="text-base">Login with Google</span>
                </button>
              </div>
            </div>
            <div
              className={`absolute inset-0 transition-transform duration-500 transform ${isLogin
                ? "-translate-x-full opacity-0 pointer-events-none"
                : "translate-x-0 opacity-100 pointer-events-auto"
                } flex flex-col justify-center items-center`}
            >
              <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
              <form className="space-y-5 w-full max-w-sm" onSubmit={handleSignup}>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c]"
                />
                {emailValidationVisible && (
                  <div className="mt-2 flex items-center gap-2 animate-fade-in">
                    {validateEmail(email) ? (
                      <span className="text-green-600 text-sm bg-green-50 px-3 py-1.5 rounded-md transition-all duration-300">
                        ✅ Valid email
                      </span>
                    ) : (
                      <span className="text-red-600 text-sm bg-red-50 px-3 py-1.5 rounded-md transition-all duration-300">
                        ❌ Invalid email format
                      </span>
                    )}
                  </div>
                )}

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d6781c]"
                />
                {passwordValidationVisible && (
                  <div className="mt-2 space-y-2 text-sm animate-fade-in">
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md transition-all duration-300">
                      {/[A-Z]/.test(password) ? "✅" : "❌"} One uppercase letter
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md transition-all duration-300">
                      {/[a-z]/.test(password) ? "✅" : "❌"} One lowercase letter
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md transition-all duration-300">
                      {/[0-9]/.test(password) ? "✅" : "❌"} One number
                    </div>
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-[#d6781c] text-white py-2.5 text-base rounded-md hover:bg-[#c66812] transition-colors"
                >
                  {isLogin ? "Login" : "Sign Up"}
                </button>
                {message && (
                  <p className="text-green-600 text-sm mt-2 bg-green-50 px-3 py-1.5 rounded-md">{message}</p>
                )}
                {error && (
                  <p className="text-red-600 text-sm mt-2 bg-red-50 px-3 py-1.5 rounded-md">{error}</p>
                )}
              </form>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Link href="/" className="text-[#d6781c] font-semibold text-base hover:text-[#c66812] transition-colors">
              Back to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}