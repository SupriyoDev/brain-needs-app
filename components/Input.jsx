import { StyleSheet, TextInput, View } from "react-native";
import { hp } from "../constant/helpers";
import theme from "../constant/theme";

const Input = (props) => {
  return (
    <View
      style={[styles.container, props.containerStyles && props.containerStyles]}
    >
      {props.icon && props.icon}
      <TextInput
        ref={props.inputRef && props.inputRef}
        style={{ flex: 1, fontFamily: theme.fonts.regular }}
        placeholderTextColor={theme.color.primary}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: hp(14),
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.color.text,
    borderWidth: 0.4,
    borderRadius: theme.radius.lg,
    paddingHorizontal: 18,
    gap: 6,
  },
});
