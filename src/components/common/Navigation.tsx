"use client";

import { useRouter } from "next/compat/router";
import Link from "next/link";
import React from "react";

interface NavigationProps {
  isMobile?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isMobile = false }) => {
  const router = useRouter();

  const links = [
    { name: "영화", href: "/movies" },
    { name: "TV 프로그램", href: "/tv" },
    { name: "책", href: "/books" },
    { name: "웹툰", href: "/webtoons" },
  ];

  if (!router) {
    return null;
  }

  return (
    <nav
      className={`${isMobile ? "flex flex-col space-y-2" : "flex items-center space-x-1"}`}
    >
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`nav-link ${
            router.pathname.startsWith(link.href)
              ? "text-primary font-bold"
              : ""
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
