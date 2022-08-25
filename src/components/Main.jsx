import React from "react";
import Constants from "expo-constants";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import UserList from "./UserList";

const Main = () => {
    const image = {
        uri: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    };
    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
            <Text style={styles.title}>UserList to JSONPlaceholder</Text>
            <ImageBackground source={image} resizeMode="cover">
                <UserList />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default Main;
