"use client";

import { useRouter } from "next/compat/router";
import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  if (!router) {
    return null;
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="작품, 인물, 컬렉션, 유저를 검색해보세요."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-light focus:ring-primary w-full rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2"
        />
        <div className="absolute left-3 top-2.5">
          <FaSearch className="text-gray-400" />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
