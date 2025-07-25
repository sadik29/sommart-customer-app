import {
  BottomSheetModal,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { Icons } from "@/assets/Icons";
import React, { forwardRef, useMemo, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

type Props = {
  onApply?: (filters: {
    sort: string;
    priceRange: { low: number; high: number };
  }) => void;
};

const sortOptions = [
  "Latest Product",
  "Alphabetically A-Z",
  "Alphabetically Z-A",
  "Low to high price",
  "High to low price",
];

const priceRangePresets = [
  { label: "$0 - $100", low: 0, high: 100 },
  { label: "$100 - $300", low: 100, high: 300 },
  { label: "$300 - $600", low: 300, high: 600 },
  { label: "$600 - $1000", low: 600, high: 1000 },
];

const CustomBackdrop = ({ style }: BottomSheetBackdropProps) => {
  return (
    <View style={[StyleSheet.absoluteFill, style]}>
      <BlurView intensity={80} tint="light" style={StyleSheet.absoluteFill} />
      <View
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: "rgba(255,255,255,0.4)" },
        ]}
      />
    </View>
  );
};

const FilterSheet = forwardRef<BottomSheetModal, Props>(({ onApply }, ref) => {
  const snapPoints = useMemo(() => ["70%"], []);
  const [selectedSort, setSelectedSort] = useState("Latest Product");
  const [selectedPriceRange, setSelectedPriceRange] = useState({
    low: 0,
    high: 1000,
  });

  const handleApply = useCallback(() => {
    onApply?.({
      sort: selectedSort,
      priceRange: selectedPriceRange,
    });
    if (ref && "current" in ref && ref.current) {
      ref.current.dismiss(); // Use dismiss() instead of close()
    }
  }, [selectedSort, selectedPriceRange, onApply, ref]);

  const handleClear = useCallback(() => {
    setSelectedSort("Latest Product");
    setSelectedPriceRange({ low: 0, high: 1000 });
  }, []);

  return (
    <BottomSheetModal
      ref={ref}
      index={-1} // Start closed, open with present()
      snapPoints={snapPoints}
      enablePanDownToClose
      backgroundStyle={{
        backgroundColor: "#fff",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
      backdropComponent={(props) => <CustomBackdrop {...props} />}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Filter</Text>
          <TouchableOpacity
            onPress={() => ref?.current?.dismiss()}
            style={styles.closeButton}
          >
            <Ionicons name="close" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          <Text style={styles.sectionTitle}>Sort By</Text>
          {sortOptions.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.optionRow}
              onPress={() => setSelectedSort(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
              <View
                style={[
                  styles.checkbox,
                  selectedSort === option && styles.checkboxSelected,
                ]}
              >
                {selectedSort === option && (
                  <Ionicons name="checkmark" size={14} color="#fff" />
                )}
              </View>
            </TouchableOpacity>
          ))}

          <Text style={[styles.sectionTitle, { marginTop: 24 }]}>
            Price Range
          </Text>
          {priceRangePresets.map((range) => {
            const selected =
              selectedPriceRange.low === range.low &&
              selectedPriceRange.high === range.high;
            return (
              <TouchableOpacity
                key={range.label}
                style={styles.optionRow}
                onPress={() => setSelectedPriceRange(range)}
              >
                <Text style={styles.optionText}>{range.label}</Text>
                <View
                  style={[styles.checkbox, selected && styles.checkboxSelected]}
                >
                  {selected && (
                    <Ionicons name="checkmark" size={14} color="#fff" />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.clearBtn} onPress={handleClear}>
            <Text style={styles.clearText}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.applyBtn} onPress={handleApply}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheetModal>
  );
});

FilterSheet.displayName = "FilterSheet";
export default FilterSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1B1B1B",
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1B1B1B",
    marginBottom: 12,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    alignItems: "center",
  },
  optionText: {
    fontSize: 15,
    color: "#333",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#BDBDBD",
  },
  checkboxSelected: {
    backgroundColor: "#0AB247",
    borderColor: "#0AB247",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  clearBtn: {
    width: "48%",
    backgroundColor: "#F1F1F1",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  applyBtn: {
    width: "48%",
    backgroundColor: "#0AB247",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  clearText: {
    color: "#333",
    fontWeight: "500",
    fontSize: 15,
  },
  applyText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
});