import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Grid, Col } from "react-native-easy-grid";
import { Ionicons } from '@expo/vector-icons';

export default () => {


    return (
        <React.Fragment>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
                <Ionicons name="md-reverse-camera" size={32} color="white" />
            </Col>
            <Col></Col>
            <Col></Col>

        </React.Fragment>
    );
}
