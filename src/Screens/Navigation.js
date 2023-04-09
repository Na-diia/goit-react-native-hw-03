import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
import Home from "./Home";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Stack = createNativeStackNavigator();

export default function Navigation () {

    return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Create post" component={CreatePostsScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
    );
};