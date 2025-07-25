import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

const { width } = Dimensions.get("window");

const banners = [
  {
    id: "1",
    title: "Get 50% off\nany Transaction",
    desc: "Fast, secure, and affordable shipping\nfrom any country to another.\nAll in one app.",
    background: require("@/assets/images/banner.png"),
  },
  {
    id: "2",
    title: "Shop Smart\nSave More",
    desc: "Exclusive discounts on top brands\nfor a limited time.",
    background: require("@/assets/images/banner.png"),
  },
  {
    id: "3",
    title: "New Deals\nEvery Day",
    desc: "Don’t miss out on daily promotions\nand flash sales.",
    background: require("@/assets/images/banner.png"),
  },
];

export default function BannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / (width - 32));
    setActiveIndex(index);
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={banners}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={({ item }) => (
          <ImageBackground
            source={item.background}
            style={styles.card}
            imageStyle={styles.bgImage}
          >
            <View style={styles.textWrapper}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>
          </ImageBackground>
        )}
      />
      <View style={styles.dots}>
        {banners.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              activeIndex === i ? styles.dotActive : styles.dotInactive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
  },
  card: {
    width: width - 32,
    height: 150,
    marginHorizontal: 16,
    justifyContent: "center",
    borderRadius: 20,
    overflow: "hidden",
  },
  bgImage: {
    resizeMode: "cover",
    borderRadius: 20,
  },
  textWrapper: {
    paddingHorizontal: 20,
    width: "70%",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },
  desc: {
    color: "#F0F0F0",
    fontSize: 14,
    lineHeight: 20,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: "#2AA6FF",
    width: 24,
    borderRadius: 5,
  },
  dotInactive: {
    backgroundColor: "#D6E9F7",
    width: 8,
  },
});
