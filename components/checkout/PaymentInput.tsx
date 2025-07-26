import { View, Text, StyleSheet, TextInput } from "react-native";

export default function PaymentInput() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Payment</Text>
      <TextInput
        style={styles.input}
        placeholder="📱  Enter Phone : 61 / 77"
        placeholderTextColor="#666"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6FDFF",
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  },
  label: {
    fontWeight: "600",
    textAlign: "center",
    color: "#222",
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#03A9F4",
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    backgroundColor: "#fff",
  },
});
