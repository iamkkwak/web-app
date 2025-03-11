"use client";

import Navigation from "@/components/common/Navigation";
import SearchBar from "@/components/common/SearchBar";
import { FaUserCircle, FaBars } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-primary text-2xl font-bold">왓챠피디아</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-4 md:flex">
            <Navigation />
          </div>

          {/* Search Bar */}
          <div className="mx-4 hidden max-w-md flex-1 md:flex">
            <SearchBar />
          </div>

          {/* User Profile */}
          <div className="flex items-center">
            <button className="rounded-full p-2 hover:bg-gray-100">
              <FaUserCircle className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full p-2 hover:bg-gray-100"
            >
              <FaBars className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-white p-4 shadow-lg md:hidden">
            <div className="mb-4">
              <SearchBar />
            </div>
            <Navigation isMobile />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
