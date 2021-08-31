import React, {useState} from 'react';
import {Dimensions, Image, Text, View} from "react-native";
import LinearGradient from 'react-native-linear-gradient';



const Cart = () => {

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image
                source={require('../Assets/images/amazon-com-shopping-cart-online-shopping-logo-store-shelf.jpg')}
                style={{width:Dimensions.get('window').width - 100,height:100,marginVertical:10}}
                resizeMode={'contain'}
            />
            <Text style={{color:'gray'}}>Sign in to view your cart</Text>
            <LinearGradient
                colors={['#FF6200','#FD9346']}
                style={{height:40,marginVertical:10,justifyContent:'center',alignItems:'center',padding:10,borderRadius:20,width:150}}>
                <Text style={{color:'white',fontWeight:'bold'}}>
                    Sign in
                </Text>
            </LinearGradient>

        </View>
    );
};

export default Cart;
