import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from "../Cart/Cart";
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginPage from "../Account/LoginPage/LoginPage";
import Categories from "../Categories/Categories";
import HomePage from "../HomePage/HomePage";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props) =>  {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Categories') {
                        iconName = focused ? 'list-outline' : 'list';
                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }else if (route.name === 'Account') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },

            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Categories" component={Categories} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Account" component={LoginPage} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator
