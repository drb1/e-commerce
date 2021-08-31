import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from "react-native";

const ProductSize = (props) => {
    const [selected, setSelected] = useState('')

    const changeProductSize = item => () => {
        setSelected(item)
    }

    const renderItem = ({item}) => {
        let symbol;
        switch (item) {
            case 'Small':
                symbol = 'S'
                break;
            case 'Medium':
                symbol = 'M'
                break;
            case 'Large':
                symbol = 'L'
                break;
            case 'Extra Large':
                symbol = 'XL'
                break;
            default:
                return
        }
        return (
            <TouchableOpacity
                key={item}
                style={{
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    backgroundColor: selected === item ? 'green' : 'white',
                    borderColor: 'gray',
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:20
                }}
                onPress={changeProductSize(item)}
            >
                <Text style={{color:selected === item ? 'white' : 'black'}}>{symbol}</Text>
            </TouchableOpacity>
        )
    }

    const headerComponent = () => {
        return (
            <View style={{marginLeft:20}}>
                <Text style={{fontWeight:'bold',}}>
                    Size:
                </Text>
            </View>
        )
    }

    return (
        <FlatList
            data={props.data.size}
            renderItem={renderItem}
            contentContainerStyle={{flexDirection: 'row',marginTop:10}}
            keyExtractor={item => item.toString()}
            scrollEnabled={false}
            ListHeaderComponent={headerComponent}
        />

    );
};

export default ProductSize;
