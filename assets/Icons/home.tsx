import React from "react";
import Svg, { Path } from "react-native-svg";

export default function Home_({ color = "#004E74", size = 24 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M3 10L12 3L21 10V21H14V14H10V21H3V10Z" fill={color} />
    </Svg>
  );
}
