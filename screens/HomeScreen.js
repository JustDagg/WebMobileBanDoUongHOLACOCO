import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {
  category,
  sneaker,
  popular,
  trending,
  featured,
  bags,
} from "../data/Data.json";
import { Ionicons } from "@expo/vector-icons";
import Items from "../components/Items";

function HomeScreen({ props, navigation }) {
  // const [dataCategory, setDataCategory] = useState(category);

  return (
    <SafeAreaView style={{ backgroundColor: "#FF9827", flex: 1 }}>
      <View>
        <Image
          source={{
            uri: "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/305455256_375135028146745_8197772891064627228_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=T4rz07x7XKkAX8upoyZ&_nc_ht=scontent.fhan14-1.fna&oh=00_AfC1dFpzbDetSpgkSxpFOwV_hKdEph5Ba-Y8gvL6gjSCkQ&oe=6398ACF6",
          }}
          style={{ width: "100%", height: 160 }}
        />
      </View>
      <ScrollView>
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Các loại đồ uống 
          </Text>

          <View style={{ paddingBottom: 15, paddingTop: 15 }}>
            <ScrollView
              horizontal={true} //kéo ngang
              showsHorizontalScrollIndicator={false}
            >
              {category.map((l, i) => (
                <TouchableOpacity key={i} onPress={() => navigation.navigate("Category", l)}> 
                  <View style={{ alignItems: "center" }}>
                    <Image style={styles.image} source={{ uri: l.image }} />
                    <Text style={{ fontWeight: "500" }}>{l.title}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <Text style={{ fontSize: 18, fontWeight: "600", paddingBottom: 15 }}>
            Sản phẩm nổi bật
          </Text>
          <Items name={sneaker} navigation={navigation} />

          {/* ============================ popular brand ============================ */}
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Sản phẩm bán chạy</Text>
          <View style={{ paddingBottom: 15, paddingTop: 15 }}>
            <ScrollView
              horizontal={true} //kéo ngang
              showsHorizontalScrollIndicator={false}
            >
              {popular.map((l, i) => (
                <View key={i} style={{ alignItems: "center" }}>
                  <Image style={styles.image2} source={{ uri: l.image }} />
                </View>
              ))}
            </ScrollView>
          </View>

          {/* ============================ trending  ============================ */}
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Đồ uống mới có
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 15,
              }}
            >
              <Text style={{ color: "green", fontSize: 15 }}>See All</Text>
              <Ionicons name="arrow-forward-outline" size={20} color="green" />
            </View>
          </View>
          <Items name={trending} navigation={navigation} />

          {/* ============================ featured collectibles  ============================ */}
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Đồ uống signature
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 15,
              }}
            >
              <Text style={{ color: "green", fontSize: 15 }}>See All</Text>
              <Ionicons name="arrow-forward-outline" size={20} color="green" />
            </View>
          </View>
          <Items name={featured} navigation={navigation} />

          <View>
            <Image
              style={{ width: "100%", height: 500, resizeMode: "contain" }}
              source={{
                uri: "https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/196789994_112182564427249_62671784615613292_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jE_y_rtsU7sAX9p4FFZ&_nc_oc=AQmeJBHlmkyleyTZMenY0NuQ6kmoEzw2umn5SoF7Rit28wfwz5LhHNVsBGNwfHvYGJBIb_pDKBpJTgcgCMvAvfin&_nc_ht=scontent.fhan14-3.fna&oh=00_AfBZVk7X8gq8IcWcKeZuI_ZW-xohykhJPhC1RjYqm0u9Ag&oe=63BD3807",
              }}
            />
          </View>

          {/* ============================ bags  ============================ */}
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Giảm giá sốc
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 15,
              }}
            >
              <Text style={{ color: "green", fontSize: 15 }}>See All</Text>
              <Ionicons name="arrow-forward-outline" size={20} color="green" />
            </View>
          </View>
          <Items name={bags} navigation={navigation} />

          <View>
            <Image
              style={{ width: "100%", height: 500, resizeMode: "contain" }}
              source={{
                uri: "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/199850204_109360678042771_3308851287236479356_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=GRgPv1whP2kAX_c9_P9&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAo_z05iy56s_4ZNQcxTjyjSoWOFL4EPAAr6gR9B15kLw&oe=63BD5E71",
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
  image2: {
    width: 155,
    height: 135,
    marginRight: 10,
    marginBottom: 15,
    resizeMode: "contain",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 15,
    backgroundColor: "#FF9827",
  },
});

export default HomeScreen;
