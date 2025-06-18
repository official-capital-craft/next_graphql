"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "@/graphql/queries";
import { useRouter } from "next/navigation";

export default function CategoryList() {
  const router = useRouter();
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const categories = data?.categories ?? [];

  const handleCategoryClick = (category: string) => {
    router.push(`/category/${category.toLowerCase()}`);
  };

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((cat: any) => (
        <div
          key={cat.id}
          onClick={() => handleCategoryClick(cat.category)}
          className="cursor-pointer p-4 rounded-lg border hover:bg-blue-50 transition"
        >
          <h3 className="text-lg font-semibold text-gray-800">{cat.category}</h3>
        </div>
      ))}
    </div>
  );
}
