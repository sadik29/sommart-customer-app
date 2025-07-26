import {
  BottomSheetModal,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, {
  forwardRef,
  useMemo,
  useState,
  useCallback,
} from "react";
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

const CustomBackdrop = ({ style }: BottomSheetBackdropProps) => (
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

const FilterSheet = forwardRef<BottomSheetModal, Props>(({ onApply }, ref) => {
  const snapPoints = useMemo(() => ["65%"], []);
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
    ref?.current?.dismiss();
  }, [selectedSort, selectedPriceRange, onApply, ref]);

  const handleClear = useCallback(() => {
    setSelectedSort("Latest Product");
    setSelectedPriceRange({ low: 0, high: 1000 });
  }, []);

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose
      backdropComponent={(props) => <CustomBackdrop {...props} />}
      backgroundStyle={{
        backgroundColor: "#fff",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
    >
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.sectionTitle}>Price Range</Text>
          <View style={styles.sliderContainer}>
            <Text style={styles.rangeLabel}>
              ${selectedPriceRange.low.toFixed(2)} - ${selectedPriceRange.high.toFixed(2)}
            </Text>
            <MultiSlider
              values={[selectedPriceRange.low, selectedPriceRange.high]}
              min={0}
              max={1000}
              step={10}
              onValuesChange={(values) =>
                setSelectedPriceRange({ low: values[0], high: values[1] })
              }
              selectedStyle={{ backgroundColor: "#2AA6FF" }}
              unselectedStyle={{ backgroundColor: "#E0E0E0" }}
              trackStyle={{ height: 4 }}
              markerStyle={{
                height: 20,
                width: 20,
                borderRadius: 10,
                backgroundColor: "#00487C",
              }}
              containerStyle={{ marginTop: 16 }}
            />
          </View>

          <Text style={styles.sortLabel}>Sort</Text>
          {sortOptions.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.sortItem}
              onPress={() => setSelectedSort(option)}
            >
              <Text style={styles.sortText}>{option}</Text>
              <View
                style={[
                  styles.radioOuter,
                  {
                    borderColor:
                      selectedSort === option ? "#2AA6FF" : "#D1D5DB",
                  },
                ]}
              >
                {selectedSort === option && (
                  <View style={styles.radioInner} />
                )}
              </View>
            </TouchableOpacity>
          ))}
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
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1B1B1B",
  },
  sliderContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  rangeLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2AA6FF",
  },
  sortLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1B1B1B",
    marginBottom: 16,
  },
  sortItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  sortText: {
    fontSize: 15,
    color: "#333",
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#2AA6FF",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  clearBtn: {
    width: "48%",
    backgroundColor: "#2AA6FF",
    paddingVertical: 14,
    borderRadius: 100,
    alignItems: "center",
  },
  applyBtn: {
    width: "48%",
    backgroundColor: "#00487C",
    paddingVertical: 14,
    borderRadius: 100,
    alignItems: "center",
  },
  clearText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
  applyText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
});
