import { useAuth } from "@/context/authContext";
import React from "react";
import { Text, View } from "react-native";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <View>
      <Text>Home</Text>
      {/* <Text>{JSON.stringify(currentUser.$id)}</Text> */}
    </View>
  );
};

export default Home;
