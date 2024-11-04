import { LucideProps } from "lucide-react";
import * as React from "react";

interface IconWrapperProps {
  icon: ({ ...props }: LucideProps) => JSX.Element;
  size?: number | string;
  fillColor?: string;
  strokeColor?: string;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  icon: Icon,
  size = 24,
  fillColor = "currentColor",
  strokeColor = "currentColor",
  className,
}) => {
  return (
    <div
      className={className}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Icon stroke={strokeColor} fill={fillColor} width="100%" height="100%" />
    </div>
  );
};

export default IconWrapper;
