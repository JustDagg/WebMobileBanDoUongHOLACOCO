import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { category, sneaker } from "../data/Data.json";



const ListCategory = (props) => {
  const [dataCategory, setDataCategory] = useState(category);

  return (
    <View>
      <ScrollView>
        
      </ScrollView>
    </View>
  );
};

export default ListCategory;
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginBottom: 15,
  },

  item: {
    width: 130,
    height: 220,
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 10,
    marginBottom: 20,
    backgroundColor: "#FF9827",
    padding: 7,
  },
  imageItems: {
    width: "100%",
    height: "60%",
    resizeMode: "contain",
  },
  text: {
    flex: 1,
    justifyContent: "space-between",
  },
});
