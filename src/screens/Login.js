import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Login extends Component {

    login = () => {
        //Navigate to the next page
    }
    render() {
        return (
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => this.login()}
            >
                <Text>
                    Login Screen
          </Text>
            </TouchableOpacity>
        );
    }
}
export default Login