'use client';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { JoinUs } from '@/components/JoinUs';
import { AboutHeader } from './components/AboutHeader';
import { ListAuthor } from './components/ListAuthors';

const AuthorPage = () => {
  return (
    <>
      <ErrorBoundary>
        <AboutHeader />
        <ListAuthor />
        <JoinUs />
      </ErrorBoundary>
    </>
  );
};

export default AuthorPage;
