'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center"
        aria-label="Open menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black p-6">
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center space-y-8 text-2xl">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300"
            >
              About
            </Link>
            <Link
              href="/blogs"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300"
            >
              Blogs
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300"
            >
              Projects
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
