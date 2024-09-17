'use client';

import { useParams } from 'next/navigation';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { authors } from '@/data/authors';
import { AuthorInfo } from '../components/AuthorInfo';
import { AuthorPosts } from '../components/AuthorPosts';

const AuthorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const author = authors.find((author) => author.id === id);

  if (!author) {
    return <p>Author not found</p>;
  }

  return (
    <>
      <ErrorBoundary>
        <AuthorInfo author={author} />
        <AuthorPosts posts={author.posts} />
      </ErrorBoundary>
    </>
  );
};

export default AuthorPage;
