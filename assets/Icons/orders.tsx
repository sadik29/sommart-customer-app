import React from "react";
import Svg, { Path } from "react-native-svg";

export default function Orders({ color = "#004E74", size = 24 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 4C3 2.89543 3.89543 2 5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4ZM5 4V20H19V4H5ZM7 6H17V8H7V6ZM7 10H17V12H7V10ZM7 14H17V16H7V14Z"
        fill={color}
      />
    </Svg>
  );
}
