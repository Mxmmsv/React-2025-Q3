import { useNavigate, useSearchParams } from 'react-router';

import type { PaginationProps } from './types';

function usePagination({ totalPages }: PaginationProps) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPage = Number(searchParams.get('page')) || 1;

  const goToPage = (page: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('page', String(page));
    navigate({ search: newParams.toString() });
  };

  const getVisiblePages = (): number[] => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);

    const range: number[] = [];
    const min = Math.max(1, currentPage - 2);
    const max = Math.min(totalPages, currentPage + 2);

    for (let i = min; i <= max; i++) {
      range.push(i);
    }

    while (range.length < 5) {
      if (range[0] > 1) range.unshift(range[0] - 1);
      else if (range[range.length - 1] < totalPages) range.push(range[range.length - 1] + 1);
      else break;
    }

    return range;
  };

  return {
    goToPage,
    getVisiblePages,
    currentPage,
  };
}
export default usePagination;
