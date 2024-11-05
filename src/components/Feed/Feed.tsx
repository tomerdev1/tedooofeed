import React, { useState, useCallback, useEffect, useRef } from "react";
import "./feed.css";

import { useInfiniteScroll } from "hooks/useInfiniteScroll";
import { PostItemType } from "components/PostItem/PostContent/PostContent";
import PostItem from "components/PostItem/PostItem";

export type FeedData = {
  data: PostItemType[];
  hasMore: boolean;
};

const Feed: React.FC = () => {
  const [postItems, setPostItems] = useState<PostItemType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const initialLoad = useRef(true);
  const [skip, setSkip] = useState(0);

  const loadMore = useCallback(async () => {
    if (!hasMore) return;
    const response = await fetch(
      `https://backend.tedooo.com/hw/feed.json?skip=${skip}`
    );
    const data: FeedData = await response.json();
    setPostItems((prev) => [...prev, ...data.data]);
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

  const handleLike = useCallback((postId: string) => {
    setPostItems((prevItems) =>
      prevItems.map((item) =>
        item.id === postId
          ? {
              ...item,
              didLike: !item.didLike,
              likes: item.didLike ? item.likes - 1 : item.likes + 1,
            }
          : item
      )
    );
  }, []);

  return (
    <div className="feed">
      {postItems.map((item) => (
        <PostItem key={item.id} item={item} handleLike={handleLike} />
      ))}
      {isFetching && <div>Loading more...</div>}
    </div>
  );
};

export default Feed;
