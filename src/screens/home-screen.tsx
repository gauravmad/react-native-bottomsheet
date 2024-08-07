import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useBottomSheet } from "../hooks/useBottomSheet";

export const HomeMain: React.FC = () => {

  const {ref, toggle, BottomSheet} = useBottomSheet();

  return (
    <View className="flex items-center h-screen">

      <Text className="text-[2.5vh] text-black mt-[10vh] ">
        This is Home Screen
      </Text>

      <TouchableOpacity className="my-[2vh]" onPress={toggle}>
        <Text className="bg-[#fd6500] px-[2vh] py-[1.5vh] text-[2.2vh] font-semibold text-white">Open Bottomsheet</Text>
      </TouchableOpacity>

        <BottomSheet ref={ref}>
            <Text className="text-black text-[2.5vh] mt-[10vh] ">
            This is BottomSheet
            </Text>
        </BottomSheet>

    </View>
  );
};
