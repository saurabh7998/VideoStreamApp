import axios from 'axios';

const KEY = 'AIzaSyDKHoGdC_4sFl5y7naz1zwnUZ-xpcRByac';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})