import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function EmptyCart() {
  return (
    <View style={styles.emptyContainer}>
      <View style={styles.iconWrapper}>
        <Image
          source={require("@/assets/images/cart.png")}
          style={styles.icon}
        />
      </View>
      <Text style={styles.text}>There are no products in your cart</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapper: {
    backgroundColor: "#E8F6FB",
    padding: 24,
    borderRadius: 100,
    marginBottom: 16,
  },
  icon: {
    width: 50,
    height: 50,
    tintColor: "#005B7F",
  },
  text: {
    fontSize: 14,
    color: "gray",
    marginBottom: 16,
  },
  button: {
    borderWidth: 1,
    borderColor: "#005B7F",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "#005B7F",
    fontWeight: "600",
  },
});
