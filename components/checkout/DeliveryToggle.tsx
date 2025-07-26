import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

const SCREEN_WIDTH = Dimensions.get("window").width;
const TOGGLE_WIDTH = SCREEN_WIDTH - 32;
const TOGGLE_HEIGHT = 50;
const TOGGLE_RADIUS = TOGGLE_HEIGHT / 2;
const THUMB_MARGIN = 2;

type Props = {
  selected: "Delivery" | "Pickup";
  onSelect: (value: "Delivery" | "Pickup") => void;
};

export default function DeliveryToggle({ selected, onSelect }: Props) {
  const translateX = useSharedValue(
    selected === "Pickup" ? TOGGLE_WIDTH / 2 : 0
  );

  useEffect(() => {
    translateX.value = withTiming(
      selected === "Pickup" ? TOGGLE_WIDTH / 2 : 0,
      {
        duration: 250,
      }
    );
  }, [selected]);

  const animatedThumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.wrapper}>
      <View style={styles.track}>
        <Animated.View style={[styles.thumb, animatedThumbStyle]} />
        <TouchableOpacity
          style={styles.option}
          onPress={() => onSelect("Delivery")}
          activeOpacity={1}
        >
          <Text style={[styles.text, selected === "Delivery" && styles.activeText]}>
            Delivery
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => onSelect("Pickup")}
          activeOpacity={1}
        >
          <Text style={[styles.text, selected === "Pickup" && styles.activeText]}>
            Pickup
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 8,
    marginVertical: 16,
  },
  track: {
    width: TOGGLE_WIDTH,
    height: TOGGLE_HEIGHT,
    backgroundColor: "#004B6B",
    borderRadius: TOGGLE_RADIUS,
    flexDirection: "row",
    position: "relative",
    overflow: "hidden",
  },
  thumb: {
    position: "absolute",
    width: TOGGLE_WIDTH / 2 - THUMB_MARGIN * 2,
    height: TOGGLE_HEIGHT - THUMB_MARGIN * 2,
    backgroundColor: "#fff",
    borderRadius: TOGGLE_RADIUS,
    margin: THUMB_MARGIN,
    borderWidth: 2,
    borderColor: "#004B6B",
    zIndex: 1,
  },
  option: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  activeText: {
    color: "#00AEEF",
  },
});
