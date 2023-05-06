import React from "react";
import MapView, {Marker} from 'react-native-maps';
import { View, StyleSheet, Dimensions } from "react-native";

export default function MapScreen () {

    return (
     <View style={styles.container}>
        <MapView style={styles.mapStyle}
        mapType="standard"
        minZoomLevel={15}
        showsUserLocation={true}
        region={{
            latitude: 50.009781,
            longitude: 36.334315,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,}}>
        <Marker 
         title="I am here"
         coordinate={{ latitude: 50.009781, longitude: 36.334315}}
         description='Hello'/>
        </MapView>
     </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    mapStyle: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});