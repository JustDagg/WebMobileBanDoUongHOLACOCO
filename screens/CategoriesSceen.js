import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Category } from "../data/DataCategory.json";

const numColumn = 2;
const CategoriesScreen = (props, navigation, route) => {
    // const {title} = route.params;
  const [dataList, setDataList] = useState([...Category.filter((e) => e.type === props.route.params.title)]);
  const [search, setSearch] = useState("");

  const searchFilter = (text) => {
    if(text){
      const newData = dataList.filter((item) => {
        const itemData = item.title ? item.title.toLowerCase() : ''.toLowerCase(); 

        const textData = text.toLowerCase(); 
        return itemData.indexOf(textData) > -1;
      });    
      setDataList(newData); 
    setSearch(text); 
    }else{
      setDataList([...Category.filter((e) => e.type === props.route.params.title)]); 
      setSearch(text);
    }
  }

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Details", item)}
        >
          <View key={index} style={styles.itemContainer}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={{ flex: 1, justifyContent: "space-between" }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.search}>
        <View style={styles.searchLeft}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicons
              name="arrow-back-outline"
              size={29}
              color="gray"
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
          <TextInput placeholder="Tìm kiếm đồ uống" value={search} onChangeText={(text) => searchFilter(text)}></TextInput>
        </View>
        <Ionicons name="filter-outline" size={24} color="black" />
      </View>

      <FlatList
        data={dataList}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
        numColumns={numColumn}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "gray",
    alignItems: "center",
  },

  searchLeft: {
    flexDirection: "row",
  },
  itemContainer: {
    width: 192,
    height: 230,
    borderWidth: 1,
    borderColor: "gray",
    marginLeft: 10,
    marginBottom: 10,
  },
  image: {
    width: "98%",
    height: "65%",
    resizeMode: "contain",
  },

  title: {
    fontSize: 16,
    fontWeight: "400",
    marginHorizontal: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 10,
    marginBottom: 5,
  },
});

export default CategoriesScreen;
