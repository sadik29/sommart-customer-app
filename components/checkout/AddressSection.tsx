import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

type Props = {
  selected: string;
  onSelect: (address: string) => void;
};

const addresses = ["Home", "Office", "Work"];

export default function AddressSection({ selected, onSelect }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Address Details</Text>

      <View style={styles.row}>
        {addresses.map((addr) => (
          <TouchableOpacity
            key={addr}
            onPress={() => onSelect(addr)}
            style={[
              styles.chip,
              selected === addr && styles.activeChip,
            ]}
          >
            <Text style={[styles.chipText, selected === addr && styles.activeChipText]}>
              {addr}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        placeholder="Delivery Address"
        placeholderTextColor="#888"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 12,
  },
  chip: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: "#34B7F1",
    borderRadius: 20,
    alignItems: "center",
  },
  activeChip: {
    backgroundColor: "#004B6B",
  },
  chipText: {
    color: "#fff",
    fontWeight: "500",
  },
  activeChipText: {
    color: "#fff",
  },
  input: {
    backgroundColor: "#FBFBFB",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 14,
    color: "#333",
  },
});
