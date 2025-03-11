import { Category } from "@/types";
import Link from "next/link";
import React from "react";

interface CategorySectionProps {
  categories: Category[];
  title: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  categories,
  title,
}) => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container-custom">
        <h2 className="mb-6 text-2xl font-bold">{title}</h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="rounded-lg bg-white p-4 text-center shadow transition duration-200 hover:shadow-md"
            >
              <span className="font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
