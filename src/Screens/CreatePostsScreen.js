import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform} from "react-native";
import { Feather, AntDesign } from '@expo/vector-icons';
import { StatusBar} from 'expo-status-bar';

const TabCreate = createBottomTabNavigator();

const CreatePost =() => {

    return (
        <View style={styles.container}>
            <View style={styles.contentImg}>
            <TouchableOpacity activeOpacity={0.5} style={styles.cameraWrap}>
            <AntDesign name="camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
            </View>
          <Text style={styles.underText}>Upload a photo, please!</Text>
          <View style={styles.addPostForm}>
            <TextInput placeholder="Title..." inputMode="text" style={styles.input} />
            <TextInput placeholder="Locality..." inputMode="navigation" style={styles.input}/>
          <TouchableOpacity activeOpacity={0.5} style={styles.addBtn}>
           <Text style={styles.addText}>Add post</Text>
          </TouchableOpacity>
          </View>
          <StatusBar style="auto"/>
        </View>
    )
}

export default function CreatePostsScreen ({navigation}) {

    return (
      <TabCreate.Navigator initialRouteName="Create"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
            borderTopColor: "#FFFFFF",
            shadowColor: "#FFFFFF",
        },
      }}>
       <TabCreate.Screen 
         options={{
            tabBarIcon: ({focused, size, color}) => {
              return <TouchableOpacity activeOpacity={0.5} style={styles.deleteBtn}>
              <Feather name="trash-2" size={24} color="#DADADA" />
              </TouchableOpacity>
            },
            headerLeft: () => (
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Posts')}>
                 <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
            ),
            headerLeftContainerStyle: {
                paddingLeft: 16,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontWeight: "500",
                fontSize: 17,
                color: "#212121",
                marginBottom: 5,
                marginRight: 15,
            },
            headerStyle: {
                borderTopWidth: 1,
                borderTopColor: "rgba(0, 0, 0, 0.2)",
            }
         }}
       name="Create post" component={CreatePost}/>
      </TabCreate.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 16,
        flex: 1, 
    },
    contentImg: {
        flex: 2,
        width: '100%',
        maxHeight: '40%',
        backgroundColor: '#F6F6F6',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E8E8E8",  
        marginTop: 32,
        marginBottom: 8,
        marginHorizontal: 16,
    },
    deleteBtn: {
        width: 70,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#F6F6F6",
        alignItems: "center",
        justifyContent: "center",
    },
    cameraWrap: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
    },
    underText: {
      fontSize: 16,
      color: "#BDBDBD",
      alignSelf: "flex-start",
    },
    addPostForm: {
        flex: 3,
    },
    input: {
        width: 343,
        height: 50,
        borderRadius: 8,
        marginTop: 32,
        padding: 16,
        fontSize: 16,
        lineHeight: 19,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 2,
    },
    addBtn: {
        backgroundColor: '#E8E8E8',
        height: 50,
        width: 343, 
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        marginTop: 32,
    },
    addText: {
        color: '#BDBDBD',
        fontSize: 16, 
    },
});