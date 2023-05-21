import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import {theme} from "../../../theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.screen.background.dark,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.text
    },
});

export const ListAllStatueses = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Lista wszystkich statusów zamówień i miejsce do zarządzania nimi.</Text>
        </View>
    );
}

