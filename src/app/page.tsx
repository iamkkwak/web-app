"use client";

import {
  getFeaturedContent,
  getPopularContents,
  getCategories,
} from "@/utils/api";
import FeaturedSection from "@/components/home/FeaturedSection";
import CategorySection from "@/components/home/CategorySection";
import PopularContent from "@/components/home/PopularContent";
import { Content, Category } from "@/types";
import React from "react";

interface HomeProps {
  featuredContent: Content;
  popularContents: Content[];
  categories: Category[];
}

export default function Home({}: HomeProps) {
  const featuredContent = getFeaturedContent();
  const popularContents = getPopularContents();
  const categories = getCategories();

  return (
    <div>
      <FeaturedSection content={featuredContent} />
      <div className="mt-8">
        <PopularContent title="인기 콘텐츠" contents={popularContents} />
      </div>
      <CategorySection title="카테고리" categories={categories} />
      <PopularContent
        title="최신 업데이트"
        contents={popularContents.slice().reverse()}
      />
    </div>
  );
}
