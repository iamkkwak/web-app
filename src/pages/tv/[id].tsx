import {
  getFeaturedContent,
  getPopularContents,
  getCategories,
} from "@/utils/api";
import FeaturedSection from "@/components/home/FeaturedSection";
import CategorySection from "@/components/home/CategorySection";
import PopularContent from "@/components/home/PopularContent";
import { Content, Category } from "@/types";
import { GetStaticProps } from "next";
import React from "react";

interface HomeProps {
  featuredContent: Content;
  popularContents: Content[];
  categories: Category[];
}

export default function Home({
  featuredContent,
  popularContents,
  categories,
}: HomeProps) {
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

export const getStaticProps: GetStaticProps = async () => {
  // 실제 프로젝트에서는 API 호출을 통해 데이터를 가져옵니다
  const featuredContent = getFeaturedContent();
  const popularContents = getPopularContents();
  const categories = getCategories();

  return {
    props: {
      featuredContent,
      popularContents,
      categories,
    },
    // ISR (Incremental Static Regeneration)을 위한 revalidate 설정
    revalidate: 3600, // 1시간마다 재생성
  };
};
