import React, { Component, useState } from 'react';
import { View, Button, AsyncStorage } from 'react-native';
import PostFeed  from '../components/Post/PostFeed'

class MainFeed extends Component {

  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={{ flex: 1 }} >
        <PostFeed />
      </View>
    );
  }
}
export default MainFeed