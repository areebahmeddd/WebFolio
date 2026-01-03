"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="relative z-50">
      <div className="flex w-full items-center justify-between pb-10 md:pt-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-widest text-gray-400 hover:text-custom-blue"
        >
          AREEB AHMED
        </Link>
        <nav className="hidden space-x-8 text-lg text-gray-400 md:flex">
          <Link href="/about" className="hover:text-custom-blue">
            About
          </Link>
          <Link href="/blogs" className="hover:text-custom-blue">
            Blogs
          </Link>
          <Link href="/projects" className="hover:text-custom-blue">
            Projects
          </Link>
        </nav>
        <button
          className="z-50 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center space-y-8 p-4 text-2xl">
          <Link
            href="/about"
            className="w-full text-center text-gray-300 hover:text-custom-blue"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/blogs"
            className="w-full text-center text-gray-300 hover:text-custom-blue"
            onClick={toggleMenu}
          >
            Blogs
          </Link>
          <Link
            href="/projects"
            className="w-full text-center text-gray-300 hover:text-custom-blue"
            onClick={toggleMenu}
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
