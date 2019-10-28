import React, { Component } from 'react';
import AppContainer from './src/navigation/AppContainer'
import * as Permissions from 'expo-permissions';

export default class App extends Component {
  state = {
    camRollPermissions: null,
    locationPermissions: null,
    cameraPermissions: null,
    notifcationPermissions: null,
  }

  async componentDidMount() {
    let permission

    permission = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    const camRollPermissions = permission.status

    permission = await Permissions.askAsync(Permissions.CAMERA)
    const cameraPermissions = permission.status

    permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    const notifcationPermissions = permission.status

    permission = await Permissions.askAsync(Permissions.LOCATION)
    const locationPermissions = permission.status

    this.setState({
      camRollPermissions,
      cameraPermissions,
      locationPermissions,
      notifcationPermissions
    })
  }

  render() {
    return (
      <AppContainer {...this.state}/>
    )
  }
}