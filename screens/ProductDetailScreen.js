import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  Alert,
  Pressable
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import RNPickerSelect, {
  defaultStyles,
} from "../node_modules/react-native-picker-select";

import { Ionicons } from "@expo/vector-icons";

function ProductDetailsScreen({ navigation, route }) {
  // const { title, image, price } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const sell = () => {
    route.params.price;
  };

  return (
    <View style={{ backgroundColor: "#FF9827", flex: 1 }}>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonLeft}>
          <View>
            <Text style={styles.textTop}>{route.params.price}</Text>
          </View>
          <View>
            <Text style={styles.textTop}>Mua</Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={{ borderBottomWidth: 1, borderColor: "gray" }}>
          <Text
            style={{
              paddingLeft: 15,
              fontSize: 22,
              fontWeight: "500",
              paddingTop: 15,
            }}
          >
            {route.params.title}
          </Text>
          <View
            style={{
              paddingLeft: 15,
              flexDirection: "row",
              paddingTop: 10,
              paddingBottom: 20,
            }}
          >
            <Text style={styles.cond}>100% Ngon</Text>
            <Text style={styles.cond}>Trạng thái: Ngon cực</Text>
          </View>
          <Image
            style={{ width: "100%", height: 250, resizeMode: "contain" }}
            source={{ uri: route.params.image }}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 15,
            }}
          >
            <View>
              <Text
                style={{ fontWeight: "500", marginBottom: 5, fontSize: 15 }}
              >
                Giá bán:
              </Text>
              <Text
                style={{ fontWeight: "600", marginBottom: 5, fontSize: 18 }}
              >
                {route.params.price}
              </Text>
            </View>

            <View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <View style={styles.modalViewTop}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Image
                          style={{
                            width: 100,
                            height: 100,
                            resizeMode: "contain",
                          }}
                          source={{ uri: route.params.image }}
                        />
                        <Text style={{ paddingRight: 90 }}>
                          {route.params.title}
                        </Text>
                      </View>

                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Ionicons
                          name="close-outline"
                          size={30}
                          color="black"
                        />
                      </Pressable>
                    </View>
                  </View>
                </View>
              </Modal>
              <Pressable onPress={() => setModalVisible(true)}>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{ paddingLeft: 15, paddingRight: 15 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              paddingBottom: 10,
              paddingTop: 10,
            }}
          >
            Chi tiết sản phẩm
          </Text>
          <View style={styles.details}>
            <Text style={styles.textDetails}>Ngày ra mắt</Text>
            <Text style={{ fontWeight: "600", fontSize: 17 }}>
              {route.params.releaseDate}
            </Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.textDetails}>Giá bán</Text>
            <Text style={{ fontWeight: "600", fontSize: 17 }}>
              {route.params.retail}
            </Text>
          </View>
        </View>
        <View style={{ padding: 15 }}>
          <Text style={{ fontWeight: "500", fontSize: 15, paddingBottom: 10 }}>
            Mô tả sản phẩm
          </Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Text>
        </View>
        <View style={{ paddingLeft: 15, paddingRight: 15 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              paddingBottom: 10,
              paddingTop: 10,
            }}
          >
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "gray",
    padding: 15,
  },

  buttonLeft: {
    width: 185,
    height: 55,
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 5,

  },

  textTop: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  textBottom: {
    color: "white",
  },

  cond: {
    padding: 5,
    borderWidth: 1,
    marginRight: 10,
    borderColor: "gray",
    borderRadius: 15,
    fontWeight: "600",
    fontSize: 11,
  },

  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingBottom: 10,
    paddingTop: 10,
  },

  textDetails: {
    fontSize: 15,
  },
  button: {
    elevation: 2,
    backgroundColor: "gray",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FF9827",
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textModal: {
    fontSize: 17,
    fontWeight: "600",
    marginHorizontal: 100,
  },

  modalViewTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },
  modalBottom: {
    flexDirection: "row",
  },
});
export default ProductDetailsScreen;
