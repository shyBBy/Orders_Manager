import React, {useEffect, useState} from "react";
import {ScrollView, StyleSheet, Text} from 'react-native';
import {theme} from "../../../theme";
import {Box} from "native-base";
import axios from 'axios';
import { encode } from 'base-64';
import {SingleOrder} from "./SingleOrder";

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
    const [ordersList, setOrdersList] = useState<typeof SingleOrder[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const consumerKey = 'ck_cc38ea7bfa45cea69b9eec348601489cf4453a50';
            const consumerSecret = 'cs_a55248f3381b7fa0a7d5cca3d955963d5179c184';
            const apiUrl = 'https://bigsewciu.shop/wp-json/wc/v3/orders';
            const auth = encode(`${consumerKey}:${consumerSecret}`);

            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Basic ${auth}`,
            };


            try {
                const response = await axios.get(apiUrl, { headers });
                const orders = response.data || [];
                setOrdersList(orders);
            } catch (error) {
                console.log('Wystąpił błąd podczas pobierania zamówień.', error);
            }
        };

        fetchOrders();
    }, []);


    return (
        <>
            <Box>
                <ScrollView>
                    {
                        ordersList.map((order: any) => (
                            <SingleOrder key={order.id} order={order} />
                        ))
                    }
                </ScrollView>
            </Box>
        </>
    );
}

