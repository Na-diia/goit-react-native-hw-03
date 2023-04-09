import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import posts from "../../src/Data/posts";
import Profile from "../components/Profile";
import Post from "../components/Post";

const avatar = require('../../assets/images/user-img.jpg');
const forest = require('../../assets/images/forest.jpg');

export default function PostsScreen({navigation}) {
    return (
     <View style={styles.container}>
      <ScrollView
       contentContainerStyle={{
        gap: 32,
        paddingBottom: 10,
        backgroundColor: "#FFFFFF",
      }}>
        <Profile avatar={avatar} name="Natali Romanenko" email="email@example.com"/>
        {posts.map((el) => (
        <Post key={el.id} image={forest} title={el.title} 
          comment={0} location={el.location}/>
          ))}
          </ScrollView>
     </View>
    )
};

const styles = StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 16,
      gap: 8,
    },
})