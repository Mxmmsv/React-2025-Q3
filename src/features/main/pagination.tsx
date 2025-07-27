import type { PaginationProps } from './types';
import usePagination from './use-pagination';

function Pagination({ totalPages }: PaginationProps) {
  const { goToPage, getVisiblePages, currentPage } = usePagination({ totalPages });

  const renderArrow = (label: string, target: number) => (
    <button
      onClick={() => goToPage(target)}
      className="bg-muted hover:bg-muted/70 rounded px-3 py-1 transition"
    >
      {label}
    </button>
  );

  const renderPage = (page: number) => (
    <button
      key={page}
      onClick={() => goToPage(page)}
      className={`rounded px-3 py-1 transition ${
        page === currentPage ? 'bg-accent' : 'bg-background hover:bg-background/80'
      }`}
    >
      {page}
    </button>
  );

  const visiblePages = getVisiblePages();

  return (
    <nav className="mt-6 flex justify-center gap-2">
      {currentPage > 1 && renderArrow('←', currentPage - 1)}
      {visiblePages.map(renderPage)}
      {currentPage < totalPages && renderArrow('→', currentPage + 1)}
    </nav>
  );
}

export default Pagination;
