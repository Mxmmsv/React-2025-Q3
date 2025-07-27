import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <div className="bg-background/70 rounded-xl p-2 shadow-md">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="mt-4 text-xl">Page not found</p>
        <Link to="/characters" className="mt-6 text-blue-400 underline">
          ← Go back to Characters
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
