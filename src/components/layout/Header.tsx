import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-red-600">
              WatchaClone
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            <Link
              href="/movies"
              className="text-gray-700 transition hover:text-red-600"
            >
              영화
            </Link>
            <Link
              href="/tv"
              className="text-gray-700 transition hover:text-red-600"
            >
              TV 프로그램
            </Link>
            <Link
              href="/books"
              className="text-gray-700 transition hover:text-red-600"
            >
              책
            </Link>
            <Link
              href="/webtoons"
              className="text-gray-700 transition hover:text-red-600"
            >
              웹툰
            </Link>
          </nav>

          {/* Search and User Actions */}
          <div className="hidden items-center space-x-4 md:flex">
            <div className="relative">
              <input
                type="text"
                placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
                className="w-64 rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="rounded-md bg-red-600 px-4 py-2 text-white transition hover:bg-red-700">
              로그인
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-red-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="space-y-1 px-2 pb-4 pt-2">
              <Link
                href="/movies"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600"
              >
                영화
              </Link>
              <Link
                href="/tv"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600"
              >
                TV 프로그램
              </Link>
              <Link
                href="/books"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600"
              >
                책
              </Link>
              <Link
                href="/webtoons"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600"
              >
                웹툰
              </Link>
            </div>
            <div className="border-t border-gray-200 pb-2 pt-4">
              <div className="px-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="검색"
                    className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="mt-4 px-4">
                <button className="w-full rounded-md bg-red-600 px-4 py-2 text-white transition hover:bg-red-700">
                  로그인
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
