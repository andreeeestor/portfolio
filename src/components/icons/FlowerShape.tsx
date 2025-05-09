interface FlowerShapeProps {
  width: string;
  height: string;
  className?: string;
  color1: string;
  color2: string;
}

export default function FlowerShape(props: FlowerShapeProps) {
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
      <g clip-path="url(#clip0_133_2)">
        {" "}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M50.7143 0H0.71429V50C0.71429 75.462 19.7466 96.4788 44.361 99.6002C19.4015 102.402 4.22025e-06 123.578 2.18557e-06 149.286L0 199.286H50C75.462 199.286 96.4788 180.253 99.6002 155.639C102.402 180.599 123.578 200 149.286 200H199.286V150C199.286 124.538 180.253 103.521 155.639 100.4C180.599 97.5984 200 76.422 200 50.7143V0.714286L150 0.714284C124.538 0.714282 103.521 19.7466 100.4 44.361C97.5984 19.4015 76.422 0 50.7143 0Z"
          fill="url(#paint0_linear_133_2)"
        />{" "}
      </g>{" "}
      <defs>
        {" "}
        <linearGradient
          id="paint0_linear_133_2"
          x1="27.5"
          y1="19"
          x2="149"
          y2="174.5"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stop-color={props.color1} /> <stop offset="1" stop-color={props.color2} />{" "}
        </linearGradient>{" "}
        <clipPath id="clip0_133_2">
          {" "}
          <rect width="200" height="200" fill="white" />{" "}
        </clipPath>{" "}
      </defs>{" "}
    </svg>
  );
}
