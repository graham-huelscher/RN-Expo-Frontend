import axios from 'axios'

const createFormData = (photo, body) => {
    const data = new FormData()
    data.append('file', {
        name: photo.id,
        //uri: Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
        uri: photo.uri
    });
    if (body) {
        Object.keys(body).forEach(key => {
            data.append(key, body[key])
        });
    }

    return data;
}

const api = 'https://fierce-sea-12319.herokuapp.com/'

export default PhotoController = {
    uploadPhoto: async (photo, body) => {
        const formData = createFormData(photo, body)
        console.log(formData)
        // await axios.post(`${api}photos`, formData, {
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })
        //     .catch(error => {
        //         throw error
        //     })
        console.log(await axios.post(`${api}photos/`, {hello: "yes"}))
    },
    test: async () => {
        console.log("here") 
        const response = await axios.get(`${api}test`)
        console.log(response.data)
    }
}