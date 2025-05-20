import Svg, { Circle, Path } from "react-native-svg";

const ArrowRight = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={props.color}
      fill={"none"}
      {...props}
    >
      <Circle
        cx="12"
        cy="12"
        r="10"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
      />
      <Path
        d="M16 12L8 12M16 12C16 12.7002 14.0057 14.0085 13.5 14.5M16 12C16 11.2998 14.0057 9.99153 13.5 9.5"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowRight;
