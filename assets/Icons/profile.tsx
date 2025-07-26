import React from "react";
import Svg, { Path } from "react-native-svg";

export default function Profile({ color = "#004E74", size = 24 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2C9.79 2 8 3.79 8 6C8 8.21 9.79 10 12 10C14.21 10 16 8.21 16 6C16 3.79 14.21 2 12 2ZM4 20V18C4 15.33 8.67 14 12 14C15.33 14 20 15.33 20 18V20H4Z"
        fill={color}
      />
    </Svg>
  );
}
