import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import PostsScreen from "../nestedScreens/PostsScreen";
import MapScreen from "../nestedScreens/MapScreen";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import { back } from "react-native/Libraries/Animated/Easing";

const NestedScreen = createStackNavigator();

export default function PostListScreen() {

   return (
    <NestedScreen.Navigator initialRouteName="Posts"
      >
      <NestedScreen.Screen name="Posts" component={PostsScreen} 
         options={{
          headerStyle : {
            borderTopWidth: 1,
            borderTopColor: "rgba(0, 0, 0, 0.2)",
          },
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 17,
            color: "#212121",
            marginBottom: 5,
          },    
          headerTitleAlign: "center",
          headerLeft: () => {
           back ? null : undefined
          },
          headerRightContainerStyle: { paddingRight: 20, marginBottom: 5},
          headerRight: () => (
           <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Login')}>
            <Feather name="log-out" size={24} color="#BDBDBD" />
           </TouchableOpacity>
          ) }}/>
      <NestedScreen.Screen 
      options={{
        headerShown: true,
        headerTitleAlign: 'center',
      }} name="Map" component={MapScreen}/>
      <NestedScreen.Screen 
      options={{
        headerShown: true,
        headerTitleAlign: 'center',
      }}
        name="Comments" component={CommentsScreen}/>
    </NestedScreen.Navigator>
   )
};