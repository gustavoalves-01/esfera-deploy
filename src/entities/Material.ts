export interface MaterialPreviewInterface {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  categories: Array<string>;
  tags: Array<string>;
  imageURL: string;
  highlight?: boolean;
}
