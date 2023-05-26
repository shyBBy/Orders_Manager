import React from "react";
import {Text, View} from "native-base";
import {LoginForm} from "../components/forms/LoginForm";


export const LoginScreen = () => {
    return(
        <View style={{paddingTop: '45%'}}>
            <LoginForm/>
        </View>
    )
}