import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from 'react-native';
import {theme} from "../../../theme";
import {Box} from "native-base";
import { SingleOrder } from "./SingleOrder";
import {ActivityIndicator} from 'react-native-paper';
import { encode as btoa} from 'base-64'
import axios from "axios";
// import { WooCommerce } from "../../api/api";


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
       const fetchData = async () => {
        try {
          const consumerKey = 'ck_cc38ea7bfa45cea69b9eec348601489cf4453a50'
          const consumerSecret = 'cs_a55248f3381b7fa0a7d5cca3d955963d5179c184'

          const encodedConsumerKey = btoa(consumerKey)
          const encodedConsumerSecret = btoa(consumerSecret)

          const credentials = `${encodedConsumerKey}:${encodedConsumerSecret}`
          const base64Credentials = btoa(`${consumerKey}:${consumerSecret}`);
          
          const config = {
            headers: {
              Authorization: `Basic ${base64Credentials}`,
            },
          };

          const url = 'https://bigsewciu.shop/wp-json/wc/v3/orders'

          const res = await axios.get(url, config)
          // const res = await WooCommerce.get('orders');
          const data = res.data

        
          setOrdersList(data)
        } catch (e) {
          console.log(e)
        }
       };

       fetchData();
    }, []);
    
    if (ordersList === null) {
        return (
            <Box style={styles.container}>
                <ActivityIndicator size="large" color={theme.colors.primary}/>
                <Text style={styles.text}>Trwa wczytywanie zamówień...</Text>
            </Box>
        )
    }


    return (
        <>
            <Box style={styles.container}>
                <Text style={styles.text}>Lista wszystkich zamówień bigsewciu.shop</Text>
                {
                ordersList.map((order: any) => (
                  <SingleOrder key={order.id} order={order} />
                  ))
                  
                }
            </Box>
        </>
    );
}

