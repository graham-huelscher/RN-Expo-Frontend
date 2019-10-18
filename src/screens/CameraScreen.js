import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { withNavigationFocus } from "react-navigation";
import CameraPreview from '../components/Camera/CameraPreview'
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

class CameraScreen extends Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    renderCamera() {
        const isFocused = this.props.navigation.isFocused();

        if (!isFocused) {
            return <View />;
        } else if (isFocused) {
            return (
                <CameraPreview type={this.state.type}/>
            )
        }
    }

    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
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