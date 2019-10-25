import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { withNavigationFocus } from "react-navigation";
import CameraPreview from '../components/Camera/CameraPreview'
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera';


class CameraScreen extends Component {
    state = {
        hasCameraPermission: true,
        type: Camera.Constants.Type.back,
        fileSystemImages: null
    };

    async componentDidMount() {
        const { totalCount } = await MediaLibrary.getAssetsAsync()
        const numImagesToGet = Math.min(totalCount, 500)

        const mediaLibrary = await MediaLibrary.getAssetsAsync({
            sortBy: MediaLibrary.SortBy.creationTime,
            first: numImagesToGet,

        })
        this.setState({
            fileSystemImages: mediaLibrary.assets
        })
        // console.log('here') 
        // const { camStatus } = await this.getCamPermission();
        // console.log(camStatus)
        // console.log('here2') 
        // // const { mediaStatus } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

        // //console.log(mediaStatus)
        // this.setState({ hasCameraPermission: camStatus === 'granted' });
    }

    getCamPermission = async () => {

        const { camStatus } = await Permissions.askAsync(Permissions.CAMERA);
        return camStatus

    }

    receivePhoto = (photo) => { 
        this.setState({
            fileSystemImages: [photo, ...this.state.fileSystemImages]
        })
    } 

    navigateToGallery = () => {
        this.props.navigation.navigate("Gallery1", {photos: this.state.fileSystemImages}) 
    }

    renderCamera = () => {
        const isFocused = this.props.navigation.isFocused();

        if (!isFocused) {
            return <View />;
        } else if (isFocused) {
            return (
                <CameraPreview 
                type={this.state.type} 
                flipCamera={this.flipCamera} 
                receivePhoto={this.receivePhoto}
                images={this.state.fileSystemImages}
                navigateToGallery={this.navigateToGallery}                
                />
            )
        }
    }

    flipCamera = () => {
        this.setState({
            type:
                this.state.type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back,
        })
    }

    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Button title="Re-ask permissions" onPress={() => { this.getCamPermission() }}></Button>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    {this.renderCamera()}
                </View>
            )
        }
    }
}

export default withNavigationFocus(CameraScreen)