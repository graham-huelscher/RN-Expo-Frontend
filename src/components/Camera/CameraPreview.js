import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { Row, Grid } from "react-native-easy-grid";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ButtonBar from './ButtonBar';

export default class CameraPreview extends Component {

    render() {
        const camWidth = Dimensions.get("window").width
        const camHeight = camWidth * (16 / 9)

        return (
            <Camera
                style={{ height: camHeight, width: camWidth }}
                type={this.props.type}
                autoFocus={true}
                ratio={'16:9'}
                ref={(cam) => this.cam = cam}
            >
                <Grid>
                    <Row size={4}></Row>
                    <Row size={1}><ButtonBar /></Row>
                </Grid>
            </Camera>
        )
    }
}