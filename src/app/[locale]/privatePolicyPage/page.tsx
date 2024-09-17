import { ErrorBoundary } from '@/components/ErrorBoundary';
import { PolicyInfo } from './components/PolyceInfo';

const privatePolicyPage = () => {
  return (
    <>
      <ErrorBoundary>
        <PolicyInfo />
      </ErrorBoundary>
    </>
  );
};

export default privatePolicyPage;
