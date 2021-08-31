import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import Carousel, {Pagination, PaginationLight} from 'react-native-x2-carousel';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const DATA = [
    {
        title:'Image 1',
        price:'Rs.100',
        coverImageUri: 'https://user-images.githubusercontent.com/6414178/73920321-2357b680-4900-11ea-89d5-2e8cbecec9f6.jpg',
        cornerLabelColor: '#FFD300',
        cornerLabelText: 'GOTY',
        colors:['black','white','green','red'],
        size:['Small','Medium','Large','Extra Large'],
        description:['Best One','Long Lasting'],
        features:['Durable','Fast'],
        review:[
            {rating:1,User:'Anonymous 1',comment:'Not Good',date:'Dec 21 2020'},
        ]

    },
    {
        title:'Image 2',
        price:'Rs.200',
        coverImageUri: 'https://user-images.githubusercontent.com/6414178/73920358-336f9600-4900-11ea-8eec-cc919b991e90.jpg',
        cornerLabelColor: '#0080ff',
        cornerLabelText: 'NEW',
        colors:['black','white','green','red'],
        size:['Small','Medium','Large','Extra Large'],
        description:['Good One','Ever Green'],
        features:['High Performance','Fast'],
        review:[
            {rating:4,User:'Anonymous 2',comment:'As Expected',date:'Nov 21 2020'},
        ]

    },
    {
        title:'Image 3',
        price:'Rs.300',
        coverImageUri: 'https://user-images.githubusercontent.com/6414178/73927874-25744200-490d-11ea-940f-db3e5dbd8b2b.jpg',
        cornerLabelColor: '#2ECC40',
        cornerLabelText: '-75%',
        colors:['black','white','green','red'],
        size:['Small','Medium','Large','Extra Large'],
        description:['Excellent One','Original Made'],
        features:['High Battery Power','Fast'],
        review:[
            {rating:5,User:'Anonymous 3',comment:'Excellent',date:'Sep 21 2020'},
        ]

    },
    {
        price:'Rs.400',
        title:'Image 4',
        coverImageUri: 'https://user-images.githubusercontent.com/6414178/73920399-45e9cf80-4900-11ea-9d5b-743fe5e8b9a4.jpg',
        cornerLabelColor: '#2ECC40',
        cornerLabelText: '-20%',
        colors:['black','white','green','red'],
        size:['Small','Medium','Large','Extra Large'],
        description:['Great One','Great Performance'],
        features:['Automated','Easy to use'],
        review:[
            {rating:3,User:'Anonymous 4',comment:'Average',date:'Jun 21 2020'},
        ]
    },
];


const CarouselComponent = () => {
    const navigation = useNavigation()

    const navigateFunction = data  => () => {
        navigation.navigate('ProductDetail',{
            data:data
        })

    }
    const renderItem =  (data) => (

        <TouchableOpacity
            key={data.coverImageUri}
            style={styles.cardContainer}
            onPress={navigateFunction(data)}
        >
            <View
                style={styles.cardWrapper}
            >
                <Image
                    style={styles.card}
                    source={{uri: data.coverImageUri}}
                />
                <View
                    style={[
                        styles.cornerLabel,
                        {backgroundColor: data.cornerLabelColor},
                    ]}
                >
                    <Text style={styles.cornerLabelText}>
                        {data.cornerLabelText}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <Carousel
                pagination={PaginationLight}
                renderItem={renderItem}
                data={DATA}
                loop
                autoplay
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:5
    },
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width,
    },
    cardWrapper: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    card: {
        width: width * 0.9,
        height: width * 0.35,
    },
    cornerLabel: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderTopLeftRadius: 8,
    },
    cornerLabelText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '600',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
    },
});

export default CarouselComponent
