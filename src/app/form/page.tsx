import Form from "@/components/Form";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Header */}
      <header className="relative z-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-blue-600 dark:text-blue-400"
              >
                <path d="M12 8V4H8" />
                <rect width="16" height="12" x="4" y="8" rx="2" />
                <path d="M2 14h2" />
                <path d="M20 14h2" />
                <path d="M15 13v2" />
                <path d="M9 13v2" />
              </svg>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500 dark:from-blue-400 dark:to-pink-400">
                AI Career Guide
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Resources
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/form"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-pink-500 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <ModeToggle />
              <button className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Blurry Blobs */}
      <div className="absolute inset-0 -z-10">
        {/* Blob 1 */}
        <div className="absolute top-10 left-20 w-72 h-72 bg-blue-400 dark:bg-blue-600/60 blur-[100px] rounded-full opacity-50"></div>
        {/* Blob 2 */}
        <div className="absolute top-40 right-16 w-96 h-96 bg-pink-400 dark:bg-pink-600/60 blur-[150px] rounded-full opacity-50"></div>
        {/* Blob 3 */}
        <div className="absolute bottom-20 right-2/4 w-80 h-80 bg-yellow-400 dark:bg-yellow-600/60 blur-[130px] rounded-full opacity-50"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Form />
      </main>
    </div>
  );
}