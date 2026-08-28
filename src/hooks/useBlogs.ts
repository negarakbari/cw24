import { useQuery } from "@tanstack/react-query";
import { BlogQueryParams } from "../types/blog";
import { getBlogs } from "../lib/api/blogs";


export const useBlogs = (params: BlogQueryParams) => {
  return useQuery({
    queryKey: ["blogs", params],
    queryFn: () => getBlogs(params),
  });
};