
import React from 'react';

type LikeButtonProps = {
    liked: boolean;
    onClick: () => void;
};

const LikeButton: React.FC<LikeButtonProps> = ({ liked, onClick }) => {
    return <button onClick={onClick}>{liked ? 'Unlike' : 'Like'}</button>;
};

export default LikeButton;
