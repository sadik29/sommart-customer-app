import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Icons as TabIcons } from "@/assets/Icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0.5,
          borderTopColor: "#E6E6E6",
          height: 64,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarActiveTintColor: "#003B64",
        tabBarInactiveTintColor: "#C1C1C1",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <TabIcons.Home width={24} height={24} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: "Category",
          tabBarIcon: ({ color }) => (
            <TabIcons.category width={24} height={24} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <View style={{ position: "relative" }}>
              <TabIcons.cart width={24} height={24} fill={color} />
              <View
                style={{
                  position: "absolute",
                  top: -6,
                  right: -10,
                  backgroundColor: "#03A9F4",
                  borderRadius: 8,
                  minWidth: 16,
                  height: 16,
                  paddingHorizontal: 4,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  2
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color }) => (
            <TabIcons.orders width={24} height={24} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabIcons.Profile width={24} height={24} fill={color} />
          ),
        }}
      />
    </Tabs>
  );
}
