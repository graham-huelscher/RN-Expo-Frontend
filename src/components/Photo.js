import React, { useState } from 'react'
import { ImageBackground, TouchableWithoutFeedback, Dimensions, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default (props) => {
    const [isSelected, toggleIsSelected] = useState(false)

    if (props.selectedPhoto === props.id) { //&& isSelected !isSelected
        toggleIsSelected(!isSelected)
    }

    const screenWidth = Dimensions.get("window").width
    return (
        <TouchableWithoutFeedback onPress={() => {
            console.log(isSelected)
            toggleIsSelected(!isSelected)
            props.selectPhoto(props.id)
        }}>

            <View>
                <ImageBackground source={{ uri: props.uri }}
                    style={{ width: screenWidth / 3, height: screenWidth / 3 }}
                >
                    {isSelected ?
                        <View style={{
                            width: screenWidth / 3,
                            height: screenWidth / 3,
                            backgroundColor: 'white',
                            opacity: 0.8,
                            alignItems: "center",
                            justifyContent: "center"
                        }} >
                            <MaterialCommunityIcons name={"checkbox-marked-circle"} size={56} />
                        </View> : null}
                </ImageBackground>
            </View>

        </TouchableWithoutFeedback >
    )
}