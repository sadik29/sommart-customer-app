import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Icons } from "@/assets/Icons";

export default function Header() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper,]}>
      <View style={styles.row}>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Icons.back width={18} height={18} stroke="#1B1B1B" />
          </TouchableOpacity>
          <Text style={styles.title}>Product Details</Text>
        </View>

        <TouchableOpacity style={styles.cartBtn}>
          <Icons.cart_ width={24} height={24} stroke="#1B1B1B" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  row: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  backBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#004E74",
  },
  cartBtn: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#26A4FF",
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "600",
  },
});
