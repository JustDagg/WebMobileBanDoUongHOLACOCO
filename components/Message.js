import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Message = (props) => {
  return (
    <View style={styles.messageContainer}>
      <View style={styles.iconLeft}>
        <Ionicons name="ellipse" size={15} color="green" />
      </View>

      <View>
        <View style={styles.textBottomContainer}>
          <Text style={styles.textBottomTop}>{props.title}</Text>
          <Text style={styles.textBottomBt}>{props.content}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "gray",
    backgroundColor:"#FF9827",
  },
  iconLeft: {
    paddingRight: 10,
  },
  textBottomContainer: {
    paddingRight: 10,
  },
  textBottomTop: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
  },
  textBottomBt: {
    fontSize: 14,
  },
});

export default Message;
