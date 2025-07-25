import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const offers = [
  {
    id: "1",
    title: "Facial Cleanser",
    price: "$10",
    oldPrice: "$20",
    image: require("@/assets/images/cleaners.png"),
    rating: 4.0,
    hasCounter: false,
  },
  {
    id: "2",
    title: "Smart Watch",
    price: "$10",
    oldPrice: "$20",
    image: require("@/assets/images/cleaners.png"),
    rating: 4.0,
    hasCounter: true,
  },
  {
    id: "3",
    title: "Analog Wall Clock",
    price: "$10",
    oldPrice: "$20",
    image: require("@/assets/images/cleaners.png"),
    rating: 4.0,
    hasCounter: false,
  },
];

export default function Offers() {
  const router = useRouter();
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>Offers</Text>
        <TouchableOpacity onPress={() => router.push("/home/products")}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={offers}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.imageWrapper}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>30% OFF</Text>
              </View>
            </View>
            <Text style={styles.name}>{item.title}</Text>
            <View style={styles.bottomRow}>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.oldPrice}>{item.oldPrice}</Text>
            </View>
            <View style={styles.ratingRow}>
              <Text style={styles.star}>★</Text>
              <Text style={styles.rating}>{item.rating.toFixed(1)}</Text>
              {item.hasCounter ? (
                <View style={styles.counter}>
                  <Text style={styles.counterBtn}>−</Text>
                  <Text style={styles.counterValue}>1</Text>
                  <Text style={styles.counterBtn}>+</Text>
                </View>
              ) : (
                <TouchableOpacity style={styles.plusButton}>
                  <Text style={styles.plusText}>＋</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#EAF6FE",
    paddingTop: 16,
    paddingBottom: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#083F63",
  },
  viewAll: {
    fontSize: 14,
    color: "#2AA6FF",
    fontWeight: "500",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    width: 180,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },
  imageWrapper: {
    position: "relative",
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: "contain",
  },
  discountBadge: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: "red",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  discountText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 8,
    marginBottom: 4,
    color: "#1B1B1B",
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    fontWeight: "700",
    color: "#2AA6FF",
  },
  oldPrice: {
    fontSize: 12,
    textDecorationLine: "line-through",
    color: "#999",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  star: {
    fontSize: 14,
    color: "#F8B518",
    marginRight: 2,
  },
  rating: {
    fontSize: 13,
    fontWeight: "500",
    color: "#333",
    marginRight: 6,
  },
  plusButton: {
    backgroundColor: "#2AA6FF",
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  plusText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F6FC",
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 6,
  },
  counterBtn: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2AA6FF",
  },
  counterValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
});
