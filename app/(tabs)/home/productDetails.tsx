import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/productDetails/Header";
import ImageCarousel from "@/components/productDetails/ImageCarousel";
import TitleSection from "@/components/productDetails/TitleSection";
import PriceAndRating from "@/components/productDetails/PriceAndRating";
import SizeAndColorSelector from "@/components/productDetails/SizeAndColorSelector";
import Description from "@/components/productDetails/DescriptionAndMost";
import QuantityAndBuy from "@/components/productDetails/QuantityAndBuy";


export default function ProductDetailsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView contentContainerStyle={styles.scroll}>
        <TitleSection />
        <ImageCarousel />
        <PriceAndRating />
        <SizeAndColorSelector />
        <Description />
      </ScrollView>
      <View style={styles.footer}>
        <QuantityAndBuy />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    padding: 16,
    paddingBottom: 120,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#E5E5E5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
