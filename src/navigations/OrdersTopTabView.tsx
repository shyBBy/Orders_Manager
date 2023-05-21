import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {ListAllOrders} from "../components/Orders/ListAllOrders";
import {ListAllStatueses} from "../components/Statueses/ListAllStatueses";
import {theme} from "../../theme";
import {OrdersScreen} from "../screens/OrdersScreen";
import {StatuesesScreen} from "../screens/StatuesesScreen";



interface Route {
    key: string;
    title: string;
}

const AllOrders = () => <OrdersScreen/>;
const OrdersStatus = () => <StatuesesScreen/>;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: theme.bottomNav.background.dark
    },
    indicator: {
        backgroundColor: theme.colors.indicator,
    },
    tabLabel: {
        color: theme.bottomNav.text.primary,
        fontFamily: theme.font.roboto.bold,
    },
});


export const OrdersTopTabView: React.FC = () => {
    const [index, setIndex] = useState<number>(0);
    const [routes] = useState<Route[]>([
        {key: 'all_orders', title: 'Wszystkie zamówienia'},
        {key: 'orders_status', title: 'Statusy zamówień'},
    ]);

    const renderScene = SceneMap({
        all_orders: AllOrders,
        orders_status: OrdersStatus,
    });

    const handleIndexChange = (newIndex: number) => {
        setIndex(newIndex);
    };

    const renderTabBar = (props: any) => (
        <TabBar
            {...props}
            style={styles.tabBar}
            indicatorStyle={styles.indicator}
            labelStyle={styles.tabLabel}
        />
    );

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={handleIndexChange}
            initialLayout={{ width: Dimensions.get('window').width }}
            renderTabBar={renderTabBar}
        />
    );


};