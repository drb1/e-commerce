import React, {Fragment, useState} from 'react';
import {Dimensions, Image, TextInput, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const SearchBarLayout = (props) => {


    const [search, setSeacrh] = useState('');

    const updateSearch = (search) => {
        setSeacrh(search)
    }

    return (
        <Fragment>
            <TextInput
                placeholder="Type Here..."
                onChangeText={updateSearch}
                value={search}
                style={{padding:10,borderRadius:10,borderWidth:1,flex:0.5,borderColor:'rgba(0,0,0,0.5)',width:Dimensions.get('window').width-90}}
            />
            <View style={{position:'absolute',right:10,bottom:6}}>
                <Ionicons size={20} name={'search-outline'}/>
            </View>
        </Fragment>

    );
};

export default SearchBarLayout;
