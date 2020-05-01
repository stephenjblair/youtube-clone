import axios from 'axios';

export default axios.create({
    baseURL: 'https://wwww.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: ''
    }
})