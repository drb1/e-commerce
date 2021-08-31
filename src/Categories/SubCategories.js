import React,{Fragment} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import Carousel from "react-native-x2-carousel";

const SubCategories = (props) => {
    const data = props.route.params.data

    const renderItem = ({item}) => {
        console.log('item is', item)

        return (
            <View style={{padding:10}}>
                <TouchableOpacity style={{alignItems:'center',}}>
                    <Image source={{uri:item.image}} style={{height:60,width:60,borderRadius:40}} />
                    <Text>{item.title}</Text>
                </TouchableOpacity>
              </View>

        )
    }

    return (
        <Fragment>
            <View>
                <Image
                    source={{uri:data.categoryImage}}
                    style={{
                        height:150,
                        width:Dimensions.get('window').width-20,
                        borderRadius:20
                    }}
                />
            </View>
            <FlatList
                contentContainerStyle={{padding:10,alignItems:'center'}}
                data={data.SubCategories}
                renderItem={renderItem}
                keyExtractor={item => item.title.toString()}
                numColumns={5}
            />
        </Fragment>

    );
};

export default SubCategories;
