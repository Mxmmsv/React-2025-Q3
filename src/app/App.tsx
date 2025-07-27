import { Navigate, Route, Routes } from 'react-router';

import About from '@/features/about/about';
import ErrorBoundary from '@/features/error/error-boundary';
import ErrorFallback from '@/features/error/fallback';
import NotFoundPage from '@/features/not-found/not-found-page';

import Wrapper from './wrapper';

function App() {
  return (
    <ErrorBoundary
      fallback={(error, handleReset) => <ErrorFallback onReset={handleReset} error={error} />}
    >
      <div
        className="bg-main-background flex min-h-screen flex-col gap-5 bg-repeat p-5"
        style={{
          backgroundImage: `url('/background/rick-head.svg'), url('/background/morty-head.svg')`,
          backgroundPosition: '0 0, 50px 50px',
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/characters" />} />
          <Route path="/characters" element={<Wrapper />} />
          <Route path="/characters/:id" element={<Wrapper />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
