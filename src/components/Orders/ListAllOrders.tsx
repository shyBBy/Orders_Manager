import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from 'react-native';
import {theme} from "../../../theme";
import {Box} from "native-base";
import Constants from 'expo-constants';
import { encode } from "base-64";

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

export const ListAllOrders = () => {
    const [ordersList, setOrdersList] = useState<any>([])

    useEffect(() => {
      fetchOrderList();
    }, []);


    return (
        <>
            <Box style={styles.container}>
                <Text style={styles.text}>Lista wszystkich zamówień bigsewciu.shop</Text>
                {
                orders.map((order) => (
                  <SingleOrder key={order.id} order={order} />
                  ))
                  
                }
            </Box>
        </>
    );
}

