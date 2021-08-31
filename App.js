/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {enableScreens} from "react-native-screens";
import {AppEventsLogger} from "react-native-fbsdk";
import AuthNavigator from "./src/Navigator/AuthNavigator";
import {Provider} from 'react-redux';
import store from "./src/Redux/store";


enableScreens();

const MyTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(255, 45, 85)',
        // background: 'rgb(242, 242, 242)',
        background: 'white',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

const App = (props) => {
    const scheme = useColorScheme();
    useEffect(() => {
        AppEventsLogger.logEvent()
    }, [])

    return (
        <Provider  store={store}>
            <AppearanceProvider>
                <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
                    <AuthNavigator/>
                </NavigationContainer>
            </AppearanceProvider>
        </Provider>

    );
};


export default App;
