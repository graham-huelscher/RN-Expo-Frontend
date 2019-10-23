import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Grid, Col } from "react-native-easy-grid";
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default (props) => {

    return (
        <React.Fragment>
            <Col></Col>
            <Col></Col>
            <Col style={styles.icons}>

                <TouchableOpacity onPress={() => props.takePicture()}>
                    <FontAwesome name="circle-thin" size={72} color="white" />
                </TouchableOpacity>
            </Col>
            <Col style={styles.icons}>
                <TouchableOpacity onPress={() => props.flipCamera()}>
                    <Ionicons name="md-reverse-camera" size={40} color="white" />
                </TouchableOpacity>
            </Col>
            <Col></Col>

        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    icons: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})