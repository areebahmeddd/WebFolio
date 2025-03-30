import React from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-8 md:mt-20">
      <div className="flex items-center justify-between">
        <div className={'text-gray-400'}>© Areeb Ahmed</div>
        <div className="flex space-x-4">
          <Link
            href="https://instagram.com/areebahmeddd"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5 text-gray-400 hover:text-white" />
          </Link>
          <Link href="https://twitter.com/areebahmeddd" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-gray-400 hover:text-white" />
          </Link>
          <Link
            href="https://linkedin.com/in/areebahmeddd"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
          </Link>
          <Link href="https://github.com/areebahmeddd" aria-label="GitHub">
            <Github className="h-5 w-5 text-gray-400 hover:text-white" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
