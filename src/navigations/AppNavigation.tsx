import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ShopScreen} from "../screens/ShopScreen";
import {NavigationContainer} from "@react-navigation/native";
import {SettingScreen} from "../screens/SettingScreen";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {OrdersTopTabView} from "./OrdersTopTabView";
import {HomeScreen} from "../screens/HomeScreen";
import {theme} from "../../theme";
import {Icon} from "native-base";

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName ='Home'
                screenOptions ={({route}) => ({
                    tabBarInactiveTintColor: theme.bottomNav.icon.color.inactive,
                    tabBarActiveTintColor: theme.bottomNav.icon.color.active,
                    tabBarShowLabel: false,
                    headerShown: true,
                    headerStyle: {

                    },
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === 'Zamówienia') {
                            iconName = focused ? 'list' : 'list-outline';
                        } else if (rn === 'Ustawienia') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        } else if (rn === 'Sklep') {
                            iconName = focused ? 'cart' : 'cart-outline';
                        }

                        // @ts-ignore
                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                    tabBarStyle: {
                        backgroundColor: theme.bottomNav.background.dark,
                        padding: 1,
                        height: 70,
                    },
                    tabBarLabelStyle: {
                        color: theme.bottomNav.text.primary
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Zamówienia" component={OrdersTopTabView}/>
                <Tab.Screen name="Ustawienia" component={SettingScreen}/>
                <Tab.Screen name="Sklep" component={ShopScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}