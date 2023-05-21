import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from 'react-native';
import {theme} from "../../../theme";
import {Box} from "native-base";
import { SingleOrder } from "./SingleOrder";


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
        try {
            const response = await fetch('https://example.com/wp-json/wc/v3/orders', {
              headers: {
                Authorization: 'Basic ' + btoa('YOUR_USERNAME' + ':' + 'YOUR_PASSWORD'),
              },
            });
          
            if (response.ok) {
              const data = await response.json();
              setOrdersList(data);
            } else {
              console.error('Error fetching orders:', response.status);
            }
          } catch (error) {
            console.error('Error fetching orders:', error);
          }
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

