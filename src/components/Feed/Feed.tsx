import React, { useState, useCallback, useEffect, useRef } from "react";
import { FeedData, FeedItemType } from "../../types";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import "./feed.css";
import FeedItem from "../FeedItem/FeedItem";

const Feed: React.FC = () => {
  const [feedItems, setFeedItems] = useState<FeedItemType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const initialLoad = useRef(true);
  const [skip, setSkip] = useState(0);

  const loadMore = useCallback(async () => {
    if (!hasMore) return;
    const response = await fetch(
      `https://backend.tedooo.com/hw/feed.json?skip=${skip}`
    );
    const data: FeedData = await response.json();
    setFeedItems((prev) => [...prev, ...data.data]);
    setHasMore(data.hasMore);
    setSkip((prev) => prev + 6);
  }, [hasMore, skip]);

  useEffect(() => {
    if (initialLoad.current) {
      loadMore();
      initialLoad.current = false;
    }
  }, [loadMore]);

  const { isFetching } = useInfiniteScroll({ loadMore, hasMore });

  const handleLike = (id: string, isLiked: boolean) => {
    setFeedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              isLiked,
              totalLikes: isLiked ? item.likes + 1 : item.likes - 1,
            }
          : item
      )
    );
  };

  return (
    <div className="feed">
      {feedItems.map((item) => (
        <FeedItem key={item.id} item={item} onLike={handleLike} />
      ))}
      {isFetching && <div>Loading more...</div>}
    </div>
  );
};

export default Feed;
