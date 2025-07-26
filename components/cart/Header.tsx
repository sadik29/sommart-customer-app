import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  title: string;
};

export default function CartHeader({ title }: Props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={18} color="#005B7F" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
    marginTop: 20,
  },
  wrapper: {
    backgroundColor: "#fff",
  },
  container: {
    marginLeft: 8,

    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: "#fff",
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 6,
    borderColor: "#005B7F",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#005B7F",
  },
});
