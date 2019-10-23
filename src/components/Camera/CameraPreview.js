import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { Row, Grid } from "react-native-easy-grid";
import ButtonBar from './ButtonBar';
import * as MediaLibrary from 'expo-media-library';

export default class CameraPreview extends Component {

    takePicture = async () => {
        if (this.cam) {
            const { uri } = await this.cam.takePictureAsync()
            const asset = await MediaLibrary.createAssetAsync(uri)
            await MediaLibrary.createAlbumAsync("Expo", asset.id, false)
            // if( await MediaLibrary.getAlbumAsync("Expo")){
            //     result = await MediaLibrary.addAssetsToAlbumAsync(uri, "Expo", false);
            // }
            // else {
            //     result = await MediaLibrary.createAlbumAsync("Expo", uri, false)
            // }
            // this.props.receivePhoto(result)
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
                            images={this.props.images}
                        />
                    </Row>
                </Grid>
            </Camera>
        )
    }
}