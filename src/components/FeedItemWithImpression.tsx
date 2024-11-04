import { useEffect } from "react";
import { useVisibility } from "../hooks/useVisibility";
import { FeedItemProps } from "../types";
import FeedItem from "./FeedItem";

const FeedItemWithImpression: React.FC<FeedItemProps> = ({ item, onLike }) => {
  const { isVisible, ref } = useVisibility();

  useEffect(() => {
    if (isVisible) {
      fetch(`https://backend.tedooo.com/?itemId=${item.id}`);
    }
  }, [isVisible, item.id]);

  return (
    <div ref={ref}>
      <FeedItem item={item} onLike={onLike} />
    </div>
  );
};

export default FeedItemWithImpression;
