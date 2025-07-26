import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PaymentBottomSheet from "./PaymentBottomSheet";
import ConfirmPaymentModal from "./ConfirmPaymentModal";

type Props = {
  selected: string;
  onSelect: (method: string) => void;
};

const methods = ["EVC Plus", "E-Dahab", "Jeeb", "Waafi Wallet"];

export default function PaymentMethods({ selected, onSelect }: Props) {
  const sheetRef = useRef<BottomSheetModal>(null);
  const [showModal, setShowModal] = useState(false);
  const [enteredPhone, setEnteredPhone] = useState("");

  const handleSelect = (method: string) => {
    const isSame = selected === method;

    if (isSame) {
      // Deselecting active method
      onSelect("");
      if (["EVC Plus", "E-Dahab", "Jeeb"].includes(method)) {
        sheetRef.current?.dismiss();
      }
    } else {
      // Selecting new method
      onSelect(method);
      if (["EVC Plus", "E-Dahab", "Jeeb"].includes(method)) {
        sheetRef.current?.present();
      } else {
        sheetRef.current?.dismiss();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Method</Text>
      {methods.map((method) => (
        <TouchableOpacity
          key={method}
          style={[styles.option, selected === method && styles.activeOption]}
          onPress={() => handleSelect(method)}
        >
          <Ionicons
            name={selected === method ? "radio-button-on" : "radio-button-off"}
            size={22}
            color={selected === method ? "#03A9F4" : "#ccc"}
            style={styles.icon}
          />
          <Text style={styles.label}>{method}</Text>
        </TouchableOpacity>
      ))}

      {/* Bottom Sheet */}
      <PaymentBottomSheet
        ref={sheetRef}
        onConfirm={(phone) => {
          setEnteredPhone(phone);
          sheetRef.current?.dismiss();
          setShowModal(true);
        }}
      />

      {/* Confirmation Modal */}
      <ConfirmPaymentModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => {
          setShowModal(false);
          console.log("Payment confirmed with", selected, enteredPhone);
        }}
        method={selected}
        phone={enteredPhone}
        amount="$33.00"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1C",
    marginBottom: 12,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#B3E5FC",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  activeOption: {
    borderColor: "#03A9F4",
    backgroundColor: "#F1FAFF",
  },
  icon: {
    marginRight: 12,
  },
  label: {
    fontSize: 15,
    color: "#222",
    fontWeight: "500",
  },
});
