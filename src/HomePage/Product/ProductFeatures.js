import React from 'react';
import {FlatList, Text, View} from "react-native";
import {Divider} from "react-native-elements";

const ProductFeatures = (props) => {
    const data = props.route.params.data
    const renderItem = ({item}) => {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 8}}>
                <Text style={{fontSize: 5, marginRight: 5}}>{'\u2B24'}</Text>
                <Text>{item}</Text>
            </View>
        )

    }
    return (
        <FlatList
            contentContainerStyle={{flex:1,backgroundColor:'white'}}
            data={data.features}
            renderItem={renderItem}
            keyExtractor={item => item.toString()}
        />
    );
};

export default ProductFeatures;
