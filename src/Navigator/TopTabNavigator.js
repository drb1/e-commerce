import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProductDescription from "../HomePage/Product/ProductDescription";
import ProductFeatures from "../HomePage/Product/ProductFeatures";
import ProductReview from "../HomePage/Product/ProductReview";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = (props) => {
    const data = props.route.params
    return (
        <Tab.Navigator
            style={{flex:1,backgroundColor:'white',height:300}}
            tabBarOptions={{
                labelStyle: {fontWeight:'bold'},
                style: { backgroundColor: 'rgba(0,0,0,0.022)' },
            }}
        >
            <Tab.Screen name="Description" component={ProductDescription}  initialParams={data}/>
            <Tab.Screen name="Features" component={ProductFeatures} initialParams={data}/>
            <Tab.Screen name="Review" component={ProductReview} initialParams={data}/>
        </Tab.Navigator>
    );
}

export default TopTabNavigator
