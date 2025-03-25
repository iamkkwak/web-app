import { getPopularContents, getTVDetailById } from "@/utils/api";
import { FaStar, FaClock, FaCalendarAlt } from "react-icons/fa";
import { GetStaticPaths, GetStaticProps } from "next";
import Button from "@/components/ui/Button";
import { ContentDetailTV } from "@/types";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";

interface TVDetailProps {
  tv: ContentDetailTV;
}

export default function TVDetail({ tv }: TVDetailProps) {
  const router = useRouter();

  // 폴백 페이지를 위한 처리
  if (router.isFallback) {
    return <div className="container-custom py-20 text-center">로딩 중...</div>;
  }

  if (!tv) {
    return (
      <div className="container-custom py-20 text-center">
        TV 프로그램을 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <div>
      {/* 영화 헤더 섹션 */}
      <div className="relative h-[500px] w-full">
        {/* <div className="absolute inset-0">
          <Image
            src={tv.backdropPath || ""}
            alt={tv.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div> */}

        <div className="container-custom relative flex h-full items-end py-12">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="h-72 w-48 shrink-0 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={tv.posterPath}
                alt={tv.title}
                width={192}
                height={288}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-4 text-white">
              <h1 className="text-4xl font-bold">{tv.title}</h1>
              {tv.originalTitle && (
                <p className="text-lg text-gray-300">{tv.originalTitle}</p>
              )}

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center">
                  <FaStar className="mr-1 text-yellow-400" />
                  <span>{tv.rating.toFixed(1)}</span>
                </div>

                <div className="flex items-center">
                  <FaClock className="mr-1 text-gray-300" />
                  <span>
                    {tv.seasons}시즌 {tv.episodes}개 에피소드
                  </span>
                </div>

                <div className="flex items-center">
                  <FaCalendarAlt className="mr-1 text-gray-300" />
                  <span>{tv.releaseDate}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tv.genres.map((genre) => (
                    <span
                      key={genre}
                      className="rounded-full bg-gray-800 px-2 py-1 text-xs"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <Button>보고싶어요</Button>
                <Button
                  variant="outline"
                  className="border-gray-700 bg-gray-800 text-white"
                >
                  평가하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 영화 정보 */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-2xl font-bold">기본 정보</h2>
            <p className="mb-8 text-gray-700">{tv.overview}</p>

            <h2 className="mb-4 text-2xl font-bold">출연/제작</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-medium">감독</h3>{" "}
                <ul className="space-y-1">
                  {tv.creators.map((creator) => (
                    <li key={creator}>{creator}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 p-6">
            <h2 className="mb-4 text-xl font-bold">왓챠 평점</h2>
            <div className="flex items-center justify-center p-4 text-center">
              <div>
                <div className="mb-2 flex items-center justify-center">
                  <FaStar className="mr-2 text-2xl text-primary" />
                  <span className="text-4xl font-bold">
                    {tv.rating.toFixed(1)}
                  </span>
                </div>
                <p className="text-gray-500">평균 별점</p>
              </div>
            </div>

            <div className="mt-4 border-t border-gray-200 pt-4">
              <h3 className="mb-3 text-lg font-bold">함께 보면 좋은 작품</h3>
              <p className="text-sm text-gray-500">준비 중입니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const popularContents = getPopularContents();
  const tvPaths = popularContents
    .filter((content) => content.type === "tv")
    .map((tv) => ({
      params: { id: tv.id.toString() },
    }));

  return {
    paths: tvPaths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id ? Number(params.id) : null;

  if (!id) {
    return {
      notFound: true,
    };
  }

  const tv = getTVDetailById(id);

  if (!tv) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      tv,
    },
    revalidate: 3600, // 1시간마다 재생성
  };
};
