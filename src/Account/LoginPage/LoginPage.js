import React, {useState} from "react";
import {Text, View, TextInput, Button, Alert} from "react-native";
import styles from "./style";
import * as Yup from 'yup';
import {Formik} from "formik";
import Buttons from "../../Components/Buttons";
import {Card} from "react-native-elements";
import FbLoginButton from "../../Components/FBLoginButton";


export default function LoginPage(props) {
    let [emailInput, setEmailInput] = useState(null)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>E-commerce</Text>
            <Formik
                initialValues={{name: '', password: ''}}

                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Required'),
                    password: Yup.string()
                        .required('Required'),
                })}
                onSubmit={(values, formikActions) => {
                    setTimeout(() => {
                        Alert.alert(JSON.stringify(values));
                        // Important: Make sure to setSubmitting to false so our loading indicator
                        // goes away.
                        formikActions.setSubmitting(false);
                    }, 500);
                }}>
                {props => (
                    <Card containerStyle={{borderRadius:20,borderColor:'tomato'}}>
                        <TextInput
                            onChangeText={props.handleChange('name')}
                            onBlur={props.handleBlur('name')}
                            value={props.values.name}
                            autoFocus
                            placeholder="Your Name"
                            style={styles.input}
                            onSubmitEditing={() => {
                                // on certain forms, it is nice to move the user's focus
                                // to the next input when they press enter.
                                emailInput.focus()
                            }}
                        />
                        {props.touched.name && props.errors.name ? (
                            <Text style={styles.error}>{props.errors.name}</Text>
                        ) : null}
                        <TextInput
                            onChangeText={props.handleChange('password')}
                            onBlur={props.handleBlur('password')}
                            value={props.values.password}
                            placeholder="Password"
                            style={styles.input}
                            ref={el => emailInput = el}
                        />
                        {props.touched.password && props.errors.password ? (
                            <Text style={styles.error}>{props.errors.password}</Text>
                        ) : null}

                        <Buttons btnName={'Login'} btnClick={props.handleSubmit}/>
                        <View style={{alignItems: 'center', marginVertical: 20}}>
                            <Text style={{fontSize: 20}}>OR</Text>
                        </View>
                        <FbLoginButton/>
                    </Card>
                )}
            </Formik>
        </View>
    );
}
