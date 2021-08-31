import React from 'react';
import {Dimensions, FlatList, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import connect from "react-redux/lib/connect/connect";

const DATA = [
    {
        id: 1,
        category: 'Men',
        products: 100,
        categoryImage: 'https://spaceandlight.la/wp-content/uploads/2020/05/Ecommerce-Men-Home-1440x500-1.jpg',
        SubCategories: [
            {
                id:1,
                title: 'Jeans',
                image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8amVhbnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
            },
            {
                id:2,
                title: 'T-Shirt',
                image: 'https://circlo-9fcd.kxcdn.com/wp-content/uploads/2017/09/free-t-shirt-mockups.jpg'

            },
            {
                id:5,
                title: 'Caps',
                image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            {
                id:3,
                title: 'Shirts',
                image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'

            },
            {
                id:4,
                title: 'Shoes',
                image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },

            {
                id:6,
                title: 'Hoodies',
                image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }
        ],
        size: ['Small', 'Medium', 'Large', 'Extra Large'],
        description: ['Best One', 'Long Lasting'],
        features: ['Durable', 'Fast'],
        review: [
            {rating: 1, User: 'Anonymous 1', comment: 'Not Good', date: 'Dec 21 2020'},
        ]

    },
    {
        id: 2,
        category: 'Women',
        products: 200,
        categoryImage: 'https://cdn.shopify.com/s/files/1/1644/0321/t/5/assets/paira-banner-small-1.jpg?v=11589655385252682199',
        SubCategories: [
            {
                title: 'Jeans',
                image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8amVhbnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
            },
            {
                title: 'T-Shirt',
                image: 'https://circlo-9fcd.kxcdn.com/wp-content/uploads/2017/09/free-t-shirt-mockups.jpg'

            },
            {
                title: 'Shirts',
                image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'

            },
            {
                title: 'Shoes',
                image: 'https://lh3.googleusercontent.com/proxy/m0USmeUC9CjVPp1zodbdmFgAoPNTbJlQmni2uLjAU8C2OWPLem03vY1PikE7igfbzjJYqDH-NQcjTWvn_SV5f4SY-iSuazI0hXrv6zL0LmKZx3FTihs6d_6upijdizmHd_p83z5sAFWM9g'
            }
        ],
        size: ['Small', 'Medium', 'Large', 'Extra Large'],
        description: ['Best One', 'Long Lasting'],
        features: ['Durable', 'Fast'],
        review: [
            {rating: 1, User: 'Anonymous 1', comment: 'Not Good', date: 'Dec 21 2020'},
        ]

    },
    {
        id: 3,
        category: 'Clothing',
        products: 300,
        categoryImage: 'https://cache.desktopnexus.com/thumbseg/984/984816-bigthumbnail.jpg',
        SubCategories: [
            {
                title: 'Summer',
                image: 'https://image.winudf.com/v2/image1/Y29tLnlvbmdhcHBzLnN1bW1lcl9zY3JlZW5fMF8xNTY3MTQyMTU2XzA4Ng/screen-0.jpg?fakeurl=1&type=.jpg'
            },
            {
                title: 'Winter',
                image: 'https://circlo-9fcd.kxcdn.com/wp-content/uploads/2017/09/free-t-shirt-mockups.jpg'

            },
            {
                title: 'Jackets',
                image: 'https://banner2.cleanpng.com/20180329/hhe/kisspng-leather-jacket-coat-motorcycle-jacket-5abc751b12e866.3641368615223001870775.jpg'

            },
            {
                title: 'Shoes',
                image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }
        ],
        size: ['Small', 'Medium', 'Large', 'Extra Large'],
        description: ['Best One', 'Long Lasting'],
        features: ['Durable', 'Fast'],
        review: [
            {rating: 1, User: 'Anonymous 1', comment: 'Not Good', date: 'Dec 21 2020'},
        ]

    },
    {
        id: 4,
        category: 'Electronics',
        products: 500,
        categoryImage: 'https://thumbs.dreamstime.com/b/collection-consumer-electronics-d-render-blue-collection-consumer-electronics-d-render-blue-background-103463140.jpg',
        SubCategories: [
            {
                title: 'TV',
                image: 'https://static.toiimg.com/photo/54163919/Toshiba-32PT200ZE-32-inch-LED-Full-HD-TV.jpg'
            },
            {
                title: 'Laptops',
                image: 'https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg'

            },
            {
                title: 'Home Theatres',
                image: 'https://static.toiimg.com/thumb/msid-72023375,width-1070,height-580,imgsize-1159244,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg'

            },
        ],
        size: ['Small', 'Medium', 'Large', 'Extra Large'],
        description: ['Best One', 'Long Lasting'],
        features: ['Durable', 'Fast'],
        review: [
            {rating: 1, User: 'Anonymous 1', comment: 'Not Good', date: 'Dec 21 2020'},
        ]
    },

];

const Categories = (props) => {

    const handlePress  = item => () => {
        props.navigation.navigate('SubCategories',{
            data:item
        })
    }
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={{
                    marginHorizontal: 20,
                    marginVertical: 10,
                    alignItems: 'center'
                }}
                onPress={handlePress(item)}
            >
                <ImageBackground
                    imageStyle={{borderRadius: 10, borderWidth: 1, borderColor: 'tomato'}}
                    source={{uri: item.categoryImage}}
                    style={{
                        width: Dimensions.get('window').width - 50,
                        height: Dimensions.get('window').height / 6,
                    }}
                >
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold', color: 'tomato', fontSize: 30}}>{item.category}</Text>
                        <Text style={{fontWeight: 'bold', color: 'gray', fontSize: 20}}>{item.products} products</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>

        )
    }

    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}

        />
    );
};

const mapStateToProps = state => {
    return {
        listData:state.categoryReducer
    }
}

export default connect(mapStateToProps,null) (Categories);
