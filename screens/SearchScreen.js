import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";

import { category } from "../data/Data.json";
import { Category } from "../data/DataCategory.json";
// const WIDTH = Dimensions.get("window").width;
const numColumn = 2;
const SearchScreen = (props, navigation, route) => {
  const { textScroll, scrollNav } = styles;
  const [title, setTitle] = useState("Sneaker");
  const [dataList, setDataList] = useState(Category);
  const [search, setSearch] = useState("");

  const setTitleFilter = (title) => {
    if (title) {
      setDataList([...Category.filter((e) => e.type === title)]);
    } else {
      setDataList(Category);
    }
    setTitle(title);
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = dataList.filter((item) => {
        const itemData = item.title
          ? item.title.toLowerCase()
          : "".toLowerCase();

        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setDataList(newData);
      setSearch(text);
    } else {
      setDataList([
        ...Category.filter((e) => e.type === title),
      ]);
      setSearch(text);
    }
  };

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
              <Text style={{ marginHorizontal: 10 }}>Xem chi tiết</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#FF9827", flex: 1 }}>
      <View style={styles.search}>
        <View style={styles.searchLeft}>
          <Ionicons
            name="search-outline"
            size={24}
            color="gray"
            style={{ marginRight: 15 }}
          />
          <TextInput
            placeholder="Tìm kiếm đồ uống"
            value={search}
            onChangeText={(text) => searchFilter(text)}
          ></TextInput>
        </View>
        <Ionicons name="filter-outline" size={24} color="black" />
      </View>
      <View style={scrollNav}>
        <ScrollView
          horizontal={true} //kéo ngang
          showsHorizontalScrollIndicator={false}
        >
          {category.map((l, i) => (
            <View key={i}>
              <TouchableOpacity onPress={() => setTitleFilter(l.title)}>
                <Text
                  style={[textScroll, title === l.title && styles.textAvtive]}
                >
                  {l.title}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
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

  scrollNav: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  textScroll: {
    paddingRight: 15,
    fontSize: 17,
    color: "#313133",
  },
  textAvtive: {
    color: "#2D3032",
    fontWeight: "600",
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

export default SearchScreen;
