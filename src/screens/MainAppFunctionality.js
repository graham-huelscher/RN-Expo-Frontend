import React, { Component, useState } from 'react';
import { View, Button, AsyncStorage } from 'react-native';
import AppHeader from '../components/AppHeader'
import PostFeed from '../components/PostFeed'

class MainAppFunctionality extends Component {
  static navigationOptions = {
    title: 'Instagram',
  };

  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={{ flex: 1 }} >
        <Button title="Actually, sign me out :)" onPress={this.signOutAsync} />
        <PostFeed />
      </View>
    );
  }
}
export default MainAppFunctionality