import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Icons } from "@/assets/Icons";

const categoriesLeft = [
  { name: "Accessories", icon: Icons.categories },
  { name: "Furniture", icon: Icons.categories },
  { name: "Books", icon: Icons.categories },
  { name: "Fashion", icon: Icons.categories },
  { name: "More", icon: Icons.categories },
];

const subcategoriesMap: Record<string, { name: string; icon: any }[]> = {
  Accessories: Array(9).fill({ name: "Books", icon: Icons.categories }),
  Furniture: Array(6).fill({ name: "Books", icon: Icons.categories }),
  Books: Array(8).fill({ name: "Books", icon: Icons.categories }),
  Fashion: Array(6).fill({ name: "Fashion", icon: Icons.categories }),
  More: Array(6).fill({ name: "More", icon: Icons.categories }),
};

const itemSize = (Dimensions.get("window").width - 96) / 3;

export default function CategoriesGrid() {
  const [selected, setSelected] = useState("Accessories");

  const subcategories = subcategoriesMap[selected];

  return (
    <View style={styles.container}>
      {/* Left vertical menu */}
      <View style={styles.leftMenu}>
        {categoriesLeft.map((cat, index) => {
          const isActive = cat.name === selected;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setSelected(cat.name)}
              style={[styles.menuItem, isActive && styles.menuItemActive]}
            >
              <cat.icon width={30} height={30} />
              <Text
                style={[styles.menuLabel, isActive && styles.menuLabelActive]}
              >
                {cat.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Right subcategory grid */}
      <FlatList
        data={subcategories}
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.itemWrapper}>
            <View style={styles.iconBox}>
              <item.icon width={40} height={40} />
            </View>
            <Text style={styles.label}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  leftMenu: {
    width: 90,
    backgroundColor: "#F5F7FA",
    paddingVertical: 8,
    alignItems: "center",
  },
  menuItem: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 6,
    marginBottom: 6,
    borderRadius: 12,
  },
  menuItemActive: {
    backgroundColor: "#fff",
  },
  menuLabel: {
    fontSize: 11,
    color: "#333",
    marginTop: 4,
    textAlign: "center",
  },
  menuLabelActive: {
    color: "#2AA6FF",
    fontWeight: "600",
  },
  grid: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingBottom: 32,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 24,
  },
  itemWrapper: {
    width: itemSize,
    alignItems: "center",
  },
  iconBox: {
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
