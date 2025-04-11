import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 text-center">
      <div className="mb-8 w-full max-w-lg">
        <Image
          src="/404.svg"
          alt="404 Not Found Illustration"
          width={800}
          height={530}
          priority
          className="w-full h-auto"
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Page Not Found
      </h1>

      <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-[#d6781c] text-white font-medium rounded-lg hover:bg-[#b86615] transition-colors duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
}
