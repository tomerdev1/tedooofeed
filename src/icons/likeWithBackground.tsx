import { LucideProps } from "lucide-react";

const LikeWithBackgroundIcon = ({ ...props }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"100%"}
    height={"100%"}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="url(#b)" d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0Z" />
      <path
        fill="#fff"
        d="M13.682 8.255c.198.139.38.276.38.758 0 .484-.257.68-.533.816a.823.823 0 0 1 .1.614c-.086.387-.44.688-.756.777.136.218.18.433.017.697-.208.332-.389.458-1.19.458H8.438c-1.112 0-1.688-.614-1.688-1.125V8.623c0-1.384 1.65-2.56 1.65-3.521l-.119-1.198c-.006-.073.01-.252.065-.304.09-.089.339-.225.715-.225.245 0 .408.046.6.138.654.312.824 1.1.824 1.735 0 .305-.466 1.218-.529 1.535 0 0 .976-.216 2.114-.224 1.194-.007 1.968.213 1.968.947 0 .294-.247.588-.356.75Zm-9.632-.38h.9a.675.675 0 0 1 .675.675v4.275a.675.675 0 0 1-.675.675h-.9a.675.675 0 0 1-.675-.675V8.55a.675.675 0 0 1 .675-.675Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={-2.7}
        x2={25.116}
        y1={-2.025}
        y2={22.989}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.031} stopColor="#96DCD0" />
        <stop offset={0.052} stopColor="#6CCEBD" />
        <stop offset={0.333} stopColor="#2DB8A1" />
        <stop offset={0.698} stopColor="#28A38F" />
        <stop offset={1} stopColor="#208171" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default LikeWithBackgroundIcon;
