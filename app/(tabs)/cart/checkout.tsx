import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useState } from "react";

import Header from "@/components/checkout/Header";
import DeliveryToggle from "@/components/checkout/DeliveryToggle";
import AddressSection from "@/components/checkout/AddressSection";
import PaymentMethods from "@/components/checkout/PaymentMethods";

export default function CheckoutScreen() {
  const [selectedType, setSelectedType] = useState<"Delivery" | "Pickup">("Pickup");
  const [selectedAddress, setSelectedAddress] = useState("Home");
  const [selectedMethod, setSelectedMethod] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <DeliveryToggle selected={selectedType} onSelect={setSelectedType} />
      <AddressSection selected={selectedAddress} onSelect={setSelectedAddress} />
      <PaymentMethods selected={selectedMethod} onSelect={setSelectedMethod} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  confirmButton: {
    backgroundColor: "#005B7F",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 24,
  },
  confirmText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
