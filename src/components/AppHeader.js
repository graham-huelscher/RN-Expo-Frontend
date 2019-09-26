import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import config from '../config'

export default () => {
    return (
        <View style={styles.main}>
            <Text>
                Hello world
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: config.styleConstants.rowHeight,
        marginTop: 25, 
        backgroundColor: 'rgb(250, 250, 250)',
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgb(233,233,233)'
    }
});