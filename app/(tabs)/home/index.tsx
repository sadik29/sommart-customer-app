import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/home/Header";
import Categories from "@/components/home/Categories";
import BannerCarousel from "@/components/home/BannerCarousel";
import Offers from "@/components/home/Offers";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#F5F7FA" }}
      edges={["left", "right", "bottom"]}
    >
      <Header />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Categories />
        <BannerCarousel />
        <Offers />
      </ScrollView>
    </SafeAreaView>
  );
}
