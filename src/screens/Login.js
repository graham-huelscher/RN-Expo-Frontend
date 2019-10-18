import React, { Component } from 'react';
import { AsyncStorage, Button, View, TextInput } from 'react-native';

class Login extends Component {

    // signInAsync = async () => {
    //     await AsyncStorage.setItem('userToken', 'abc');
    //     this.props.navigation.navigate('App');
    // };

    createAccount = () => {
        this.props.navigation.navigate("Register")
    }

    render() {
        return (
            <View>
                <Button title="New user?" onPress={this.createAccount} />
            </View>
        );
    }
}

export default Login