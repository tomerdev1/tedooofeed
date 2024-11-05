import { LucideProps } from "lucide-react";

const LikeIcon = ({ ...props }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"100%"}
    height={"100%"}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path
      fill="#737877"
      fillRule="evenodd"
      d="M8.236 1.272A.562.562 0 0 1 8.75.937a2.812 2.812 0 0 1 2.813 2.813v2.438h3.68A2.062 2.062 0 0 1 17.3 8.559l-1.035 6.75a2.063 2.063 0 0 1-2.059 1.754H3.5A2.062 2.062 0 0 1 1.437 15V9.75A2.063 2.063 0 0 1 3.5 7.687h1.884l2.852-6.415ZM6.312 8.369 9.1 2.1a1.688 1.688 0 0 1 1.338 1.651v3c0 .31.252.563.563.563h4.251a.938.938 0 0 1 .938 1.077l-1.035 6.75a.937.937 0 0 1-.938.797H6.313V8.37Zm-1.125 7.569V8.811H3.5a.937.937 0 0 0-.938.938V15a.937.937 0 0 0 .938.938h1.688Z"
      clipRule="evenodd"
    />
  </svg>
);
export default LikeIcon;
