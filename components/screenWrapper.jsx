import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenWrapper = ({ children, bgcolor = "white" }) => {
  const { top } = useSafeAreaInsets();

  const paddingTop = top ? top + 5 : 30;

  return (
    <View
      style={{
        paddingTop,
        backgroundColor: bgcolor,
        flex: 1,
      }}
    >
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
