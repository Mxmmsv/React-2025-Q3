import ErrorBoundary from '@/features/error/error-boundary';
import ErrorFallback from '@/features/error/fallback';

import Wrapper from './wrapper';

function App() {
  return (
    <ErrorBoundary
      fallback={(error, handleReset) => <ErrorFallback onReset={handleReset} error={error} />}
    >
      <div
        className="bg-main-background flex min-h-screen flex-col gap-5 bg-repeat p-5"
        style={{
          backgroundImage: `url('./background/rick-head.svg'), url('./background/morty-head.svg')`,
          backgroundPosition: '0 0, 50px 50px',
        }}
      >
        <Wrapper />
      </div>
    </ErrorBoundary>
  );
}

export default App;
