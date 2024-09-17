import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ContactCard } from './components/ContactCard';
import { ContactForm } from './components/ContactForm';

const ContactPage = () => {
  return (
    <>
      <ErrorBoundary>
        <ContactForm />
        <ContactCard />
      </ErrorBoundary>
    </>
  );
};

export default ContactPage;
