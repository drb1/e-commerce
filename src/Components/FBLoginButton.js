import React from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

const FbLoginButton = () => {
    return (
        <View>
            <LoginButton
                onLoginFinished={
                    (error, result) => {
                        if (error) {
                            alert("login has error: " + result.error);
                        } else if (result.isCancelled) {
                            alert("login is cancelled.");
                        } else {
                            AccessToken.getCurrentAccessToken().then(
                                (data) => {
                                    alert(data.accessToken.toString())
                                }
                            )
                        }
                    }
                }
                onLogoutFinished={() => alert("logout.")}/>
        </View>
    );
};

export default FbLoginButton;
