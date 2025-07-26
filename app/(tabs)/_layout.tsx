import { Tabs } from "expo-router";
import React from "react";

import { Icons } from "@/assets/Icons";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tabIconSelected,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          marginBottom: 10,
        },
        tabBarItemStyle: { 
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 6,
        },
        tabBarStyle: {
          backgroundColor: "transparent",
          // position: "absolute",
          borderTopWidth: 0,
          height: 70,
          elevation: 0,
          paddingBottom: 0,
          paddingTop: 0,
          marginBottom: 30,
        },
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Icons.home_ color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: "Category",
          tabBarIcon: ({ color }) => <Icons.category__ color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => <Icons.cart_ color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color }) => <Icons.orders_ color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <Icons.profile_ color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}
