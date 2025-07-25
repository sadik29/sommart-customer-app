import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icons } from "@/assets/Icons";

type Props = {
  onBackPress?: () => void;
};

export default function Header({ onBackPress }: Props) {
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <Icons.back width={18} height={18} stroke="#083F63" />
          </TouchableOpacity>
          <Text style={styles.title}>Categories</Text>
        </View>
        <Text style={styles.subtitle}>Shop By Category</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
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
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "400",
    color: "#999",
  },
});
