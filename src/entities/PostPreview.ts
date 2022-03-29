export default interface PostPreviewInterface {
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

export interface TimeToReadInterface {
  id: string;
  time: number;
}
