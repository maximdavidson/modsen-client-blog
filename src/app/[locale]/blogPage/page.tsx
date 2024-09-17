import { Category } from '@/components/Category';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { JoinUs } from '@/components/JoinUs';
import { AllPosts } from './components/AllPosts';
import { PostHead } from './components/PostHead';

const BlogPage = () => {
  return (
    <>
      <ErrorBoundary>
        <PostHead />
        <AllPosts />
        <Category />
        <JoinUs />
      </ErrorBoundary>
    </>
  );
};

export default BlogPage;
