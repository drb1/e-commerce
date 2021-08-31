import {Dimensions, StyleSheet} from "react-native";
const {width} = Dimensions.get('window');


const style = StyleSheet.create({
    container: {
        // flex:1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
    },
    imageStyle: {
        width: width * 0.9,
        height: width * 0.5,
        borderRadius:20

    },
})

export default style;
