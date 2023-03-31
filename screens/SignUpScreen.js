import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";

import login from "../data/Data.json";

const SignUpScreen = (props) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/190295710_107740411538131_5281152924346903149_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=On7qGoLKaT4AX-e9ixv&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAbKHGtn8X8GIR0tp66JFXpccELmvJKlM4X_ETqj7a1Jg&oe=63BD4EE8",
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
          <View style={styles.loginWithContainer}>
            <Ionicons name="ios-logo-google" size={24} color="black" />
            <Text style={{ fontSize: 17, fontWeight: "500" }}>
              Đăng nhập với với Google
            </Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
          <View style={styles.loginWithContainer}>
            <Ionicons name="ios-logo-facebook" size={24} color="black" />
            <Text style={{ fontSize: 17, fontWeight: "500" }}>
              Đăng nhập với Facebook
            </Text>
          </View>
        </View>
        <View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{ fontWeight: "600", fontSize: 20, paddingVertical: 20 }}
            >
              Hoặc
            </Text>
          </View>
          <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
            <View style={{ paddingBottom: 20 }}>
              <View style={styles.loginContainer}>
                <TextInput placeholder="First Name" />
              </View>
            </View>
            <View style={{ paddingBottom: 20 }}>
              <View style={styles.loginContainer}>
                <TextInput placeholder="Last Name" />
              </View>
            </View>
            <View style={{ paddingBottom: 20 }}>
              <View style={styles.loginContainer}>
                <TextInput placeholder="Email Address" />
              </View>
            </View>
            <View style={styles.loginContainer}>
              <TextInput placeholder="Password" />
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 30, paddingVertical: 30 }}>
          <View style={styles.btnLogin}>
            <Text style={{ color: "white", fontSize: 20 }}>Sign Up</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    paddingVertical: 20,
  },
  logo: {
    width: "100%",
    height: 40,
    resizeMode: "contain",
  },
  loginWithContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  loginContainer: {
    padding: 15,
    borderWidth: 1,
    borderColor: "gray",
  },
  btnLogin: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "gray",
  },
});

export default SignUpScreen;
