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
            let album = await MediaLibrary.getAlbumAsync("Expo")

            if (album) {
                result = await MediaLibrary.addAssetsToAlbumAsync(asset.id, album.id, false);
            }
            else {
                album = await MediaLibrary.createAlbumAsync("Expo", asset.id, false)
            }
            const newPhoto = await MediaLibrary.getAssetsAsync({
                first: 1,
                album: album.id,
                sortBy: MediaLibrary.SortBy.creationTime,
            })
            this.props.receivePhoto(newPhoto.assets[0]) 
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
            >
                <Grid>
                    <Row size={4}></Row>
                    <Row size={1} style={{ backgroundColor: "transparent", paddingBottom: 50 }}>
                        <ButtonBar
                            flipCamera={this.props.flipCamera}
                            takePicture={this.takePicture}
                            images={this.props.images}
                            navigateToGallery={this.props.navigateToGallery}
                        />
                    </Row>
                </Grid>
            </Camera>
        )
    }
}