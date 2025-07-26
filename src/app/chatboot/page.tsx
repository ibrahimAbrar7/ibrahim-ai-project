'use client';

import { ModeToggle } from '@/components/ModeToggle';
import Link from 'next/link';
import { useState, useRef } from 'react';

export default function CareerFormChatbot() {
    const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    education: '',
    interests: '',
    question: '',
  });
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);
  const replyRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.question.trim()) {
      alert('Please enter your question');
      return;
    }

    setLoading(true);
    setReply('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      setReply(data.reply || 'No response');

      // Scroll to the reply div after the reply is set
      setTimeout(() => {
        replyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch {
      setReply('Sorry, something went wrong.');

      setTimeout(() => {
        replyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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

    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Career Guidance Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="education">Education</label>
          <input
            id="education"
            name="education"
            type="text"
            value={formData.education}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="E.g. 12th grade, BSc Computer Science"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="interests">Interests</label>
          <input
            id="interests"
            name="interests"
            type="text"
            value={formData.interests}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="E.g. programming, design, marketing"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="question">Your Career Question</label>
          <textarea
            id="question"
            name="question"
            value={formData.question}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Ask your career-related question here"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Thinking...' : 'Get Advice'}
        </button>
      </form>

      {reply && (
        <div
          ref={replyRef}
          className="mt-6 p-4 rounded whitespace-pre-line"
        >
          <h2 className="font-semibold mb-2">Career Advice:</h2>
          <p>{reply}</p>
        </div>
      )}
    </div>
    </>
  );
}
