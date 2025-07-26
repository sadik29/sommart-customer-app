import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  method: string;
  phone: string;
  amount: string;
};

const { width } = Dimensions.get("window");

export default function ConfirmPaymentModal({
  visible,
  onClose,
  onConfirm,
  method,
  phone,
  amount,
}: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.text}>
            Are you sure you want{" "}
            to{"\n"}pay by <Text style={styles.bold}>{method}?</Text>
          </Text>

          <Text style={styles.amount}>
            <Text style={styles.bold}>Amount:</Text> {amount}
          </Text>

          <Text style={styles.phone}>
            <Text style={styles.bold}>Phone Number:</Text> {phone}
          </Text>

          <Text style={styles.warning}>This action cannot be undone.</Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.noButton} onPress={onClose}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.yesButton} onPress={onConfirm}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#fff",
    width: width * 0.82,
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: "center",
    elevation: 5,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    color: "#4A4A4A",
    marginBottom: 12,
    lineHeight: 22,
  },
  bold: {
    fontWeight: "600",
    color: "#222",
  },
  amount: {
    fontSize: 14,
    color: "#333",
    marginBottom: 6,
  },
  phone: {
    fontSize: 14,
    color: "#333",
    marginBottom: 6,
  },
  warning: {
    fontSize: 13,
    color: "#888",
    marginBottom: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  noButton: {
    flex: 1,
    backgroundColor: "#D32F2F",
    paddingVertical: 12,
    borderRadius: 10,
    marginRight: 8,
    alignItems: "center",
  },
  yesButton: {
    flex: 1,
    backgroundColor: "#004B6B",
    paddingVertical: 12,
    borderRadius: 10,
    marginLeft: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
});
