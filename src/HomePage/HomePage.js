import React from 'react';
import {View} from "react-native";
import Product from "./Product/Product";

const HomePage = (props) => {
    return (
        <View>
            <Product {...props}/>
        </View>
    );
};

export default HomePage;
