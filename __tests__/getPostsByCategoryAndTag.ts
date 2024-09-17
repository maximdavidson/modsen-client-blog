import { getPostsByCategoryAndTag } from '@/utils/getPostsByCategoryAndTag';
import { authors } from '@/data/authors';

describe('getPostsByCategoryAndTag', () => {
  it('should return posts by category', () => {
    const category = 'technology';
    const result = getPostsByCategoryAndTag(category);
    const expected = authors
      .flatMap((author) => author.posts)
      .filter((post) => post.category.toLowerCase() === category.toLowerCase());

    expect(result).toEqual(expected);
  });

  it('should return posts by category and tag', () => {
    const category = 'technology';
    const tag = 'life';
    const result = getPostsByCategoryAndTag(category, tag);
    const expected = authors
      .flatMap((author) => author.posts)
      .filter(
        (post) =>
          post.category.toLowerCase() === category.toLowerCase() &&
          post.tags &&
          post.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
      );

    expect(result).toEqual(expected);
  });

  it('should return an empty array if no post match the category', () => {
    const category = 'nonexistent';
    const result = getPostsByCategoryAndTag(category);
    expect(result).toEqual([]);
  });
});
