import React from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Icons } from "@/assets/Icons";

const products = Array.from({ length: 8 }, (_, i) => ({
  id: `${i + 1}`,
  title: i % 2 === 0 ? "Smart Watch" : "Analog Wall Clock",
  price: i % 2 === 0 ? 10 : 15, // Numeric for filtering
  oldPrice: "$20",
  image:
    i % 2 === 0
      ? require("@/assets/images/smartwatch.png")
      : require("@/assets/images/clock.png"),
  rating: 4.0,
}));

const numColumns = 2;
const cardWidth = (Dimensions.get("window").width - 48) / numColumns;

interface ProductGridProps {
  filters: {
    sort: string;
    priceRange: { low: number; high: number };
  };
}

export default function ProductGrid({ filters }: ProductGridProps) {
  const router = useRouter();

  const filteredProducts = React.useMemo(() => {
    let result = products.filter(
      (product) =>
        product.price >= filters.priceRange.low &&
        product.price <= filters.priceRange.high
    );

    switch (filters.sort) {
      case "Alphabetically A-Z":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Alphabetically Z-A":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "Low to high price":
        result.sort((a, b) => a.price - b.price);
        break;
      case "High to low price":
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return result;
  }, [filters]);

  if (filteredProducts.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Icons.notFound width={100} height={100} stroke="#2AA6FF" />
        <Text style={styles.emptyText}>No Products Found</Text>
        <Text style={styles.emptySubText}>
          Try adjusting your search or filter to find what you're looking for.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={filteredProducts}
      numColumns={numColumns}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 16 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() =>
            router.push({
              pathname: "/(tabs)/home/productDetails",
              params: {
                title: item.title,
                price: item.price,
                oldPrice: item.oldPrice,
                rating: item.rating,
                image: item.image,
              },
            })
          }
          style={[styles.card, { width: cardWidth }]}
        >
          <View style={styles.imageWrapper}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>30% OFF</Text>
            </View>
          </View>
          <View style={styles.rowBetween}>
            <Text style={styles.name}>{item.title}</Text>
            <View style={styles.rating}>
              <Text style={styles.star}>★</Text>
              <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
            </View>
          </View>
          <View style={styles.bottomRow}>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <Text style={styles.oldPrice}>{item.oldPrice}</Text>
          </View>
          <View style={styles.buyRow}>
            <View style={styles.counter}>
              <Text style={styles.counterBtn}>−</Text>
              <Text style={styles.counterValue}>1</Text>
              <Text style={styles.counterBtn}>＋</Text>
            </View>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 48,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginTop: 16,
  },
  emptySubText: {
    fontSize: 13,
    color: "#999",
    textAlign: "center",
    paddingHorizontal: 32,
    marginTop: 4,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    marginTop: 16,
  },
  imageWrapper: {
    position: "relative",
    alignItems: "center",
    marginBottom: 8,
  },
  image: {
    height: 80,
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
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    flex: 1,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  star: {
    fontSize: 12,
    color: "#FFA800",
  },
  ratingText: {
    fontSize: 12,
    color: "#444",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 6,
    marginBottom: 10,
  },
  price: {
    color: "#2AA6FF",
    fontWeight: "700",
    fontSize: 14,
  },
  oldPrice: {
    color: "#999",
    textDecorationLine: "line-through",
    fontSize: 12,
  },
  buyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 2,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#2AA6FF",
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  counterBtn: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2AA6FF",
  },
  counterValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginHorizontal: 8,
  },
  buyButton: {
    backgroundColor: "#00487C",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  buyText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
});
