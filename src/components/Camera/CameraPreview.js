import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { Row, Grid } from "react-native-easy-grid";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class CameraPreview extends Component {
    state = {
        focus: Camera.Constants.AutoFocus.on
    }

    refocus = () => {
        console.log('refocus')
        this.setState({
            focus: Camera.Constants.AutoFocus.off
        }, ()=> this.setState({
            focus: Camera.Constants.AutoFocus.on
        }))
    }
    render() {
        const camWidth = Dimensions.get("window").width
        const camHeight = camWidth
        return (
            <Grid>
                <Row>
                    <TouchableWithoutFeedback onPress= {()=> this.refocus()}>
                        <Camera style={{ width: camWidth, height: camHeight }} type={this.props.type} autoFocus={this.state.focus}
                            ref={(cam) => this.cam = cam}
                            ratio={'1:1'}
                        />
                    </TouchableWithoutFeedback>

                </Row>
                <Row></Row>
            </Grid>
        )
    }
}