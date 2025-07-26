import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

export default function QuantityAndBuy() {
  const [count, setCount] = useState(1);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <View style={styles.wrapper}>
      {/* Quantity Selector */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.circle} onPress={decrease}>
          <Text style={styles.minus}>−</Text>
        </TouchableOpacity>

        <Text style={styles.countText}>{count}</Text>

        <TouchableOpacity style={styles.circle} onPress={increase}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Buy Now Button */}
      <TouchableOpacity style={styles.buyNowButton}>
        <Text style={styles.buyNowText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: "#fff",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#00AEEF",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 24,
    paddingVertical: 6,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  minus: {
    fontSize: 20,
    color: "#B1B1B1",
    fontWeight: "600",
  },
  plus: {
    fontSize: 20,
    color: "#00AEEF",
    fontWeight: "600",
  },
  countText: {
    fontSize: 16,
    fontWeight: "500",
    marginHorizontal: 12,
    color: "#000",
  },
  buyNowButton: {
    backgroundColor: "#004E74",
    paddingVertical: 12,
    paddingHorizontal: 56,
    borderRadius: 30,
    marginLeft: 16,
  },
  buyNowText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
