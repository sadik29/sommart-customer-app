import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icons } from "@/assets/Icons";

export default function Header() {
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TouchableOpacity>
            <View style={styles.iconCircle}>
              <Icons.menu width={20} height={20} stroke="#fff" />
            </View>
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.greeting}>Hi Abdi👋</Text>
            <Text style={styles.subtitle}>Welcome to SomCart!</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.iconCircle}>
              <Icons.bell width={20} height={20} stroke="#fff" />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>2</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Search Box */}
        <View style={styles.searchBox}>
          <Icons.search width={18} height={18} stroke="#999" />
          <TextInput
            placeholder="Search Product Here.."
            placeholderTextColor="#999"
            style={styles.input}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#6DB3F2",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    overflow: "hidden",
  },
  wrapper: {
    backgroundColor: "#6DB3F2",
    padding: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  iconCircle: {
    backgroundColor: "#005B8E",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 12,
  },
  greeting: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  subtitle: {
    color: "#fff",
    fontSize: 14,
  },
  badge: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "red",
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },
});
