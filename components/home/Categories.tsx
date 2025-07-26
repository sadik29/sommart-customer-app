import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icons } from "@/assets/Icons";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

const categories = [
  { name: "Accessories", icons: Icons.categories },
  { name: "Furniture", icons: Icons.categories },
  { name: "Books", icons: Icons.categories },
  { name: "Books", icons: Icons.categories },
  { name: "Books", icons: Icons.categories },
  { name: "Books", icons: Icons.categories },
  { name: "Fashion", icons: Icons.categories },
  { name: "More", icons: Icons.more },
];

export default function Categories() {
  const router = useRouter();
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity onPress={() => router.push("/(tabs)/home/categoriesScreen")}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.grid}>
        {categories.map((item, index) => (
          <View key={index} style={styles.itemWrapper}>
            <View style={styles.card}>
              <item.icons width={40} height={40} />
            </View>
            <Text style={styles.label}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1B1B1B",
  },
  viewAll: {
    color: "#2A9CE3",
    fontWeight: "500",
    fontSize: 14,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  itemWrapper: {
    width: "22%",
    alignItems: "center",
    marginBottom: 20,
  },
  card: {
    width: 70,
    height: 70,
    backgroundColor: "#F5FAFD",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  label: {
    fontSize: 12,
    color: "#1B1B1B",
    textAlign: "center",
  },
});
