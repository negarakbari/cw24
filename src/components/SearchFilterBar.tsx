"use client";

import { Search, ChevronDown } from "lucide-react";
import { BlogFilters, NamedEntity, SortOption } from "../types/blog";
import { SORT_OPTIONS } from "../lib/blogFilters";


interface SearchFilterBarProps {
  filters: BlogFilters;
  categories: NamedEntity[];
  authors: NamedEntity[];
  onChange: <K extends keyof BlogFilters>(key: K, value: BlogFilters[K]) => void;
}

const SearchFilterBar = ({ filters, categories, authors, onChange }: SearchFilterBarProps) => {
  return (
    <div className="w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="relative mb-4">
        <Search className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={filters.search}
          onChange={(e) => onChange("search", e.target.value)}
          placeholder="جستجو در عنوان یا مقاله با..."
          className="w-full rounded-full border border-gray-200 bg-white py-3 pr-11 pl-4 text-sm outline-none placeholder:text-gray-400 focus:border-purple-400"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="border-l border-gray-200 pl-3 text-sm text-gray-500 whitespace-nowrap">
          مرتب‌سازی:
        </span>

        <FilterSelect
          value={filters.sortBy}
          onChange={(value) => onChange("sortBy", value as SortOption)}
          options={SORT_OPTIONS}
        />

        <FilterSelect
          value={filters.authorId}
          onChange={(value) => onChange("authorId", value)}
          options={[{ value: "", label: "نویسنده" }, ...authors.map((a) => ({ value: a.id, label: a.name.trim() }))]}
        />

        <FilterSelect
          value={filters.categoryId}
          onChange={(value) => onChange("categoryId", value)}
          options={[{ value: "", label: "دسته‌بندی" }, ...categories.map((c) => ({ value: c.id, label: c.name.trim() }))]}
        />
      </div>
    </div>
  );
};

interface FilterSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}

const FilterSelect = ({ value, onChange, options }: FilterSelectProps) => {
  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-full border border-gray-200 bg-white py-2 pr-4 pl-8 text-sm outline-none focus:border-purple-400"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default SearchFilterBar;