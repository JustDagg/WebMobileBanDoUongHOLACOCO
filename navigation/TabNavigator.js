import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import MessageScreen from "../screens/MessageScreen";
import AcountScreen from "../screens/AccountScreen";

import {DetailsScreen, DetailsScreenTwo, CategoryScreen, LoginNavigator} from "./ProductsNavigator";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
        showLabel: false, 
        activeTintColor: 'green'
    }}
    >
      <Tab.Screen
        name="Home"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="md-home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={DetailsScreenTwo}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-search-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="notifications-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={LoginNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
