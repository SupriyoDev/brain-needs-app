import theme from "@/constant/theme";
import { useAuth } from "@/context/authContext";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Profile = () => {
  const { logout } = useAuth();
  const router = useRouter();
  return (
    <View>
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
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
  },
});
