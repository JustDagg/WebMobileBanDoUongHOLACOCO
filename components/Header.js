import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomHeader = (props) => {
  return (
    <View>
      <View>
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </View>
      <View>
        <Ionicons name="add-outline" size={24} color="black" />
        <Ionicons name="share-outline" size={24} color="black" />
      </View>
    </View>
  );
};

export default CustomHeader;