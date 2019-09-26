import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import config from '../../config';
import CountDown from 'react-native-countdown-component';

export default (props) => {

  const heartDetails = props.isLiked ? { name: "heart", color: "red" } : { name: "hearto", color: "black" }

  return (
    <View style={styles.likesBar}>
      <View style={{ flexDirection: 'row', alignItems: "center" }}>
        <AntDesign name={heartDetails.name} size={32} color={heartDetails.color} />

        <Text style={{ marginLeft: 10 }}>
          365
        </Text>
      </View>
      <CountDown
        until={86400}
        onFinish={() => alert('finished')}
        size={10}
        digitStyle={{backgroundColor: 'white'}}
        separatorStyle={{color: '#000'}}
        timeToShow={[ 'H', 'M', 'S']}
      />
      <Text>
        15 km
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  likesBar: {
    width: '100%',
    height: config.styleConstants.rowHeight,
    backgroundColor: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgb(233,233,233)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  }
});