import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  item: {
    image: any;
    name: string;
    price: number;
    oldPrice: number;
  };
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  isLastItem?: boolean;
};

export default function CartItem({
  item,
  quantity,
  onIncrease,
  onDecrease,
  isLastItem = false,
}: Props) {
  return (
    <View style={[styles.wrapper, isLastItem && styles.withDivider]}>
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />

        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>

          <View style={styles.ratingRow}>
            <Ionicons name="star" size={12} color="#FFA800" />
            <Text style={styles.ratingText}>4.0</Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.oldPrice}>${item.oldPrice}</Text>
          </View>
        </View>

        <View style={styles.qtyContainer}>
          <TouchableOpacity onPress={onDecrease} style={styles.qtyButton}>
            <Text style={[styles.qtySymbol, { color: "#9E9E9E" }]}>−</Text>
          </TouchableOpacity>

          <Text style={styles.qtyValue}>{quantity}</Text>

          <TouchableOpacity onPress={onIncrease} style={styles.qtyButton}>
            <Text style={[styles.qtySymbol, { color: "#03A9F4" }]}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {isLastItem && <View style={styles.divider} />}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
  withDivider: {
    marginBottom: 0,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FBFBFB",
    borderRadius: 14,
    padding: 14,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    resizeMode: "contain",
    backgroundColor: "#fff",
    marginRight: 12,
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1C1C1C",
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  ratingText: {
    fontSize: 12,
    color: "#4A4A4A",
    marginLeft: 4,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#03A9F4",
  },
  oldPrice: {
    fontSize: 13,
    color: "#BDBDBD",
    textDecorationLine: "line-through",
  },
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#03A9F4",
    borderRadius: 30,
    paddingHorizontal: 8,
    height: 40,
    backgroundColor: "#fff",
  },
  qtyButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  qtySymbol: {
    fontSize: 20,
    fontWeight: "500",
  },
  qtyValue: {
    fontSize: 15,
    fontWeight: "600",
    marginHorizontal: 8,
    color: "#1C1C1C",
  },
  divider: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginTop: 12,
  },
});
