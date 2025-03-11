import { FaStar } from "react-icons/fa";
import { Content } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ContentCardProps {
  content: Content;
  size?: "sm" | "md" | "lg";
}

const ContentCard: React.FC<ContentCardProps> = ({ content, size = "md" }) => {
  const { id, title, posterPath, rating, type } = content;

  const sizeClasses = {
    sm: "w-32",
    md: "w-40",
    lg: "w-48",
  };

  const imageSizes = {
    sm: { width: 128, height: 192 },
    md: { width: 160, height: 240 },
    lg: { width: 192, height: 288 },
  };

  return (
    <div className={`${sizeClasses[size]} card-hover`}>
      <Link href={`/${type}/${id}`}>
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={posterPath}
            alt={title}
            width={imageSizes[size].width}
            height={imageSizes[size].height}
            className="w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
            <div className="flex items-center text-white">
              <FaStar className="mr-1 text-yellow-400" />
              <span className="text-sm">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h3 className="truncate font-medium text-gray-900">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ContentCard;
