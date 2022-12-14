import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Meals from "./Pages/Meals/Meals";
import Categories from "./Pages/Categories/Categories";
import Details from "./Pages/Details/Details"

const Stack = createNativeStackNavigator();

function Router () {

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen 
          name="Categories" 
          component={Categories} 
          options={{ title: 'KATEGORİLER',headerStyle: {backgroundColor: '#f4511e',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',}  } }
          
        />

        <Stack.Screen 
          name="Meals" 
          component={Meals} 
          options={{ title: 'YEMEKLER',headerStyle: {backgroundColor: '#f4511e',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',}  } } 
        />

        <Stack.Screen 
          name="Details" 
          component={Details} 
          options={{ title: 'DETAYLAR',headerStyle: {backgroundColor: '#f4511e',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',}  } } 
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;