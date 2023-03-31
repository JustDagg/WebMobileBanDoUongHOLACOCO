import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

const Account = (props) => {
  return (
    <View>
      <View style={{paddingLeft: 15}}>
        <Text style={styles.accountTitle}>{props.title}</Text>
        <Text style={styles.accountContent}>{props.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accountTitle: {
    fontWeight: "600",
    fontSize: 15,
  },
  accountContent: {
    color: "gray",
  },
});

export default Account;
