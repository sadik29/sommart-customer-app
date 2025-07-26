import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/cart/Header";
import EmptyCart from "@/components/cart/EmptyCart";
import CartItem from "@/components/cart/CartItem";
import SummaryBox from "@/components/cart/SummaryBox";

export default function CartScreen() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Smart Watch",
      price: 10,
      oldPrice: 20,
      image: require("@/assets/images/smartwatch.png"),
    },
    {
      id: 2,
      name: "Beauty Jelly Lipstick",
      price: 10,
      oldPrice: 20,
      image: require("@/assets/images/lipstick1.png"),
    },
    {
      id: 3,
      name: "Analog Wall Clock",
      price: 10,
      oldPrice: 20,
      image: require("@/assets/images/smartwatch.png"),
    },
  ]);

  const [quantities, setQuantities] = useState(cartItems.map(() => 1));

  const increase = (i: number) => {
    const updated = [...quantities];
    updated[i]++;
    setQuantities(updated);
  };

  const decrease = (i: number) => {
    const updated = [...quantities];
    updated[i] = Math.max(1, updated[i] - 1);
    setQuantities(updated);
  };

  const subtotal = cartItems.reduce(
    (sum, item, i) => sum + item.price * quantities[i],
    0
  );
  const delivery = 3;
  const total = subtotal + delivery;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff" }}
      edges={["bottom", "left", "right"]}
    >
      <Header title="Cart" />
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <ScrollView contentContainerStyle={styles.scroll}>
            {cartItems.map((item, i) => (
              <CartItem
                key={item.id}
                item={item}
                quantity={quantities[i]}
                onIncrease={() => increase(i)}
                onDecrease={() => decrease(i)}
                isLastItem={i === cartItems.length - 1}
              />
            ))}
            <SummaryBox subtotal={subtotal} delivery={delivery} total={total} />
          </ScrollView>
          <TouchableOpacity
            style={styles.checkoutBtn}
            onPress={() => router.push("/(tabs)/cart/checkout")}
          >
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  scroll: {
    padding: 16,
  },
  checkoutBtn: {
    backgroundColor: "#005B7F",
    paddingVertical: 16,
    margin: 16,
    borderRadius: 30,
    alignItems: "center",
  },
  checkoutText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
