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
        (async () => {
            const username = 'c0'
            const password = 'cs_4'
            const token = encode(`${username}:${password}`);


            const res = await fetch('https://bigsewciu.shop/wp-json/wc/v3/orders/1271', {
                credentials: 'include',
                headers: {
                    Authorization: `Basic ${token}`,
                },
            });
            const data = await res.json()
            const orders = data.orders || [];
            setOrdersList(orders)


        })();
    }, []);


    return (
        <>
            <Box style={styles.container}>
                <Text style={styles.text}>Lista wszystkich zamówień bigsewciu.shop</Text>
                {
                    console.log(ordersList.id)
                    // ordersList.map((order: any) => (
                    //     <Text>Order id: {order.id}</Text>
                    // ))
                }
            </Box>
        </>
    );
}

