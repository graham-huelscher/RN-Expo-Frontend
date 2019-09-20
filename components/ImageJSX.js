import React, { Component } from 'react';
import { Image, Dimensions, Alert } from 'react-native'

class ImageJSX extends Component {

    state = {
        screenWidth: Dimensions.get("window").width
    }

    render() {
        const imageHeight = Math.floor(this.state.screenWidth * 1.1)
        const imageUri = `https://lh3.googleusercontent.com/7zjeqJwd1jiJaSlI_0A4izyf6pnYqRXcYI36pcyoULfaWXpoyXSm-OivgcnS1uw8fZG7TeHzhzV6pLKEY8qEorYj4A=s${imageHeight}-c`
        return (
            <Image source={{ uri: imageUri }}
                style={{ width: this.state.screenWidth, height: imageHeight }} />
        )
    }
}

export default ImageJSX