import { Post, authors } from '@/data/authors';

export const getPostsByCategoryAndTag = (
  category: string,
  tag?: string,
): Post[] => {
  return authors
    .flatMap((author) => author.posts)
    .filter(
      (post) =>
        post.category.toLowerCase() === category.toLowerCase() &&
        (!tag ||
          (post.tags &&
            post.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))),
    );
};
