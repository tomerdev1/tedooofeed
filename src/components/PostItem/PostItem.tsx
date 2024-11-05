import { useEffect } from "react";
import PostContent, { PostItemType } from "./PostContent/PostContent";
import "./post-item.css";
import { useVisibility } from "hooks/useVisibility";

interface Props {
  item: PostItemType;
}

const PostItem: React.FC<Props> = (props) => {
  const { isVisible, ref } = useVisibility();

  useEffect(() => {
    if (isVisible) {
      fetch(`https://backend.tedooo.com/?itemId=${props.item.id}`);
    }
  }, [isVisible, props.item.id]);

  return (
    <div className="post-item" ref={ref}>
      <PostContent {...props.item} />
    </div>
  );
};

export default PostItem;
