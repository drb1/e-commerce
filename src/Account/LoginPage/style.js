import {StyleSheet, Dimensions} from 'react-native';
import Colors from "../../Components/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        margin: 24,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    error: {
        margin: 8,
        fontSize: 14,
        color: 'red',
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        paddingHorizontal: 8,
        width: '100%',
        borderColor: '#ddd',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom:10
    },
});
export default styles;
