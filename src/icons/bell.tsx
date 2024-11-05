import { LucideProps } from "lucide-react";

const BellIcon = ({ ...props }: LucideProps) => (
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
      d="M13.5 6a4.5 4.5 0 1 0-9 0c0 5.25-2.25 6.75-2.25 6.75h13.5S13.5 11.25 13.5 6ZM10.297 15.75a1.5 1.5 0 0 1-2.595 0"
    />
  </svg>
);
export default BellIcon;
