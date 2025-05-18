import Button from "@/components/Button";
import ScreenWrapper from "@/components/screenWrapper";
import { hp, wp } from "@/constant/helpers";
import theme from "@/constant/theme";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <ScreenWrapper bgcolor="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* welcome image  */}
        <Image
          resizeMode="contain"
          style={styles.welcomeImage}
          source={require("@/assets/images/welcome.png")}
        />

        {/* title  */}
        <View style={{ gap: 15 }}>
          <Text style={styles.title}> 5C Brain Needs! </Text>
          <Text style={styles.punchLine}>
            Learn ways to feel great in your body and brain.
          </Text>
        </View>

        {/* footer  */}
        <View style={styles.footer}>
          <Button
            onPress={() => router.push("../signup")}
            buttonStyle={{ marginHorizontal: 0 }}
            textStyle={{}}
            title={"Getting Started"}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={{ fontFamily: theme.fonts.light }}>
              Already have an account!
            </Text>
            <Pressable onPress={() => router.push("../login")}>
              <Text
                style={{
                  color: theme.color.buttonDark,
                  fontFamily: theme.fonts.medium,
                }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(3),
    alignItems: "center",
    justifyContent: "space-around",
  },
  welcomeImage: {
    height: hp(90),
    alignSelf: "center",
    width: wp(100),
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: hp(8),
    color: theme.color.text,
    textAlign: "center",
  },
  punchLine: {
    fontFamily: theme.fonts.medium,
    fontSize: hp(3.9),
    color: theme.color.text,
    textAlign: "center",
    paddingHorizontal: wp(3),
  },

  footer: {
    gap: 30,
    width: "100%",
  },
  bottomTextContainer: {
    gap: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
