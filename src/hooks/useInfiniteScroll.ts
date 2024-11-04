import { useEffect, useState } from "react";

interface UseInfiniteScrollProps {
  loadMore: () => Promise<void>;
  hasMore: boolean;
  threshold?: number;
}

export const useInfiniteScroll = ({
  loadMore,
  hasMore,
  threshold = 300,
}: UseInfiniteScrollProps) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFetching, hasMore, threshold, loadMore]);

  return { isFetching };
};
