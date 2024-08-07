import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useBottomSheet } from "../hooks/useBottomSheet";

export const HomeMain: React.FC = () => {
  const { ref, toggle, BottomSheet } = useBottomSheet();

  return (
    <View className="flex items-center bg-[#fff] h-full">
      <Text className="text-[2.8vh] font-bold text-[#111] mt-[10vh] ">
        This is Home Screen
      </Text>

      <TouchableOpacity className="my-[2vh]" onPress={toggle}>
        <Text className="bg-[#fd6500] px-[2vh] py-[1.5vh] text-[2.2vh] font-bold rounded-lg text-white">
          Open Bottomsheet
        </Text>
      </TouchableOpacity>

      <BottomSheet ref={ref}>
        <Text className="text-black text-[2.5vh] p-[2vh] h-full">
          This is BottomSheet
        </Text>
      </BottomSheet>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: "orange",
    opacity: 0.6,
  },
});
