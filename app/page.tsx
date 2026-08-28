"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import { BlogFilters } from "@/src/types/blog";
import { useDebouncedValue } from "@/src/hooks/useDebouncedValue";
import { DEFAULT_BLOG_FILTERS, toBlogQueryParams } from "@/src/lib/blogFilters";
import { useBlogs } from "@/src/hooks/useBlogs";
import { useBlogFilterOptions } from "@/src/hooks/useBlogFilterOptions";
import SearchFilterBar from "@/src/components/SearchFilterBar";


export default function Home() {
  const [filters, setFilters] = useState<BlogFilters>(DEFAULT_BLOG_FILTERS);
  const debouncedSearch = useDebouncedValue(filters.search, 400);

  const queryParams = toBlogQueryParams({ ...filters, search: debouncedSearch });
  const { data: blogs, isLoading, isError } = useBlogs(queryParams);
  const { data: filterOptions } = useBlogFilterOptions();

  const handleFilterChange = <K extends keyof BlogFilters>(key: K, value: BlogFilters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <SearchFilterBar
        filters={filters}
        categories={filterOptions?.categories ?? []}
        authors={filterOptions?.authors ?? []}
        onChange={handleFilterChange}
      />

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading && <p className="text-gray-500">در حال بارگذاری...</p>}
        {isError && <p className="text-red-500">خطا در دریافت اطلاعات</p>}
        {!isLoading && blogs?.length === 0 && (
          <p className="text-gray-500">مقاله‌ای پیدا نشد.</p>
        )}

        {blogs?.map((blog) => (
          <article key={blog.id} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="relative h-40 w-full">
              <Image src={blog.image} alt={blog.title} fill className="object-cover" unoptimized />
            </div>
            <div className="p-4">
              <span className="text-xs text-purple-700">{blog.category}</span>
              <h3 className="mt-1 line-clamp-2 font-bold">{blog.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-gray-500">{blog.description}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                <span>{blog.author}</span>
                <span className="flex items-center gap-1">
                  <Eye className="h-3 w-3" /> {blog.views}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}