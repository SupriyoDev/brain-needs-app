import { Pressable, StyleSheet } from "react-native";
import Icon from "../assets/icons/index";
import theme from "../constant/theme";

const BackButton = ({ size = 26, router }) => {
  return (
    <Pressable onPress={() => router.push("/")} style={styles.container}>
      <Icon
        name={"arrowLeft"}
        size={size}
        strokeWidth={2.5}
        color={theme.color.text}
      />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    padding: 5,
    backgroundColor: "rgba(0,0,0,0.07)",
    borderRadius: theme.radius.sm,
  },
});
