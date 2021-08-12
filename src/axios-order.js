import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-cbeae.firebaseio.com/'
});

export default instance;