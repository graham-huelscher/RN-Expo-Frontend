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
    };

    async componentDidMount() {
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
        console.log(photo)
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