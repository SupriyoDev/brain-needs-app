import { wp } from "@/constant/helpers";
import React from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Learn = () => {
  return (
    <SafeAreaView style={{ marginTop: 10, paddingHorizontal: wp(2) }}>
      <ScrollView>
        <Text>Explore</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Learn;
