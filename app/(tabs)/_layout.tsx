import { useAuth } from "@/context/authContext";
import { Redirect, Tabs } from "expo-router";
import React from "react";

const AppLayout = () => {
  const { session } = useAuth();

  return !session ? (
    <Redirect href="/" />
  ) : (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="explore" options={{ title: "Explore" }} />
    </Tabs>
  );
};

export default AppLayout;
