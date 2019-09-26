import React, { useState } from 'react';
import { Image, Dimensions, TouchableWithoutFeedback } from 'react-native'

export default (props) => {
    const [screenWidth, setScreenWidth] = useState(Dimensions.get("window").width);
    const [firstTapTimestamp, setFirstTapTimestamp] = useState(0);

    const imageHeight = Math.floor(screenWidth * 1.1)
    const imageUri = `https://lh3.googleusercontent.com/7zjeqJwd1jiJaSlI_0A4izyf6pnYqRXcYI36pcyoULfaWXpoyXSm-OivgcnS1uw8fZG7TeHzhzV6pLKEY8qEorYj4A=s${imageHeight}-c`


    return (
        <TouchableWithoutFeedback
            onPress={() => {
                if (Date.now() - firstTapTimestamp <= 250) {
                    props.toggleImageLike()
                }
                else setFirstTapTimestamp(Date.now())
            }}>
            <Image source={{ uri: imageUri }}
                style={{ width: screenWidth, height: imageHeight }} />
        </TouchableWithoutFeedback >
    )
}