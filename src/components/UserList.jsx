import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import users from "../../users.js";

const UserList = () => {
    return (
        <FlatList
            data={users}
            renderItem={({ item: user }) => (
                <View key={user.id} style={styles.user}>
                    <Text style={styles.text}>ID: {user.id}</Text>
                    <Text style={styles.text}>Name: {user.name}</Text>
                    <Text style={styles.text}>username: {user.username}</Text>
                    <Text style={styles.text}>Phone: {user.phone}</Text>
                    <Text style={styles.text}>Website: {user.website}</Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    text: {
        marginBottom: 5,
    },
    user: {
        marginBottom: 20,
        backgroundColor: "#bbbbbb",
    },
});

export default UserList;
