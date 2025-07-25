import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/products/Header";
import ProductGrid from "@/components/products/ProductGrid";
import { useNavigation } from "expo-router";
import { useRef, useCallback, useState } from "react";
import * as Haptics from "expo-haptics";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import FilterSheet from "@/components/products/FilterSheet";

export default function ProductsScreen() {
  const navigation = useNavigation();
  const filterRef = useRef<BottomSheetModal>(null);
  const [filters, setFilters] = useState({
    sort: "Latest Product",
    priceRange: { low: 0, high: 1000 },
  });

  const handleFilterPress = useCallback(() => {
    console.log("Filter button pressed");
    Haptics.selectionAsync();
    filterRef.current?.present();
  }, []);

  const handleApplyFilters = useCallback(
    (sort: string, priceRange: { low: number; high: number }) => {
      setFilters({ sort, priceRange });
      filterRef.current?.dismiss(); // Use dismiss() instead of close()
    },
    []
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={["left", "right"]}>
      <Header
        onBackPress={() => navigation.goBack()}
        onFilterPress={handleFilterPress}
      />
      <View style={styles.container}>
        <ProductGrid filters={filters} />
      </View>
      <FilterSheet ref={filterRef} onApply={handleApplyFilters} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
});