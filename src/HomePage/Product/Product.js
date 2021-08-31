import React, {Fragment} from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList, Image, FlatList, TouchableOpacity
} from "react-native";
import CarouselComponent from "../Carosel/CarouselComponent";
import {Card} from "react-native-elements";

const DATA = [
    {
        id:1,
        title: "Featured Product For Sale",
        price:'Rs.2000',
        coverImageUri: "https://www.91-img.com/pictures/133188-v4-oppo-f11-mobile-phone-large-1.jpg?tr=q-60",
        colors:['black','white','green','red'],
        size:['Small','Medium','Large','Extra Large'],
        description:['Best One Selling','Long Lasting','Forever Selling'],
        features:['Durable','Fast'],
        review:[
            {rating:1,User:'Anonymous 1',comment:'Not Good',date:'Dec 21 2020'},
        ]
    },
    {
        id:2,
        title: "Best Product For Sale",
        price:'Rs.3000',
        coverImageUri: "https://specials-images.forbesimg.com/imageserve/5e8ce586748506000636107e/960x0.jpg?fit=scale",
        colors:['black','white','green','red'],
        size:['Small','Medium','Large','Extra Large'],
        description:['Good One','Ever Green'],
        features:['High Performance','Fast'],
        review:[
            {rating:4,User:'Anonymous 2',comment:'As Expected',date:'Nov 21 2020'},
        ]
    },
    {
        id:3,
        title: "Good Product For Sale",
        price:'Rs.4000',
        coverImageUri: "https://mobilecontent.costco.com/live/resource/img/static-us-tiles/tv-sm-tile-320x220.jpg",
        colors:['black','white','green','red'],
        size:['Small','Medium','Large','Extra Large'],
        description:['Excellent One','Original Made'],
        features:['High Battery Power','Fast'],
        review:[
            {rating:5,User:'Anonymous 3',comment:'Excellent',date:'Sep 21 2020'},
        ]
    },
    {
        id:4,
        title: "Bad Product For Sale",
        price:'Rs.5000',
        coverImageUri: "https://www.apple.com/v/macbook-pro-13/g/images/overview/hero_endframe__bsza6x4fldiq_large_2x.jpg",
        colors:['black','white','green','red'],
        size:['Small','Medium','Large','Extra Large'],
        description:['Great One','Great Performance'],
        features:['Automated','Easy to use'],
        review:[
            {rating:3,User:'Anonymous 4',comment:'Average',date:'Jun 21 2020'},
        ]
    },

];



const Product = (props) => {

    const navigateFunction = data  => () => {
        props.navigation.navigate('ProductDetail',{
            data:data
        })

    }
    const renderItem = ({ item }) => {
        return (
            <Fragment>
                <TouchableOpacity
                    style={{flex:1,padding:15,alignItems:'center',justifyContent:'center',margin:5,borderRadius:15,backgroundColor:'rgba(0,0,0,0.03)'}}
                    onPress={navigateFunction(item)}
                >
                    <Image source={{uri:item.coverImageUri}} style={{height:100,width:100}} resizeMode={'contain'}/>
                    <Text >{item.title}</Text>
                </TouchableOpacity>
            </Fragment>

        );
    };

    const HeaderComponent = (props) => {
        return (
            <View>
                <CarouselComponent/>
                <View style={{marginTop:20}}>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Featured Products</Text>
                </View>
            </View>

        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                numColumns={2}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={HeaderComponent}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        marginTop: 10,
        fontSize: 30,
        // backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
});

export default Product
