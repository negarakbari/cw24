export interface NamedEntity {
  id: string;
  name: string;
}

export interface Blog {
  id: string;
  title: string;
  description: string;
  image: string;
  category: NamedEntity;
  author: NamedEntity;
  date: string;
  views: number;
  content: string;
}

export interface BlogQueryParams {
  q?: string;
  "category.id"?: string;
  "author.id"?: string;
  _sort?: "views" | "date";
  _order?: "asc" | "desc";
  _page?: number;
  _limit?: number;
}

export type SortOption = "views_desc" | "views_asc" | "date_desc" | "date_asc";

export interface BlogFilters {
  search: string;
  categoryId: string;
  authorId: string;  
  sortBy: SortOption;
}