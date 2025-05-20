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
        tabBarActiveTintColor: "#007aff",
        tabBarInactiveTintColor: theme.color.text,
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          height: 60,
          paddingBottom: 10,
          paddingTop: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -1 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontFamily: theme.fonts.bold,
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Icon name={"home"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: "Learn",
          tabBarIcon: ({ color, size }) => (
            <Icon name={"explore"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <Icon name={"user"} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
