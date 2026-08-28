export interface Blog {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  author: string;
  date: string;
  views: number;
  content: string;
}

export interface BlogQueryParams {
  q?: string;
  category?: string;
  author?: string;
  _sort?: "views" | "date";
  _order?: "asc" | "desc";
  _page?: number;
  _limit?: number;
}

export type SortOption = "views_desc" | "views_asc" | "date_desc" | "date_asc";

export interface BlogFilters {
  search: string;
  category: string;
  author: string; 
  sortBy: SortOption;
}