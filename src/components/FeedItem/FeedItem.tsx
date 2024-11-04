import { useEffect } from "react";
import { useVisibility } from "../../hooks/useVisibility";
import { FeedItemProps } from "../../types";
import FeedContent from "./FeedContent";
import "./feed-item.css";

const FeedItem: React.FC<FeedItemProps> = ({ item, onLike }) => {
  const { isVisible, ref } = useVisibility();

  useEffect(() => {
    if (isVisible) {
      fetch(`https://backend.tedooo.com/?itemId=${item.id}`);
    }
  }, [isVisible, item.id]);

  return (
    <div className="feed-item" ref={ref}>
      <FeedContent item={item} onLike={onLike} />
    </div>
  );
};

export default FeedItem;
