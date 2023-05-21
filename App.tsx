import {View} from 'react-native';
import * as Font from 'expo-font';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ActivityIndicator} from 'react-native-paper';
import {theme} from "./theme";
import {useEffect, useState} from "react";
import {styles} from "./src/styles/style";
import {AppNavigation} from "./src/navigations/AppNavigation";
import {NativeBaseProvider} from "native-base";

const Tab = createBottomTabNavigator();


export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        const loadFonts = async () => {
            await Font.loadAsync({
                'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
                'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
                'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
            });
            setFontLoaded(true);
        };

        loadFonts();
    }, []);

    if (!fontLoaded) {
        return null;
    }

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={theme.colors.primary}/>
            </View>
        );

    }

    return (
        <NativeBaseProvider>
            <AppNavigation/>
        </NativeBaseProvider>
    );
}

