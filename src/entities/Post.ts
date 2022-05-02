export interface FullPostInterface {
  id: string;
  title: string;
  author: string;
  categories: Array<string>;
  content: string;
  createdAt: string;
  timeToRead: number;
  imageURL: string;
  slug: string;
}

export interface ReducedPostInterface {
  id: string;
  title: string;
  excerpt: string;
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
  highlight?: boolean;
}

export interface PostShortcutsInterface {
  name: string;
  slug?: string;
}
export interface SidebarLinks {
  id: string;
  title: { rendered: string };
  slug: string;
}

export interface TimeToReadInterface {
  id: string;
  time: number;
}

export interface RawPostPreview {
  id: string;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  categories: Array<number>;
  tags: Array<number>;
  yoast_head_json: {
    og_image: [
      {
        url: string;
      }
    ];
  };
}

export interface RawPost {
  id: string;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  slug: string;
  categories: Array<number>;
  tags: Array<number>;
  yoast_head_json: {
    og_image: [
      {
        url: string;
      }
    ];
  };
}
