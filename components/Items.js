import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Items = (props, navigation) => {
  return (
    <View>
      <ScrollView
        horizontal={true} //kéo ngang
        showsHorizontalScrollIndicator={false}
      >
        {props.name.map((l, i) => (
          <TouchableOpacity key={i} onPress={() => props.navigation.navigate("Details", l)}>
            <View style={styles.item}>
              <Image style={styles.imageItems} source={{ uri: l.image }} />
              <View style={styles.text}>
                <Text style={{ fontWeight: "400" }}>{l.title}</Text>
                <Text style={{ fontWeight: "700", fontSize: 17 }}>
                  {l.price}
                </Text>
                <Text style={{ fontWeight: "500" }}>{l.sold}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginBottom: 15,
  },

  item: {
    width: 150,
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

export default Items;


