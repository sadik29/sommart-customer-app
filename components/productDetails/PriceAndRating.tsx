import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function PriceAndRating() {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>
        $10 <Text style={styles.oldPrice}>$20</Text>{" "}
        <Text style={styles.discount}>30% OFF</Text>
      </Text>
      <View style={styles.ratingRow}>
        <FontAwesome name="star" size={16} color="#FFD700" />
        <Text style={styles.ratingText}>(1)</Text>
        <Text style={styles.reviewText}>| 0 Reviews</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    marginTop: -8,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  discount: {
    color: "red",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    marginLeft: 4,
  },
  reviewText: {
    marginLeft: 8,
    color: "gray",
  },
});
