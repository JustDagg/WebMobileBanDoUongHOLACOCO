import * as React from "react";
import { Button, View, Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import {DetailsScreen} from "./navigation/ProductsNavigator";
import MyTabs from "./navigation/TabNavigator";

function App() {
  return (
    <NavigationContainer>
      {/* <DetailsScreen /> */}
      <MyTabs/>
    </NavigationContainer>
  );
}

export default App;
