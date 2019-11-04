import React from 'react'
import { ImageBackground, TouchableWithoutFeedback, Dimensions, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default (props) => {

    const screenWidth = Dimensions.get("window").width
    return (
        <TouchableWithoutFeedback onPress={() => {
            if(props.selectedPhoto && props.selectedPhoto.id === props.photo.id) 
                props.selectPhoto(null)
            else
                props.selectPhoto(props.photo)
        }}>

            <View>
                <ImageBackground source={{ uri: props.photo.uri }}
                    style={{ width: screenWidth / 3, height: screenWidth / 3 }}
                >
                    {(props.selectedPhoto && props.selectedPhoto.id === props.photo.id ) ?
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