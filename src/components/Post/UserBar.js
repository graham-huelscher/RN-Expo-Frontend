import React from 'react';
import {Text, StyleSheet, Image, View } from 'react-native'
import config from '../../config'

export default () => {
    return (
    <View style={styles.userBar}>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
          <Image style={styles.profilePicture}
          source={{uri:`https://lh3.googleusercontent.com/EqSkhvUgW3NYQde9yW5fzBmKBaOcxT5f7IEfzhM2hxhGgwGp5QG18tkyrzhEQpXQqJzH9Tn_xY1n7s0rFFrbo4VH4Q`}} />
          <Text style={{marginLeft: 10}}>
            userName
          </Text>
        </View>
        <View>
          <Text>
            Instagram Connect
          </Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    userBar: {
      width: '100%',
      height: config.styleConstants.rowHeight,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20
    },
    profilePicture: {
      width: 40, 
      height: 40,
      borderRadius: 20
    }
  
  });