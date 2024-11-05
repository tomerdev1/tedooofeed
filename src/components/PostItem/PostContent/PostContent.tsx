import React from "react";
import PostImages from "./PostImages/PostImages";
import "./post-content.css";
import PostAuthor from "./PostAuthor/PostAuthor";
import PostInteractions from "./PostInteractions/PostInteractions";
import PostButtons from "./PostButtons/PostButtons";

export interface PostItemType {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  shopName: string;
  shopId: string;
  images: string[];
  comments: number;
  date: string;
  text: string;
  likes: number;
  didLike: boolean;
  premium: boolean;
}

const PostContent: React.FC<PostItemType> = ({
  avatar,
  username,
  shopName,
  date,
  text,
  images,
  likes,
  comments,
  didLike,
}) => {
  return (
    <div className="post-content">
      <PostAuthor
        date={date}
        avatar={avatar}
        username={username}
        shopName={shopName}
      />
      <span className="post-text">{text}</span>
      <PostImages images={images} />
      <div>
        <PostInteractions likes={likes} comments={comments} />
        <PostButtons didLiked={didLike} />
      </div>
    </div>
  );
};

export default PostContent;
