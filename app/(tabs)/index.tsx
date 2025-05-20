import Icon from "@/assets/icons/index";
import { All5cCards } from "@/constant/appData";
import { hp, wp } from "@/constant/helpers";
import theme from "@/constant/theme";
import { useAuth } from "@/context/authContext";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
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

      {/* course and badges icons  */}

      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          gap: 20,
          marginTop: 20,
        }}
      >
        {/* courses  */}
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
            flexDirection: "row",
            gap: 10,
            width: "44%",
          }}
        >
          <View
            style={{
              backgroundColor: theme.color.primary[100],
              padding: 6,
              borderRadius: 7,
            }}
          >
            <Icon name={"book"} size={24} color={theme.color.primary[500]} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontFamily: theme.fonts.medium,
                color: theme.color.text,
              }}
            >
              5
            </Text>
            <Text
              style={{
                fontFamily: theme.fonts.regular,
                fontSize: 12,
                color: theme.color.text,
              }}
            >
              Courses
            </Text>
          </View>
        </View>

        {/* badges  */}
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
            flexDirection: "row",
            gap: 10,
            width: "44%",
          }}
        >
          <View
            style={{
              backgroundColor: theme.color.accent[100],
              padding: 6,
              borderRadius: 7,
            }}
          >
            <Icon name={"gift"} size={24} color={theme.color.accent[700]} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontFamily: theme.fonts.medium,
                color: theme.color.text,
              }}
            >
              7
            </Text>
            <Text
              style={{
                fontFamily: theme.fonts.regular,
                fontSize: 12,
                color: theme.color.text,
              }}
            >
              Badges
            </Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 25 }}>
        {/* Course header  */}
        <View style={styles.courseTitleGroup}>
          <Text
            style={{
              fontFamily: theme.fonts.medium,
              fontSize: hp(5.5),
              color: theme.color.text,
            }}
          >
            5C Brain Needs Series
          </Text>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text
              style={{
                color: theme.color.primary[500],
                fontFamily: theme.fonts.medium,
                fontSize: 13,
              }}
            >
              {" "}
              See all
            </Text>
            <Icon
              name={"arrowRight"}
              size={14}
              color={theme.color.primary[500]}
            />
          </View>
        </View>

        {/* course cards  */}
        <View style={{ marginTop: 20, width: "100%" }}>
          <FlatList
            style={{ paddingBottom: 10 }}
            horizontal
            data={All5cCards}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="cover"
                />
                <Text style={styles.title}>{item.Title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            )}
          />
        </View>
      </View>

      {/* <Text>{JSON.stringify(currentUser.$id)}</Text> */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  courseTitleGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    marginRight: 16,
    width: 280,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 360,
    borderRadius: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
    fontFamily: theme.fonts.bold,
  },
  description: {
    fontSize: 13,
    color: "#666",
    fontFamily: theme.fonts.regular,
  },
});
