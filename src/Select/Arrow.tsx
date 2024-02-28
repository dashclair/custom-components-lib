import * as React from "react";
import {SVGProps}from "react"

const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    viewBox="0 0 22 14"
    {...props}
  >
    <path
      fill="#CBCBCB"
      d="m11.679 12.912 9.956-10.45a.938.938 0 0 0 0-1.293l-.011-.011a.861.861 0 0 0-1.25 0l-9.376 9.84-9.371-9.84a.862.862 0 0 0-1.25 0l-.012.011a.937.937 0 0 0 0 1.294l9.956 10.45a.938.938 0 0 0 1.358 0Z"
    />
  </svg>
)
export default Arrow