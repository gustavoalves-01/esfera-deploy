export interface FullPostInterface {
  id: string;
  title: string;
  author: string;
  categories: string;
  content: string;
  createdAt: string;
  timeToRead: number;
  imageURL: string;
}
export interface PostPreviewInterface {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  categories: Array<string>;
  tags: Array<string>;
  imageURL: string;
  timeToRead: number;
}
export interface SidebarLinks {
  id: string;
  title: string;
  slug: string;
}

export interface TimeToReadInterface {
  id: string;
  time: number;
}
