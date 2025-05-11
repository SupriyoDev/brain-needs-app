import React from "react";
import { Image, StyleSheet, View } from "react-native";
const Welcome = () => {
  return (
    <View style={styles.container}>
      {/* welcome image  */}
      <Image
        source={require("@/assets/images/react-logo.png")}
        style={styles.welcomeImage}
      />

      {/* title  */}
      <View>
        <Text>5C Brain Needs!</Text>
      </View>

      {/* footer  */}
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeImage: {},
});
