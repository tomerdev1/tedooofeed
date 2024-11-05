import { cn } from "utils";
import "./post-images.css";
interface Props {
  images: string[];
}

const PostImages: React.FC<Props> = ({ images }) => {
  const isMoreThenOneImage = images.length > 1;
  return (
    <div
      className={cn("post-images", isMoreThenOneImage ? "split" : "centered")}
    >
      {images.map(
        (image, i) =>
          i <= 1 && (
            <img
              className={cn(
                "post-image",
                isMoreThenOneImage ? "split" : "centered"
              )}
              key={i}
              alt={`post image-${i}`}
              src={image}
            />
          )
      )}
    </div>
  );
};

export default PostImages;
