import React from "react";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

interface Props {
  avatar: string;
  username: string;
  shopName: string;
}

const FeedAuthor: React.FC<Props> = ({ avatar, username, shopName }) => {
  return (
    <div className="feed-author">
      <ImageWrapper size={40} alt="avatar" src={avatar} />
      <div className="details">
        <span>{username}</span>
        <span>{shopName}</span>
      </div>
    </div>
  );
};

export default FeedAuthor;
