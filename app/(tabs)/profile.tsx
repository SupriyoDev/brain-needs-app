import { wp } from "@/constant/helpers";
import theme from "@/constant/theme";
import { useAuth } from "@/context/authContext";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const { logout } = useAuth();
  const router = useRouter();
  return (
    <SafeAreaView style={{ marginTop: 10, paddingHorizontal: wp(2) }}>
      <ScrollView>
        <Text>Profile</Text>
        <View style={{ marginTop: 20 }}>
          <Pressable
            onPress={() => logout(router)}
            style={{
              borderColor: theme.color.rose,
              borderWidth: 2,
              padding: 4,
            }}
          >
            <Text> Logout</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
  },
});
