import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import Account from "../components/Account";

const AccountScreen = (props, navigation) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.textTitleContainer}>
        <Text style={styles.textTitle}>Account</Text>
      </View>
      <ScrollView>
        <View>
          <View style={styles.accountContainer}>
            <Ionicons name="person-outline" size={24} color="gray" />
            <Account
              title="Profile"
              content="Edit your Password, Name, Shoe Size, Email, Username"
            />
          </View>

          <View style={styles.accountContainer}>
            <Ionicons name="lock-closed-outline" size={24} color="gray" />
            <Account title="Security" content="Two-Step Verification" />
          </View>

          <View style={styles.accountContainer}>
            <Ionicons name="cart-outline" size={24} color="gray" />
            <Account
              title="Buying"
              content="Active Bids, In-Progress, Completed Orders"
            />
          </View>
          <View style={styles.accountContainer}>
            <Ionicons name="logo-buffer" size={24} color="gray" />
            <Account
              title="Selling"
              content="Active Asks, Sales, Seller Profile"
            />
          </View>

          <View style={styles.accountContainer}>
            <Ionicons name="podium-outline" size={24} color="gray" />
            <Account title="Portfolio" content="See the value of your Items" />
          </View>
          <View style={styles.accountContainer}>
            <Ionicons
              name="md-checkmark-circle-outline"
              size={24}
              color="gray"
            />
            <Account title="Following" content="Products you're watching" />
          </View>
          <View style={styles.accountContainer}>
            <Ionicons name="ios-settings-outline" size={24} color="gray" />
            <Account
              title="Settings"
              content="Billing, Shipping, Payout, Notifinocations "
            />
          </View>
          <View style={styles.accountContainer}>
            <Ionicons name="newspaper-outline" size={24} color="black" />
            <Account
              title="Blog"
              content="The news about sneaker, streetwear,..."
            />
          </View>
        </View>
        <View style={styles.loginContainer}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  accountContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  textTitle: {
    fontSize: 17,
    fontWeight: "600",
  },
  textTitleContainer: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingVertical: 10,
  },
  accountTitle: {
    fontWeight: "600",
    fontSize: 15,
  },
  accountContent: {
    color: "gray",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 40,
  },
  textContainer: {
    width: 130,
    height: 30,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 17,
  },
});

export default AccountScreen;
