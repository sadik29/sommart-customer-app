import { StyleSheet, View } from "react-native";
import Header from "@/components/booking/Header";

export default function BookingScreen() {
  return (
    <View style={styles.container}>
      <Header title="Profile" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
});
