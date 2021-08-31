import React from 'react';
import {Image, Text, View} from "react-native";
import style from "./style";
import ProductSize from "./ProductSize";
import TopTabNavigator from "../../Navigator/TopTabNavigator";
import ProductColor from "./ProductColor";

const ProductDetail = (props) => {
    const {data} = props.route.params;
    return (
        <View style={{flex: 1}}>
            <View style={style.container}>
                <View style={{alignItems: 'center'}}>
                    <Image
                        source={{uri: data.coverImageUri}}
                        resizeMode={'contain'}
                        style={style.imageStyle}
                    />
                </View>

                <View style={{marginTop: 20, marginLeft: 20}}>
                    <Text style={{fontWeight: 'bold', fontSize: 25}}>{data.title}</Text>
                </View>
                <View style={{marginTop: 20, marginLeft: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 24, color: 'gray', marginRight: 10}}>{data.price}</Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        color: 'gray',
                        textDecorationLine: 'line-through',
                        textDecorationColor: 'red'
                    }}>Rs.300</Text>
                </View>
                <ProductSize data={data}/>
                <ProductColor data={data}/>
            </View>
            <View style={{flex: 1, marginTop: 10}}>
                <TopTabNavigator {...props}/>
            </View>
        </View>
    );
};

export default ProductDetail;
