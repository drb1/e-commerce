import React from 'react';
import {FlatList, Text, View} from "react-native";
import {Rating, AirbnbRating, Divider} from 'react-native-elements';


const ProductReview = (props) => {
    const data = props.route.params.data
    const renderItem = ({item}) => {
        return (
                <View style={{padding:10}}>
                    <Text style={{fontWeight:'bold',color:'blue',marginVertical:5}}>{item.User}</Text>
                    <Text style={{color:'gray',marginVertical:5}}>{item.comment}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{color:'gray',marginVertical:5}}>{item.date}</Text>

                        <Rating
                            type='custom'
                            ratingColor='#3498db'
                            ratingBackgroundColor='#c8c7c8'
                            imageSize={20}
                            readonly
                            startingValue={item.rating}
                            // style={styles.rating}
                        />
                    </View>
                </View>
        )
    }
    return (
        <FlatList
            contentContainerStyle={{flex:1,backgroundColor:'white'}}
            data={data.review}
            renderItem={renderItem}
            keyExtractor={item => item.toString()}
            ItemSeparatorComponent={() => <Divider/>}
        />
    );
};

export default ProductReview;
