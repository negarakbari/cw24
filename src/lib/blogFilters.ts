import { BlogFilters, BlogQueryParams } from "../types/blog";

export const SORT_OPTIONS: { value: BlogFilters["sortBy"]; label: string }[] = [
  { value: "views_desc", label: "بیشترین بازدید" },
  { value: "views_asc", label: "کمترین بازدید" },
  { value: "date_desc", label: "جدیدترین" },
  { value: "date_asc", label: "قدیمی‌ترین" },
];

export const DEFAULT_BLOG_FILTERS: BlogFilters = {
  search: "",
  category: "",
  author: "",
  sortBy: "views_desc",
};

export const toBlogQueryParams = (filters: BlogFilters): BlogQueryParams => {
  const [field, order] = filters.sortBy.split("_") as ["views" | "date", "asc" | "desc"];

  return {
    ...(filters.search.trim() && { q: filters.search.trim() }),
    ...(filters.category && { category: filters.category }),
    ...(filters.author && { author: filters.author }),
    _sort: field,
    _order: order,
  };
};