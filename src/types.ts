export type FeedItemType = {
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
};

export type FeedData = {
  data: FeedItemType[];
  hasMore: boolean;
};

export type FeedItemProps = {
  item: FeedItemType;
  onLike: (id: string, isLiked: boolean) => void;
};
