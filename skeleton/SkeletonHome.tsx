import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  FadeIn,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const SkeletonHome = () => {
  const shimmerTranslate = useSharedValue(-Dimensions.get("window").width);

  useEffect(() => {
    shimmerTranslate.value = withRepeat(
      withTiming(Dimensions.get("window").width, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, []);

  const shimmerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shimmerTranslate.value }],
  }));

  const Skeleton = ({ style }: { style: any }) => (
    <View style={[style, styles.skeleton]}>
      <Animated.View style={[StyleSheet.absoluteFill, shimmerStyle]}>
        <LinearGradient
          colors={["transparent", "rgba(255,255,255,0.4)", "transparent"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <Animated.View entering={FadeIn.duration(300)} style={styles.container}>
        {/* Header */}
        <View style={styles.row}>
          <Skeleton style={styles.avatar} />
          <View style={styles.nameBlock}>
            <Skeleton style={styles.nameLine1} />
            <Skeleton style={styles.nameLine2} />
          </View>
          <Skeleton style={styles.avatar} />
        </View>

        {/* Transport Toggle */}
        <Skeleton style={styles.transportToggle} />

        {/* Search Form */}
        <Skeleton style={styles.searchForm} />

        {/* Special Offers */}
        <Skeleton style={styles.specialOffers} />

        {/* Promo Banner */}
        <Skeleton style={styles.promoBanner} />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  skeleton: {
    backgroundColor: "#E8E8E8",
    overflow: "hidden",
    borderRadius: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 12,
  },
  nameBlock: {
    flex: 1,
    marginHorizontal: 12,
    gap: 6,
  },
  nameLine1: {
    width: 120,
    height: 14,
    borderRadius: 4,
  },
  nameLine2: {
    width: 160,
    height: 16,
    borderRadius: 4,
  },
  transportToggle: {
    height: 40,
    borderRadius: 30,
    marginTop: 20,
  },
  searchForm: {
    height: 180,
    borderRadius: 16,
    marginTop: 20,
  },
  specialOffers: {
    height: 100,
    borderRadius: 20,
    marginTop: 20,
  },
  promoBanner: {
    height: 140,
    borderRadius: 20,
    marginTop: 20,
  },
});

export default SkeletonHome;
