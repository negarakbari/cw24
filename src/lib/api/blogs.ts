import { Blog, BlogQueryParams } from "@/src/types/blog";
import { api } from "../axios";


export const getBlogs = async (params: BlogQueryParams = {}): Promise<Blog[]> => {
    const { data } = await api.get<Blog[]>("/blogs", { params });
    return data;
};