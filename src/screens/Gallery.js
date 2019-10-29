import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import Photo from '../components/Photo'

export default (props) => {

    const [selectedPhoto, selectPhoto] = useState(null)

    const photos = props.navigation.getParam("photos", [])

    return (
        <View style={{flex: 1}}>
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
            {selectedPhoto !== null ? <View style={{height:40}}></View> : null}  
        </View>
    );
}