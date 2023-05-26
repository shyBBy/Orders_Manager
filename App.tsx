import 'react-native-gesture-handler';
import React, {useEffect, useState} from "react";
import {AuthProvider, useAuth} from "./src/hooks/useAuth";
import {NativeBaseProvider, Spinner} from "native-base";
import * as Font from "expo-font";
import {AppNavigation} from "./src/navigations/AppNavigation";
import {UnAuthenticatedAppNavigation} from "./src/navigations/UnAuthenticatedAppNavigation";
import LoadingScreen from "./src/screens/LoadingScreen";


export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
                'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
                'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
            });
            setFontLoaded(true);
            setIsLoading(false);
        };

        loadFonts().then(() => {
            setTimeout(() => {
                setFontLoaded(true);
                setIsLoading(false);
            }, 2000); // Opóźnienie 2 sekundy (2000 milisekund)
        });
    }, []);

    if (!fontLoaded || isLoading) {
        return (
            <NativeBaseProvider>
                <LoadingScreen/>
            </NativeBaseProvider>
        );
    }


    return (
        <NativeBaseProvider>
            <AuthProvider>
                <AppContent/>
            </AuthProvider>
        </NativeBaseProvider>
    );
}


function AppContent() {
    const {user} = useAuth();

    return user ? <AppNavigation/> : <UnAuthenticatedAppNavigation/>
}

