import React, { useState } from 'react';
import { FlatList, View, Button  } from 'react-native';
import Photo from '../components/Photo'
import PhotoController from '../controllers/PhotoController'

export default (props) => {

    const [selectedPhoto, selectPhoto] = useState(null)

    const photos = props.navigation.getParam("photos", [])
    const uploadPhoto = () => {
        PhotoController.uploadPhoto(selectedPhoto, null)
        //PhotoController.test()
    } 
    return (
        <View style={{flex: 1}}>
            <FlatList
                data={photos}
                renderItem={({ item }) => (
                    <Photo
                        photo = {{id:item.id, uri: item.uri}}
                        selectedPhoto={selectedPhoto}
                        selectPhoto={selectPhoto}
                    />
                )}
                keyExtractor={photo => photo.id}
                extraData={selectedPhoto}
                horizontal={false}
                numColumns={3}
            />
            {selectedPhoto !== null ? <View style={{backgroundColor: "transparent"}}><Button onPress={()=> uploadPhoto()} title="Upload"></Button></View> : null}  
        </View>
    );
}