import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../lib/api/blogs";
import { NamedEntity } from "../types/blog";

export const useBlogFilterOptions = () => {
  return useQuery({
    queryKey: ["blogs", "filter-options"],
    queryFn: () => getBlogs(),
    staleTime: 5 * 60 * 1000,
    select: (blogs) => {
      const categoryMap = new Map<string, NamedEntity>(blogs.map((b) => [b.category.id, b.category]));
      const authorMap = new Map<string, NamedEntity>(blogs.map((b) => [b.author.id, b.author]));

      return {
        categories: Array.from(categoryMap.values()),
        authors: Array.from(authorMap.values()),
      };
    },
  });
};