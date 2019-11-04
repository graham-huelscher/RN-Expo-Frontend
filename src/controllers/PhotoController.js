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

export default PhotoController = {
    uploadPhoto: async (photo, body) => {
        const formData = createFormData(photo, body)
        console.log(formData)
        await axios.post('http://localhost:8080/api/photos/', formData, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        })
            .catch(error => {
                throw error
            })
    },
    test: async () => {
        const response = await axios.get('http://localhost:8080/test')
        console.log(response.data)
    }
}