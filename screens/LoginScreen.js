import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";


const LoginScreen = ({navigation}) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [textError, setTextError] = useState("");
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch('https://haiminh21.github.io/User.json')
    .then(Response=>Response.json())
    .then(json => {
        setData(json.User)
    })
    //function a(function b(function c())) 
    .catch(error =>console.log(error)) // promise xu ly callback function
  },[])
  const OnSubmit = () => {
    console.log(user)
    console.log(password)
    if (user != "" && password != "") {
      let dem = 0;
      data.forEach((e) => {
        if (user === e.userName && password === e.Password) {
          console.log("Sucessfully !!")
          dem++;
        }
      });
      if (dem > 0) {
        navigation.navigate("Home");
        setTextError("");
      } else {
        Alert(setTextError("sai"))
      }
    }
  };

  return (
    <View style={{height: 80,}}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/301948249_375135031480078_1398748990486696682_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MHywS8hu4IwAX9bFYKc&_nc_ht=scontent.fhan14-3.fna&oh=00_AfB8Qbc8ERsuepYuABPCBz592waXknLWv3K9cFLuaFnc7Q&oe=639B5C1C",
          }}
        />
      </View>
      <View style={{ paddingHorizontal: 30, paddingVertical: 10,backgroundColor:"#FF9827" }}>
        <View style={styles.loginWithContainer}>
          <Ionicons name="ios-logo-google" size={24} color="black" />
          <Text style={{ fontSize: 17, fontWeight: "500" }}>
            Đăng nhập với Google
          </Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: 30, paddingVertical: 10,backgroundColor:"#FF9827" }}>
        <View style={styles.loginWithContainer}>
          <Ionicons name="ios-logo-facebook" size={24} color="black" />
          <Text style={{ fontSize: 17, fontWeight: "500" }}>
            Đăng nhập với Facebook
          </Text>
        </View>
      </View>

      {/* <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
        <View style={styles.loginWithContainer}>
          <Ionicons name="ios-logo-apple" size={24} color="black" />
          <Text style={{ fontSize: 17, fontWeight: "500" }}>
            Continue with Apple
          </Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
        <View style={styles.loginWithContainer}>
          <Ionicons name="ios-logo-twitter" size={24} color="black" />
          <Text style={{ fontSize: 17, fontWeight: "500" }}>
            Continue with Twitter
          </Text>
        </View>
      </View> */}
      <View>
        <View style={{ alignItems: "center",backgroundColor:"#FF9827"}}>
          <Text
            style={{ fontWeight: "600", fontSize: 20, paddingVertical: 20 }}
          >
            Hoặc
          </Text>
        </View>
        <View style={{ paddingHorizontal: 30, paddingVertical: 15,marginBottom: 125,backgroundColor:"#FF9827" }}>
          <View style={{ paddingBottom: 20 }}>
            <View style={styles.loginContainer}>
              <TextInput
                placeholder="UserName"
                value={user}
                onChangeText={(value) => {
                  setUser(value);
                  setTextError("");
                }}
              />
            </View>
          </View>
          <View style={styles.loginContainer}>
            <TextInput 
              placeholder="Password" 
              secureTextEntry = {true}
              value={password}
              onChangeText={(value) => {
                setPassword(value);
                setTextError("");
              }}
              />
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 18, paddingVertical: 18,backgroundColor:"#FF9827" }}>
        <TouchableOpacity onPress={() => OnSubmit()}>
          <View style={styles.btnLogin}>
            <Text style={{ color: "white", fontSize: 20 }}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    paddingVertical: 20,
    backgroundColor: "#FF9827",
  },
  logo: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  loginWithContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#D3B673",
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
    paddingTop: 10,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#D3B673",
  },
});

export default LoginScreen;
