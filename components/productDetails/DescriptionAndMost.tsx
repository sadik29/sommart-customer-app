import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

const products = [
  {
    id: 1,
    name: "Smart Watch",
    price: "$10",
    oldPrice: "$20",
    image: require("@/assets/images/smartwatch.png"),
    discount: "30% OFF",
    rating: 4.0,
  },
  {
    id: 2,
    name: "Analog Wall Clock",
    price: "$10",
    image: require("@/assets/images/smartwatch.png"),
    rating: 4.0,
  },
];

export default function DescriptionTabs() {
  const [activeTab, setActiveTab] = useState<"description" | "popular">(
    "description"
  );

  return (
    <View style={styles.container}>
      {/* Tabs Header */}
      <View style={styles.tabHeader}>
        <TouchableOpacity onPress={() => setActiveTab("description")}>
          <Text
            style={[
              styles.tabText,
              activeTab === "description" && styles.activeTab,
            ]}
          >
            Description
          </Text>
        </TouchableOpacity>
        <Text style={styles.separator}>|</Text>
        <TouchableOpacity onPress={() => setActiveTab("popular")}>
          <Text
            style={[
              styles.tabText,
              activeTab === "popular" && styles.activeTab,
            ]}
          >
            Most Popular Products
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content Area */}
      {activeTab === "description" ? (
        <Text style={styles.descriptionText}>
          Lorem ipsum is a dummy or placeholder text commonly used in graphic
          design, publishing, and web development. Its purpose is to permit a
          page layout to be designed, independently of the copy that will
          subsequently populate it, or to demonstrate various fonts of a
          typeface without meaningful text that could be distracting.
        </Text>
      ) : (
        <FlatList
          horizontal
          data={products}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 8 }}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={{ position: "relative" }}>
                <Image source={item.image} style={styles.image} />
                {item.discount && (
                  <Text style={styles.discount}>{item.discount}</Text>
                )}
              </View>
              <Text style={styles.productName}>{item.name}</Text>
              <View style={styles.priceRow}>
                <Text style={styles.price}>{item.price}</Text>
                {item.oldPrice && (
                  <Text style={styles.oldPrice}>{item.oldPrice}</Text>
                )}
              </View>
              <Text style={styles.rating}>⭐ {item.rating}</Text>
              <View style={styles.buyRow}>
                <View style={styles.qtyBox}>
                  <Text style={styles.qtyText}>– 1 +</Text>
                </View>
                <TouchableOpacity style={styles.buyButton}>
                  <Text style={styles.buyButtonText}>Buy Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 12 },
  tabHeader: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.6,
    borderBottomColor: "#ddd",
    paddingBottom: 6,
    marginBottom: 4,
  },
  tabText: {
    fontSize: 14,
    color: "#888",
    fontWeight: "500",
  },
  activeTab: {
    color: "#2196F3",
    fontWeight: "600",
  },
  separator: {
    color: "#ccc",
    marginHorizontal: 8,
  },
  descriptionText: {
    fontSize: 13,
    color: "#666",
    lineHeight: 20,
    paddingRight: 8,
  },
  card: {
    width: 160,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
    marginRight: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 6,
    borderRadius: 8,
  },
  discount: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: "#FF3B30",
    color: "#fff",
    fontSize: 10,
    fontWeight: "600",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 2,
    color: "#222",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    color: "#00AEEF",
    fontWeight: "600",
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: "#999",
    fontSize: 12,
    marginLeft: 6,
  },
  rating: {
    fontSize: 12,
    color: "#666",
    marginVertical: 4,
  },
  buyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  qtyBox: {
    borderWidth: 1,
    borderColor: "#00AEEF",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginRight: 6,
  },
  qtyText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  buyButton: {
    backgroundColor: "#004E64",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 6,
  },
  buyButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
  },
});
