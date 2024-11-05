import { useEffect, useState } from "react";

interface UseInfiniteScrollProps {
  loadMore: () => Promise<void>;
  hasMore: boolean;
  threshold?: number;
  debounceDelay?: number;
}

export const useInfiniteScroll = ({
  loadMore,
  hasMore,
  threshold = 300,
  debounceDelay = 200,
}: UseInfiniteScrollProps) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (
          window.innerHeight + document.documentElement.scrollTop + threshold <
            document.documentElement.offsetHeight ||
          isFetching ||
          !hasMore
        ) {
          return;
        }
        setIsFetching(true);
        loadMore().finally(() => setIsFetching(false));
      }, debounceDelay);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFetching, hasMore, threshold, loadMore, debounceDelay]);

  return { isFetching };
};
