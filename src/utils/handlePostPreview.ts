import { CategoryInterface } from "../entities/Category";
import { PostPreviewInterface, RawPostPreview } from "../entities/Post";
import handleCategory from "./handleCategories";

const handleFetchedPosts = (data: any, categories: CategoryInterface[]) => {
  const postList: PostPreviewInterface[] = data.map(
    (post: RawPostPreview) => {
      const excerptRegex = /<p>|<\/p>|(\[\&)(.*)(\;\])/g;
      const excerpt = post.excerpt.rendered.replace(excerptRegex, '');

      return {
        id: post.id,
        date: new Date(post.date).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }),
        title: post.title.rendered,
        excerpt: excerpt,
        slug: post.slug,
        categories: post.categories.map((item: number) => {
          return handleCategory(item, categories);
        }),
        tags: String(post.tags),
        imageURL: post.yoast_head_json.og_image[0].url,
        highlight: String(post.tags).includes('3'),
      };
    }
  );

  return postList;
};

export default handleFetchedPosts;