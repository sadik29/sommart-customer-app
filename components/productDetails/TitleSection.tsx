import { Text, StyleSheet } from "react-native";

export default function TitleSection() {
  return <Text style={styles.title}>Beauty Jelly Lipstick</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1B1B1B",
    marginBottom: 16,
    marginLeft: 8,
  },
});
