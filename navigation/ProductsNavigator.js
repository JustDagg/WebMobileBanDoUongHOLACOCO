import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import SearchScreen from "../screens/SearchScreen";
import CategoriesScreen from "../screens/CategoriesSceen";
import AccountScreen from "../screens/AccountScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

function CustomHeader({navigation}) {
  return (
    <View>
      <View style={{ flexDirection: "row", marginLeft: 260 }}>
        <TouchableOpacity
          onPress={() => Alert.alert("You need to be logged in to perform this action.")}
        >
          <Ionicons
            name="add-outline"
            size={24}
            color="black"
            style={{ paddingRight: 20 }}
          />
        </TouchableOpacity>

        <Ionicons name="share-outline" size={24} color="black" />
      </View>
    </View>
  );
}

const DetailsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={ProductDetailScreen}
        options={{
          headerTitle: (props) => <CustomHeader {...props} />,
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoriesScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export { DetailsScreen };

const DetailsScreenTwo = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={ProductDetailScreen}
        options={{
          headerTitle: (props) => <CustomHeader {...props} />,
          headerTintColor: "black",
        }}
      />
    </Stack.Navigator>
  );
};

export { DetailsScreenTwo };

const LoginNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
    >
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: false,
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerTitle: false,
          headerTintColor: "black",
        }}
      />
    </Stack.Navigator>
  );
};

export { LoginNavigator };

const LoginNavigatorTwo = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreenTwo}
        options={{
          headerTitle: false,
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: false,
        }}
      />
    </Stack.Navigator>
  );
};

export { LoginNavigatorTwo };
