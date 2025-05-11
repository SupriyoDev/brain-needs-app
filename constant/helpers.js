import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const wp = (percentage) => {
  return (height * percentage) / 100;
};
export const hp = (percentage) => {
  return (width * percentage) / 100;
};
