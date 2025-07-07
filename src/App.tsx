import ErrorBoundary from '@/features/error/error-boundary';
import ErrorFallback from '@/features/error/fallback';
import Header from '@/features/header/header';
import Main from '@/features/main/main';

function App() {
  return (
    <div
      className="bg-main-background flex min-h-screen flex-col gap-5 bg-repeat p-5"
      style={{
        backgroundImage: `url('./background/rick-head.svg'), url('./background/morty-head.svg')`,
        backgroundPosition: '0 0, 50px 50px',
      }}
    >
      <Header />
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Main />
      </ErrorBoundary>
    </div>
  );
}

export default App;
