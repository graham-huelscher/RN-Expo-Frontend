import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { Row, Grid } from "react-native-easy-grid";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ButtonBar from './ButtonBar';

export default class CameraPreview extends Component {

    takePicture = async () => {
        if (this.cam) {
            let photo = await this.cam.takePictureAsync();
            this.props.receivePhoto(photo)
        }
    };

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
                pictureSize={'4:3'}
            >
                <Grid>
                    <Row size={4}></Row>
                    <Row size={1} style={{ backgroundColor: "transparent", paddingBottom: 50 }}>
                        <ButtonBar
                            flipCamera={this.props.flipCamera}
                            takePicture={this.takePicture}
                        />
                    </Row>
                </Grid>
            </Camera>
        )
    }
}