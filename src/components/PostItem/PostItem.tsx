import { useEffect } from "react";
import PostContent, { PostItemType } from "./PostContent/PostContent";
import "./post-item.css";
import { useVisibility } from "hooks/useVisibility";

interface Props {
  item: PostItemType;
  handleLike: (id: string) => void;
}

const PostItem: React.FC<Props> = ({ item, handleLike }) => {
  const { isVisible, ref } = useVisibility();

  useEffect(() => {
    if (isVisible) {
      fetch(`https://backend.tedooo.com/?itemId=${item.id}`);
    }
  }, [isVisible, item.id]);

  return (
    <div className="post-item" ref={ref}>
      <PostContent {...item} handleLike={handleLike} />
    </div>
  );
};

export default PostItem;
