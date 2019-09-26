import React, {Component, useState} from 'react';
import { View } from 'react-native';
import AppHeader from './components/AppHeader'
import PostFeed from './components/PostFeed'

class App extends Component {
  render(){
    return (
      <View >
        <AppHeader />
        <PostFeed  />
      </View>
    );
  }
}
export default App