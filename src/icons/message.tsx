import { LucideProps } from "lucide-react";

const MessageIcon = ({ ...props }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"100%"}
    height={"100%"}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.75 8.625a6.285 6.285 0 0 1-.675 2.85A6.376 6.376 0 0 1 9.375 15a6.285 6.285 0 0 1-2.85-.675L2.25 15.75l1.425-4.275A6.285 6.285 0 0 1 3 8.625a6.375 6.375 0 0 1 3.525-5.7 6.285 6.285 0 0 1 2.85-.675h.375a6.36 6.36 0 0 1 6 6v.375Z"
    />
  </svg>
);
export default MessageIcon;
