import React from 'react'
import { Image, TouchableOpacity, Dimensions } from 'react-native'

export default (props) => {
    const screenWidth = Dimensions.get("window").width
    return (
        <TouchableOpacity onPress={()=> props.selectPhoto(props.id)}>

            <Image source={{ uri: props.uri }}
                style={{ width: screenWidth / 3, height: screenWidth / 3 }}
            />

        </TouchableOpacity>
    )
}