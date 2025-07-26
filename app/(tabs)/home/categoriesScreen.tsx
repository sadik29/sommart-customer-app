import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/categories/Header";
import CategoriesGrid from "@/components/categories/CategoriesGrid";
import { useNavigation } from "expo-router";

export default function CategoriesScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea} edges={["left", "right"]}>
      <Header onBackPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <CategoriesGrid />
      </View>
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
    paddingTop: 8,
  },
});
