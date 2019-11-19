import axios from 'axios'
import { Platform } from 'react-native';
import path from 'path'

const api = 'https://fierce-sea-12319.herokuapp.com'

export default PhotoController = {
    uploadPhoto: async (photo) => {

        console.log(photo)

        const data = new FormData();
        data.append('photo',
            {
                uri: photo.uri,
                name: '',
                type:'image/jpg' 
            });

        const res = await axios.post(`${api}/api/photos`, data)
            .catch(error => { throw error }); 
        console.log(res) 
        // const data = new FormData();
        // data.append('name', 'testName'); // you can append anyone.
        // data.append('photo', {
        //     uri: photo.uri,
        //     type: 'image/jpeg', // or photo.type
        //     name: 'testPhotoName'
        // });
        // fetch(url, {
        //     method: 'post',
        //     body: data
        // }).then(res => {
        //     console.log(res)
        // });


        // const formData = createFormData(photo);
        // console.log(formData)

        // const res = await axios({
        //     url: `${api}/api/photos`,
        //     method: "POST",
        //     data: formData

        // })

        // const res = axios.post(`${api}/api/photos`, formData, {
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'multipart/form-data'
        //         }
        //     })
        //});
    },
    getPhoto: async () => {
        const response = await axios.get(`${api}/api/photos`)
        console.log(response.data)
    }
}