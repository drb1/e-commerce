import React from 'react';
import {TouchableOpacity} from "react-native";
import {View,Text} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import styles from "../Components/style";



const Buttons = (props) => {
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']}>
            <TouchableOpacity
            onPress={props.btnClick}
            style={styles.btnStyle}
            >
               <Text style={styles.btnTextStyle}>{props.btnName}</Text>
            </TouchableOpacity>
        </LinearGradient>

    )
}
export default Buttons
