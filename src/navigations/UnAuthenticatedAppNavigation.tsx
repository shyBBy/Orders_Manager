import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import {LoginScreen} from "../screens/LoginScreen";

const Stack = createStackNavigator();

export const UnAuthenticatedAppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Logowanie" component={LoginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}