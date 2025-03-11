import ContentCard from "@/components/home/ContentCard";
import React, { useState } from "react";
import { Content } from "@/types";

interface PopularContentProps {
  title: string;
  contents: Content[];
}

const PopularContent: React.FC<PopularContentProps> = ({ title, contents }) => {
  const [activeTab, setActiveTab] = useState<"movie" | "tv">("movie");

  const filteredContents = contents.filter(
    (content) => content.type === activeTab,
  );

  return (
    <section className="py-8">
      <div className="container-custom">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="flex space-x-2">
              <button
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  activeTab === "movie"
                    ? "bg-primary text-white"
                    : "bg-gray-light text-gray-600"
                }`}
                onClick={() => setActiveTab("movie")}
              >
                영화
              </button>
              <button
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  activeTab === "tv"
                    ? "bg-primary text-white"
                    : "bg-gray-light text-gray-600"
                }`}
                onClick={() => setActiveTab("tv")}
              >
                TV 프로그램
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {filteredContents.map((content) => (
              <ContentCard key={content.id} content={content} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularContent;
