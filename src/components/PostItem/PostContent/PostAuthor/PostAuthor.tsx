import React from "react";
import "./post-author.css";
import ImageWrapper from "components/ImageWrapper/ImageWrapper";
import { getTimeSinceDate } from "utils";

interface Props {
  avatar: string;
  username: string;
  shopName: string;
  date: string;
}

const PostAuthor: React.FC<Props> = ({ avatar, username, shopName, date }) => {
  return (
    <div className="post-author">
      <ImageWrapper isCover isCircled size={40} alt="avatar" src={avatar} />
      <div className="details">
        <span className="username">{username}</span>
        <div className="post-details">
          <span className="shop-name">{shopName}</span>
          <span>·</span>
          <span>{getTimeSinceDate(new Date(date))}</span>
        </div>
      </div>
    </div>
  );
};

export default PostAuthor;
