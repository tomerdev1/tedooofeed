import React, { useState } from "react";
import { FeedItemProps } from "../types";

const FeedItem: React.FC<FeedItemProps> = ({ item, onLike }) => {
  const [liked, setLiked] = useState(item.didLike);

  const handleLike = () => {
    setLiked(!liked);
    onLike(item.id, !liked);
  };

  return (
    <div className="feed-item">
      <h3>{item.username}</h3>
      <h4>{item.shopName}</h4>
      <p>{item.text}</p>
      {item.images.slice(0, 2).map((src, index) => (
        <img key={index} src={src} alt="Post" className="post-image" />
      ))}
      <div className="actions">
        <button onClick={handleLike}>{liked ? "Unlike" : "Like"}</button>
        <button>Comment</button>
      </div>
      <p>
        {item.likes} Likes {item.comments} Comments
      </p>
    </div>
  );
};

export default FeedItem;
