'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white shadow-sm">
      {/* Images above header */}
      <div className="bg-blue-50 p-4">
        <div className="max-w-7xl mx-auto">
          {/* Placeholder for images - we'll add actual images later */}
          <div className="h-20 bg-gray-200 rounded flex items-center justify-center text-gray-600">
            M4G Header Images (To be added)
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              
              {/* Home */}
              <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>

              {/* Journeys Series Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('journeys')}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  Journeys Series
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'journeys' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link href="/journeys/episode-1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Episode 1</Link>
                    <Link href="/journeys/episode-2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Episode 2</Link>
                    {/* Add more episodes as needed */}
                  </div>
                )}
              </div>

              {/* Under the Surface Series Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('surface')}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  Under the Surface Series
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'surface' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link href="/surface/episode-1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Episode 1</Link>
                    <Link href="/surface/episode-2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Episode 2</Link>
                    {/* Add more episodes as needed */}
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('resources')}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  Resources
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'resources' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link href="/resources/guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Guides</Link>
                    <Link href="/resources/tools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tools</Link>
                    <Link href="/resources/links" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Links</Link>
                  </div>
                )}
              </div>

              {/* About & Scheduling */}
              <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                About & Scheduling
              </Link>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}