interface ThunderShapeProps {
  width: string;
  height: string;
  className?: string;
  color1: string;
  color2: string;
}

export default function ThunderShape(props: ThunderShapeProps) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      {" "}
      <g clipPath="url(#clip0_238_1296)">
        {" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100 0H0L100 100H0L100 200H200L100 100H200L100 0Z"
          fill="url(#paint0_linear_238_1296)"
        />{" "}
      </g>{" "}
      <defs>
        {" "}
        <linearGradient
          id="paint0_linear_238_1296"
          x1="20.5"
          y1="16"
          x2="100"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor={props.color1} />{" "}
          <stop offset="1" stopColor={props.color2} />{" "}
        </linearGradient>{" "}
        <clipPath id="clip0_238_1296">
          {" "}
          <rect width="200" height="200" fill="white" />{" "}
        </clipPath>{" "}
      </defs>{" "}
    </svg>
  );
}
