import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <div className="bg-background/70 rounded-xl p-2 shadow-md">
        <h1 className="text-foreground text-5xl">404</h1>
        <p className="text-foreground mt-4 text-xl">Page not found</p>
        <Link to="/characters" className="text-foreground mt-6 underline">
          ← Go back to Characters
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
