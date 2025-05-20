import Icon from "@/assets/icons/index";
import theme from "@/constant/theme";
import { useAuth } from "@/context/authContext";
import { Redirect, Tabs } from "expo-router";
import React from "react";

const AppLayout = () => {
  const { session } = useAuth();

  return !session ? (
    <Redirect href="/" />
  ) : (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.color.buttonDark,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Icon name={"home"} />,
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => <Icon name={"explore"} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <Icon name={"user"} />,
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
