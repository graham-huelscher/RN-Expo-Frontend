import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { withNavigationFocus } from "react-navigation";
import CameraPreview from '../components/Camera/CameraPreview'
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera';


class CameraScreen extends Component {
    state = {
        hasCameraPermission: true,
        type: Camera.Constants.Type.back,
        fileSystemImages: null
    };

    async componentDidMount() {
        this.getMediaPics()
    }

    getMediaPics = async () => {
        const { totalCount } = await MediaLibrary.getAssetsAsync()
        const numImagesToGet = Math.min(totalCount, 500)

        const mediaLibrary = await MediaLibrary.getAssetsAsync({
            sortBy: MediaLibrary.SortBy.creationTime,
            first: numImagesToGet,
        })

        this.setState({
            fileSystemImages: mediaLibrary.assets
        })
    }

    receivePhoto = (photo) => {
        this.setState({
            fileSystemImages: [photo, ...this.state.fileSystemImages]
        })
    }

    navigateToGallery = () => {
        this.props.navigation.navigate("Gallery", { photos: this.state.fileSystemImages })
    }

    renderCamera = () => {
        const isFocused = this.props.navigation.isFocused();
        /*this.getMediaPics() this may be causing crashes/performance issues 
        VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc. Object {
  "contentLength": 8625,
  "dt": 622,
  "prevDt": 590,
} */

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
                    style={{ flex: 1 }}
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
            return <Text>Permission denied.</Text>;
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