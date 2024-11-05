import { LucideProps } from "lucide-react";

const CommentIcon = ({ ...props }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"100%"}
    height={"100%"}
    viewBox="0 0 19 19"
    fill="none"
    {...props}
  >
    <path
      stroke="#737877"
      fillRule="evenodd"
      d="M4.25 5.813a.937.937 0 0 0-.938.937v10.642l2.04-2.04a.563.563 0 0 1 .398-.165h9a.938.938 0 0 0 .938-.937v-7.5a.938.938 0 0 0-.938-.938H4.25Zm-1.458-.521a2.063 2.063 0 0 1 1.458-.604h10.5a2.063 2.063 0 0 1 2.063 2.062v7.5a2.062 2.062 0 0 1-2.063 2.063H5.983l-2.835 2.835a.563.563 0 0 1-.96-.398v-12c0-.547.217-1.072.604-1.458Z"
      clipRule="evenodd"
    />
  </svg>
);
export default CommentIcon;
