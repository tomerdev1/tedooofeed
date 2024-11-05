import { Button } from "antd";
import "./post-buttons.css";
import { cn } from "utils";
import IconWrapper from "components/IconWrapper";
import { Icons } from "icons/icons";

interface Props {
  id: string;
  didLiked: boolean;
  handleLike: (id: string) => void;
}

const PostButtons: React.FC<Props> = ({ id, didLiked, handleLike }) => {
  return (
    <div className="post-buttons">
      <Button
        type="text"
        className={cn("post-button", didLiked && "did-liked")}
        icon={<IconWrapper size={18} icon={Icons.likeIcon} />}
        onClick={() => handleLike(id)}
      >
        {didLiked ? "Liked" : "Like"}
      </Button>
      <Button
        icon={
          <IconWrapper size={18} icon={Icons.commentIcon} fillColor="red" />
        }
        type="text"
        className="post-button"
      >
        Comment
      </Button>
    </div>
  );
};

export default PostButtons;
