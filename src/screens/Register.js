import React, { Component } from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';

class Register extends Component {
    
    state = {
        email: "",
        password: ""
    }

    register = () => {
        this.props.navigation.navigate("App")
    }

    onChangeText = (text, source) => {
        this.setState({
            source: text
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text, "email")}
                    value={this.state.email}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text, "password")}
                    value={this.state.password}
                />
                <Button title="Sign up" onPress={this.register} />
            </View>
        );
    }
}

// const styles = StyleSheet.create({  
// });
export default Register