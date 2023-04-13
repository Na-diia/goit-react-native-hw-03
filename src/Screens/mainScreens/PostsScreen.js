import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import DefaultScreenPost from "../nestedScreens/DefaultScreenPost";
import MapScreen from "../nestedScreens/MapScreen";
import CommentsScreen from "../nestedScreens/CommentsScreen";

const NestedScreen = createNativeStackNavigator();

export default function PostsScreen({navigation}) {

   return (
    <NestedScreen.Navigator initialRouteName="DefaultScreen" screenOptions={{headerShown: false}}>
      <NestedScreen.Screen name="DefaultScreen" component={DefaultScreenPost}/>
      <NestedScreen.Screen name="MapScreen" component={MapScreen}/>
      <NestedScreen.Screen 
        name="CommentsScreen" component={CommentsScreen}/>
    </NestedScreen.Navigator>
   )
};