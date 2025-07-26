import React from "react";
import Svg, { Path } from "react-native-svg";

export default function Cart({ color = "#004E74", size = 24 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 6H2V8H4L6.6 13.59L5.25 16.04C5.09 16.32 5 16.65 5 17C5 18.1 5.9 19 7 19H19V17H7.42C7.28 17 7.18 16.89 7.18 16.75L7.2 16.67L8.1 15H14.55C15.3 15 15.96 14.58 16.3 13.97L20.88 5.99L19.16 5H6.21L5.27 3H1V5H4L6 6ZM7 21C6.45 21 6 20.55 6 20C6 19.45 6.45 19 7 19C7.55 19 8 19.45 8 20C8 20.55 7.55 21 7 21ZM17 21C16.45 21 16 20.55 16 20C16 19.45 16.45 19 17 19C17.55 19 18 19.45 18 20C18 20.55 17.55 21 17 21Z"
        fill={color}
      />
    </Svg>
  );
}
