import { useRouter } from "next/compat/router";
import Button from "@/components/ui/Button";
import { Content } from "@/types";
import Image from "next/image";
import React from "react";

interface FeaturedSectionProps {
  content: Content;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ content }) => {
  const router = useRouter();
  const { id, title, backdropPath, overview, type } = content;

  if (!router) {
    return null;
  }

  return (
    <div className="relative h-96 w-full overflow-hidden md:h-[500px]">
      <div className="absolute inset-0">
        <Image
          src={backdropPath || ""}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>

      <div className="container-custom relative flex h-full items-center">
        <div className="max-w-xl space-y-4 text-white">
          <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="line-clamp-3 text-lg">{overview}</p>
          <div className="pt-4">
            <Button onClick={() => router.push(`/${type}/${id}`)} size="lg">
              자세히 보기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
