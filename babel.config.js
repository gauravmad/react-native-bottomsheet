module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ['./src'],
          alias: {
            "@": "./",
          },
        },
      ],
      ["nativewind/babel"],
      'react-native-reanimated/plugin',  // Add this line
    ],
  };
};
