import React, { useState } from 'react';
import { FlatList, Image } from 'react-native';
import Photo from '../components/Photo'

export default (props) => {

    const [selectedPhoto, selectPhoto] = useState("")

    const photos = props.navigation.getParam("photos", [])

    return (
        <FlatList
            data={photos}
            renderItem={({ item }) => (
                <Photo
                    id={item.id}
                    uri={item.uri}
                    selectedPhoto={selectedPhoto}
                    selectPhoto={selectPhoto}
                />
            )}
            keyExtractor={photo => photo.id}
            extraData={selectedPhoto}
            horizontal={false}
            numColumns={3}
        />
    );
}