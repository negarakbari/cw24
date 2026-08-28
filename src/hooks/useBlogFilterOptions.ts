import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../lib/api/blogs";


export const useBlogFilterOptions = () => {
  return useQuery({
    queryKey: ["blogs", "filter-options"],
    queryFn: () => getBlogs(),
    staleTime: 5 * 60 * 1000, 
    select: (blogs) => ({
      categories: Array.from(new Set(blogs.map((b) => b.category))),
      authors: Array.from(new Set(blogs.map((b) => b.author))),
    }),
  });
};