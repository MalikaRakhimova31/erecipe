import usePagination from "@/helpers/usePagination";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

interface Props {
  onPageChange: (p: any) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
}

const dots = "...";

export default function Pagination({
  onPageChange,
  totalCount,
  siblingCount,
  pageSize,
  currentPage,
}: Props): React.ReactElement {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
    DOTS: dots,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  if (currentPage === 0 || paginationRange.length < 2) {
    return <div />;
  }

  const onNext = (): void => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = (): void => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <Box my="24px">
      <ul className="flex items-center justify-center gap-x-3">
        <li className="flex items-center justify-center cursor-pointer">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => {
              onPrevious();
            }}
          >
            <img src="/assets/arrowLeft.svg" alt="arrow left" />
          </button>
        </li>
        {paginationRange?.map((page) => {
          if (page === dots) {
            return <li key={`page-dots-${page}`}>&#8230;</li>;
          }
          return (
            <li key={page}>
              <button
                type="button"
                onClick={() => {
                  onPageChange(page);
                }}
                className={`${
                  page === currentPage
                    ? "bg-primary text-white"
                    : "bg-transparent text-secondary hover:border hover:border-primary"
                } ease-in-out duration-200 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer`}
              >
                {page}
              </button>
            </li>
          );
        })}

        <li className="flex items-center justify-center cursor-pointer">
          <button
            type="button"
            onClick={() => {
              onNext();
            }}
            disabled={currentPage === lastPage}
          >
            <img src="/assets/arrowRight.svg" alt="arrow right" />
          </button>
        </li>
      </ul>
    </Box>
  );
}
