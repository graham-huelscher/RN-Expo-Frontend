import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Col } from "react-native-easy-grid";
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default (props) => {

    return (
        <React.Fragment>
            <Col></Col>
            <Col style={styles.icons}>
                <View style={styles.galleryPreview}>
                    {props.images ? <Image source={{ uri: props.images[0].uri }}
                        style={styles.image} /> : null}
                </View>
            </Col>
            <Col style={styles.icons}>
                <TouchableOpacity onPress={() => props.takePicture()}>
                    <FontAwesome name="circle-thin" size={80} color="white" />
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
    },
    galleryPreview: {
        borderRadius: 20,
        borderColor: "white",
        borderWidth: 1
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 20,
    }
})