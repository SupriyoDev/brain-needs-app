import { hp, wp } from "@/constant/helpers";
import theme from "@/constant/theme";
import { useAuth } from "@/context/authContext";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { currentUser } = useAuth();
  const hours = new Date().getHours();
  const getTime = () => {
    if (hours > 6 && hours < 12) return "Good Morning";
    if (hours > 12 && hours < 18) return "Good Afternoon";
    else return "Good Evening";
  };
  return (
    <SafeAreaView
      style={{
        marginTop: 10,
        paddingHorizontal: wp(3),
      }}
    >
      <ScrollView>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: theme.fonts.regular,
                fontSize: hp(4),
                color: theme.color.text,
                paddingLeft: 8,
              }}
            >
              {getTime()}
            </Text>
            <Text
              style={{
                fontFamily: theme.fonts.medium,
                fontSize: hp(7),
                color: theme.color.text,
              }}
            >
              {" "}
              {currentUser.name.split(" ")[0]}!
            </Text>
          </View>
          <View
            style={{
              borderWidth: 3,
              borderRadius: "100%",
              borderColor: theme.color.button,
              overflow: "hidden",
            }}
          >
            <Image
              source={require("@/assets/images/5c/boy.png")}
              style={{
                height: 45,
                width: 45,
                marginTop: 10,
              }}
            />
          </View>
        </View>

        {/* <Text>{JSON.stringify(currentUser.$id)}</Text> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
