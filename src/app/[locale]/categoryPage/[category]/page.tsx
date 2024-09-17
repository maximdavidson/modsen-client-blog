'use client';
import { useState, useEffect } from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { categories } from '@/constants/categories';
import { tags } from '@/constants/tags';
import { Post } from '@/data/authors';
import { getPostsByCategoryAndTag } from '@/utils/getPostsByCategoryAndTag';
import { CategoryHeader } from '../components/categoryHeader';
import { CategorySearch } from '../components/CategorySearch';
import { MainOfCategory } from '../components/MainInCategory';
import style from '../page.module.scss';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const { category } = params;
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    const fetchedPosts = getPostsByCategoryAndTag(
      category,
      selectedTag || undefined,
    );
    setPosts(fetchedPosts.length > 0 ? fetchedPosts : []);
  }, [category, selectedTag]);

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
  };

  const handleCategorySelect = (selectedCategory: string) => {
    setSelectedTag(null);
  };

  return (
    <>
      <ErrorBoundary>
        <CategoryHeader category={category} />
        <div className={style.flex_container}>
          <MainOfCategory posts={posts} />
          <CategorySearch
            categories={categories}
            tags={tags}
            onCategorySelect={handleCategorySelect}
            onTagSelect={handleTagSelect}
          />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default CategoryPage;
