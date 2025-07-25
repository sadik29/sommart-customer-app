import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icons } from "@/assets/Icons";

type Props = {
  onBackPress?: () => void;
  onFilterPress?: () => void;
};

export default function Header({ onBackPress, onFilterPress }: Props) {
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
            <Icons.back width={16} height={16} stroke="#083F63" />
          </TouchableOpacity>
          <Text style={styles.title}>Products</Text>
          <TouchableOpacity style={styles.cartWrapper}>
            <Icons.cart width={20} height={20} stroke="#000" />
            <View style={styles.cartBadge} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Icons.search width={18} height={18} stroke="#2AA6FF" />
            <TextInput
              placeholder="Search Product Here.."
              placeholderTextColor="#999"
              style={styles.input}
            />
          </View>
          <TouchableOpacity style={styles.filterButton} onPress={onFilterPress}>
            <Icons.filter width={18} height={18} stroke="#2AA6FF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
  },
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2AA6FF",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#083F63",
  },
  cartWrapper: {
    position: "relative",
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadge: {
    position: "absolute",
    top: 2,
    right: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#2AA6FF",
  },
  searchRow: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2AA6FF",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2AA6FF",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});