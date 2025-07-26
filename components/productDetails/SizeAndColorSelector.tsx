import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";

const sizes = ["S", "M", "L", "XL", "XXL"];
const colors = ["#00AEEF", "#2ACF43", "#FFA500", "#FF0000"]; // blue, green, orange, red

export default function SizeAndColorSelector() {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <View style={styles.container}>
      {/* Colors */}
      <View style={styles.section}>
        <Text style={styles.label}>
          Colors (4): <Text style={styles.bold}>Select Colour</Text>
        </Text>
        <View style={styles.colorRow}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.circle,
                {
                  backgroundColor: color,
                  borderColor: selectedColor === color ? "#00AEEF" : "#ccc",
                  borderWidth: selectedColor === color ? 2 : 1,
                },
              ]}
              onPress={() => setSelectedColor(color)}
            />
          ))}
        </View>
      </View>

      {/* Sizes */}
      <View style={styles.section}>
        <Text style={styles.label}>
          Sizes (5): <Text style={styles.bold}>Select Size</Text>
        </Text>
        <View style={styles.sizeRow}>
          {sizes.map((size, index) => {
            const isSelected = selectedSize === size;
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.sizeBox,
                  isSelected && styles.sizeBoxSelected,
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text
                  style={[
                    styles.sizeText,
                    isSelected && styles.sizeTextSelected,
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginVertical: 12,
    marginTop: -4,
  },
  section: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: "#000",
  },
  bold: {
    fontWeight: "600",
  },
  colorRow: {
    flexDirection: "row",
    marginTop: 6,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 10,
  },
  sizeRow: {
    flexDirection: "row", // one row only
    marginTop: 6,
    overflow: "hidden", // no wrapping
  },
  sizeBox: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginRight: 8,
    backgroundColor: "#EDEDED",
  },
  sizeBoxSelected: {
    borderWidth: 1.5,
    borderColor: "#00AEEF",
    backgroundColor: "#F1FBFF",
  },
  sizeText: {
    fontSize: 14,
    color: "#1B1B1B",
  },
  sizeTextSelected: {
    color: "#00AEEF",
    fontWeight: "600",
  },
});
