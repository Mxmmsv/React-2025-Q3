import type { PaginationProps } from './types';
import usePagination from './use-pagination';

function Pagination({ totalPages }: PaginationProps) {
  const { goToPage, getVisiblePages, currentPage } = usePagination({ totalPages });

  const renderArrow = (label: string, target: number) => (
    <button
      onClick={() => goToPage(target)}
      className="bg-muted-hero hover:bg-muted-hero/70 cursor-pointer rounded px-3 py-1 transition"
    >
      {label}
    </button>
  );

  const renderPage = (page: number) => (
    <button
      key={page}
      onClick={() => goToPage(page)}
      className={`rounded px-3 py-1 transition ${
        page === currentPage
          ? 'bg-chart-4'
          : 'bg-muted-hero/90 hover:bg-muted-hero/80 cursor-pointer'
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
