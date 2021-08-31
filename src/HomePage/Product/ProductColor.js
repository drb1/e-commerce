import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from "react-native";

const ProductColor = (props) => {

    console.log(props.data)
    const [selected, setSelected] = useState('')

    const changeProductColor = item => () => {
        setSelected(item)
    }
    const renderItem = ({item}) => {
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
                    marginTop: 20
                }}
                onPress={changeProductColor(item)}
            >
                <Text style={{color: selected === item ? 'black' : 'black'}}></Text>
            </TouchableOpacity>
        )
    }

    const headerComponent = () => {
        return (
            <View style={{marginLeft: 20,marginTop:10}}>
                <Text style={{fontWeight: 'bold',}}>
                    Color:
                </Text>
            </View>
        )
    }

    return (
        <FlatList
            data={props.data.colors}
            renderItem={renderItem}
            keyExtractor={item => item.toString()}
            ListHeaderComponent={headerComponent}
            contentContainerStyle={{flexDirection: 'row',marginTop:10}}
            scrollEnabled={false}

        />
    );
};

export default ProductColor;
