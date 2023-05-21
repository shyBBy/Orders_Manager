import React, {useEffect} from "react";
import {Linking, View} from "react-native";
import { Text, BottomNavigation } from 'react-native-paper';

export const ShopScreen = () => {
    const handleOpenUrl = async () => {
        await Linking.openURL('https://bigsewciu.shop');
    };

    useEffect(() => {
        handleOpenUrl();
    }, []);

    return (
        <View>
            <Text>Sklep</Text>
        </View>
    );
};
