import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageJSX from './components/ImageJSX';
import Header from './components/Header'
import UserBar from './components/UserBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <UserBar />
      <ImageJSX />
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});
