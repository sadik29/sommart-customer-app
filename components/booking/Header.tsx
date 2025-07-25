import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TextStyle,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Icons} from "@/assets/Icons/index";


type IoniconsName = React.ComponentProps<typeof Ionicons>["name"];
type SvgIconName = keyof typeof Icons;

interface HeaderProps {
  title?: string;
  onBackPress?: () => void;
  showIcon?: boolean;
  iconName?: IoniconsName;
  svgIconName?: SvgIconName;
  iconColor?: string;
  iconStyle?: TextStyle;
  iconPosition?: "left" | "right";
  iconType?: "ionicons" | "svg";
  onIconPress?: () => void;
}

export default function Header({
  title = "Booking",
  onBackPress,
  showIcon = false,
  iconName = "home-outline",
  svgIconName = "Chat", 
  iconColor = "#4FBF67",
  iconStyle = {},
  iconPosition = "left",
  iconType = "ionicons",
  onIconPress = onBackPress
}: HeaderProps) {
  const navigation = useNavigation();
  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  // const renderIcon = () => {
  //   if (!showIcon) return null;
  
  //   if (iconType === "svg") {
  //     const IconComponent = Icons[svgIconName];
  //     return (
  //       <View style={iconPosition === "left" ? styles.leftIcon : styles.rightIcon}>
  //         <IconComponent width={24} height={24} fill={iconColor} />
  //       </View>
  //     );
  //   } else {

  //     return (
  //       <Ionicons
  //         name={iconName}
  //         size={24}
  //         color={iconColor}
  //         style={[iconPosition === "left" ? styles.leftIcon : styles.rightIcon, iconStyle]}
  //       />
  //     );
  //   }
  // };


  const renderIcon = () => {
    if (!showIcon) return null;
  
    const iconWrapperStyle =
      iconPosition === "left" ? styles.leftIcon : styles.rightIcon;
  
    if (iconType === "svg") {
      const IconComponent = Icons[svgIconName];
      return (
        <TouchableOpacity onPress={onIconPress} style={iconWrapperStyle} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <IconComponent width={24} height={24} fill={iconColor} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={onIconPress} style={iconWrapperStyle} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Ionicons
            name={iconName}
            size={24}
            color={iconColor}
            style={[iconStyle]}
          />
        </TouchableOpacity>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBackPress}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="#2F2F3F" />
          </TouchableOpacity>

          <View style={styles.titleContainer}>
            {iconPosition === "left" && renderIcon()}
            <Text style={styles.title}>{title}</Text>
            {iconPosition === "right" && renderIcon()}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    zIndex: 50,
    marginBottom: 0,
    ...Platform.select({
      ios: {
        paddingTop: 50,
      },
      android: {
        paddingTop: 50,
      },
    }),
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 0,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Platform.select({
      ios: 25,
      android: 20,
    }),
    height: Platform.select({
      ios: 36,
      android: 42,
    }),
  },
  backButton: {
    position: "absolute",
    left: 0,
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    right: 5,
    position: "absolute",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2F2F3F",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
