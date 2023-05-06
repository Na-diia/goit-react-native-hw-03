import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather} from '@expo/vector-icons'; 
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import PostListScreen from "./PostListScreen";
import CreatePostsScreen from "./CreatePostScreen/CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const MainTab = createBottomTabNavigator();

export default function Home() {
   const navigation = useNavigation();

   return(
    <MainTab.Navigator initialRouteName="PostListScreen" screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 80,
        paddingLeft: 64,
        paddingRight: 64,
        paddingTop: 9,
        paddingBottom: 34,
        borderTopWidth: 1,
        borderTopColor: "rgba(0, 0, 0, 0.2)",
      },
      tabBarIcon: ({focused, size, color}) => {
        return <Ionicons name="grid-outline" size={24} color="rgba(33, 33, 33, 0.8)" />
      },
    }} >
    <MainTab.Screen 
    options={{
      headerShown: false,
    }} 
    name="PostListScreen" component={PostListScreen} />

    <MainTab.Screen 
      options={{
        tabBarIcon: () => {
          return <TouchableOpacity activeOpacity={0.5} style={styles.addBtn}  onPress={() => navigation.navigate('Create')}>
           <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        },
        headerShown: false,
        tabBarStyle: { display: "none" },
      }}
    name="Create" component={CreatePostsScreen} />

    <MainTab.Screen 
     options={{
      tabBarIcon: ({focused, size, color}) => {
        return <Feather name="user" size={24} color="#212121cc" />
      },
      headerShown: false,
     }}
    name="ProfileScreen" component={ProfileScreen} />
    </MainTab.Navigator>
   );
};

const styles = StyleSheet.create({
    addBtn: {
      width: 70,
      height: 40,
      backgroundColor: "#FF6C00",
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    addText: {
      color: "#FFFFFF",
      fontSize: 23,
    },
});