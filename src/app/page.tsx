"use client";

import { useState } from "react";
import AICareerChat from "@/components/AICareerChat";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Header */}
      <header className="relative z-50">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
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

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Features</Link>
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Resources</Link>
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">About</Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-pink-500 rounded-lg hover:opacity-90 transition-opacity">Get Started</Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              <ModeToggle />
              <button
                className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMenuOpen(!menuOpen)}
              >
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
                  {menuOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Content */}
          {menuOpen && (
  <div
  className={`absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md z-30 px-6 py-4 space-y-4 transition-all duration-300 ease-in-out transform ${
    menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
  }`}
>
  <Link href="#" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Features</Link>
  <Link href="#" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Resources</Link>
  <Link href="#" className="block text-sm font-medium text-gray-700 dark:text-gray-300">About</Link>
  <a
    href="#"
    className="block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-pink-500 rounded-lg hover:opacity-90 transition-opacity"
  >
    Get Started
  </a>
</div>

          )}
        </div>
      </header>

      {/* Blurry Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-72 h-72 bg-blue-400 dark:bg-blue-600/60 blur-[100px] rounded-full opacity-50"></div>
        <div className="absolute top-40 right-16 w-96 h-96 bg-pink-400 dark:bg-pink-600/60 blur-[150px] rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-2/4 w-80 h-80 bg-yellow-400 dark:bg-yellow-600/60 blur-[130px] rounded-full opacity-50"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <AICareerChat />
      </main>
    </div>
  );
}
