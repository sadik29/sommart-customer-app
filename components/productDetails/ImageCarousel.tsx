import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState, useRef } from "react";

const images = [
  require("@/assets/images/lipstick1.png"),
  require("@/assets/images/lipstick1.png"),
  require("@/assets/images/lipstick1.png"),
];

const { width } = Dimensions.get("window");

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: any) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / (width - 32));
    setIndex(newIndex);
  };

  const scrollToIndex = (i: number) => {
    flatListRef.current?.scrollToIndex({ index: i, animated: true });
    setIndex(i);
  };

  return (
    <View style={styles.container}>
      {/* Main Image Box */}
      <View style={styles.imageBox}>
        <FlatList
          ref={flatListRef}
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => (
            <View style={styles.mainImageContainer}>
              <Image
                source={item}
                style={styles.mainImage}
                resizeMode="contain"
              />
            </View>
          )}
        />

        {/* Dot + Index INSIDE the imageBox */}
        <View style={styles.indicatorOverlay}>
          <View style={styles.dots}>
            {images.map((_, i) => (
              <View
                key={i}
                style={[styles.dot, index === i && styles.activeDot]}
              />
            ))}
          </View>
          <Text style={styles.indexLabel}>{`${index + 1}/${images.length}`}</Text>
        </View>
      </View>

      {/* Thumbnails below imageBox, left-aligned */}
      <View style={styles.thumbnailRow}>
        {images.map((img, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => scrollToIndex(i)}
            style={[
              styles.thumbWrapper,
              index === i && styles.activeThumbWrapper,
            ]}
          >
            <Image source={img} style={styles.thumbnail} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    alignItems: "center",
    marginTop: -14,
  },
  imageBox: {
    borderColor: "#00AEEF",
    borderRadius: 12,
    overflow: "hidden",
    width: width - 32,
    height: 280,
    backgroundColor: "#fff",
    position: "relative",
  },
  mainImageContainer: {
    width: width - 32,
    height: 280,
    alignItems: "center",
    justifyContent: "center",
  },
  mainImage: {
    width: "80%",
    height: "80%",
  },
  indicatorOverlay: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D9D9D9",
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: "#00AEEF",
    width: 16,
  },
  indexLabel: {
    fontSize: 12,
    color: "#00AEEF",
    fontWeight: "500",
  },
  thumbnailRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    marginTop: 12,
    gap: 8,
  },
  thumbWrapper: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 6,
    padding: 2,
    backgroundColor: "#fff",
  },
  activeThumbWrapper: {
    borderColor: "#00AEEF",
  },
  thumbnail: {
    width: 36,
    height: 36,
    resizeMode: "contain",
  },
});
