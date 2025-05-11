import { hp } from "@/constant/helpers";
import theme from "@/constant/theme";
import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Button = ({
  title,
  buttonStyle,
  textStyle,
  hasShadow = true,
  loading = false,
  onPress = () => {},
}) => {
  if (loading)
    return (
      <View style={[buttonStyle, styles.button, { backgroundColor: "white" }]}>
        <ActivityIndicator size={"large"} color={theme.color.button} />
      </View>
    );

  return (
    <Pressable
      onPress={onPress}
      style={[buttonStyle, styles.button, hasShadow && styles.shadowStyle]}
    >
      <Text style={[textStyle, styles.text]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.radius.lg,
    height: hp(14),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color.button,
    borderCurve: "continuous",
  },
  text: {
    fontFamily: theme.fonts.bold,
    fontSize: hp(6),
    color: theme.color.white,
  },
  shadowStyle: {
    color: theme.color.dark,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 12,
  },
});
