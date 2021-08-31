import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import ProductDetail from "../HomePage/Product/ProductDetail";
import HomePage from "../HomePage/HomePage";
import SearchBarLayout from "../AppBar/SearchBar/SearchBarLayout";
import AntDesign from "react-native-vector-icons/AntDesign";
import BottomTabNavigator from "./BottomTabNavigator";
import SubCategories from "../Categories/SubCategories";

const Stack = createStackNavigator();

const AuthNavigator = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitleStyle: {display: 'none'},
                headerTitle: () => <SearchBarLayout/>,
                headerRight: () => <AntDesign name={'message1'} size={23} style={{marginRight: 10}}/>
            }}
        >
            <Stack.Screen
                name="Dashboard"
                component={BottomTabNavigator}
            />
            <Stack.Screen name="ProductDetail" component={ProductDetail} {...props}/>
            <Stack.Screen name="SubCategories" component={SubCategories} {...props}/>
        </Stack.Navigator>
    );
};

export default AuthNavigator;
