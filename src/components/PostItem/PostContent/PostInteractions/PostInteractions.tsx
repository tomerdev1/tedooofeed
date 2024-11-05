import IconWrapper from "components/IconWrapper";
import { Icons } from "icons/icons";
import "./post-interactions.css";

interface Props {
  likes: number;
  comments: number;
}

const PostInteractions: React.FC<Props> = ({ likes, comments }) => {
  return (
    <div className="post-interactions">
      <div className="likes">
        <IconWrapper
          strokeColor="transparent"
          icon={Icons.likeWithBackgroundIcon}
          size={18}
        />
        {`${likes} Likes`}
      </div>
      <span>{`${comments} Comments`}</span>
    </div>
  );
};

export default PostInteractions;
