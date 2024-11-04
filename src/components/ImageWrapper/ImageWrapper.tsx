import React from "react";
import "./image-wrapper.css";
import { cn } from "../../utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  size?: number | string; // Define the size prop
  isCircled?: boolean;
}

const ImageWrapper: React.FC<ImageProps> = ({
  size,
  style,
  isCircled,
  ...props
}) => {
  // Combine the size prop with any other inline styles passed in
  const combinedStyle = {
    ...style,
    width: size ?? style?.width,
    height: size ?? style?.height,
  };

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      {...props}
      style={combinedStyle}
      className={cn(props.className, isCircled && "isCircled")}
    />
  );
};

export default ImageWrapper;
