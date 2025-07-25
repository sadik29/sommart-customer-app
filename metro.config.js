const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// SVG configuration
config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== "svg");
config.resolver.sourceExts = [...config.resolver.sourceExts, "svg"];
config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");

module.exports = config;