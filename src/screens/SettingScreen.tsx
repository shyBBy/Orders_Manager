import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, BottomNavigation } from 'react-native-paper';
import {styles} from "../styles/style";


export const SettingScreen = () => {
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">Ustawienia</Text>
        </View>
    );
}