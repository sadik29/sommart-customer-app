import { SafeAreaView } from "react-native-safe-area-context";
import { Platform, View } from "react-native";

export default function TabBarBackground() {
  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{
        backgroundColor: "#ffffff",
        paddingBottom: Platform.OS === "ios" ? 0 : 0,
      }}
    >
      <View
        style={{
          height: 70,
          borderTopWidth: 1,
          borderTopColor: "#eeeeee",
        }}
      />
    </SafeAreaView>
  );
}