import { LucideProps } from "lucide-react";
import * as React from "react";
const SearchIcon = ({ ...props }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"100%"}
    height={"100%"}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <path
      stroke="#949796"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9"
      fill="none"
    />
  </svg>
);
export default SearchIcon;
